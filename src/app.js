import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import url from 'url';

import './lib/patchGetUserMedia';
import parseUri from './lib/parseUri';
import { createPhone } from './modules/Phone';
import App from './containers/App';

const defaultPrefix = process.env.PREFIX;
const defaultApiConfig = process.env.API_CONFIG;

const currentUri = window.location.href;
const pathParams = parseUri(currentUri);
const clientIdFromParams = pathParams.clientId || pathParams.appKey;
const clientSecretFromParams = pathParams.clientSecret || pathParams.appSecret;
const authProxy = pathParams.authProxy;
const enableDiscovery = !!pathParams.discovery;
const discoverAppServer = pathParams.discoverAppServer;
const apiConfig = {
  clientId: clientIdFromParams,
  clientSecret: clientIdFromParams
    ? clientSecretFromParams
    : defaultApiConfig.appSecret,
  server: pathParams.appServer,
};

console.log(apiConfig);
if (enableDiscovery) {
  apiConfig.enableDiscovery = enableDiscovery;
  apiConfig.discoveryServer = discoverAppServer || apiConfig.server;
}
if (!authProxy && pathParams.appKey) {
  console.warn(
    'appKey is deprecated, please change to clientId. https://github.com/ringcentral/ringcentral-embeddable/blob/master/docs/config-client-id-and-secret.md'
  );
}
if (
  !authProxy &&
  apiConfig.clientId &&
  apiConfig.clientId === defaultApiConfig.appKey
) {
  console.warn(
    'Default RingCentral client id is deprecated, it is required to setup your own RingCentral Client Id, Please stop using it soon before it is completely removed. Please follow here to setup your own RingCentral app client id: https://github.com/ringcentral/ringcentral-embeddable/blob/master/docs/config-client-id-and-secret.md'
  );
}
if (!authProxy && !apiConfig.clientId) {
  console.error(
    'From v1.0.2, It is required to setup your own RingCentral Client Id. Please follow here to setup your own RingCentral app client id: https://github.com/ringcentral/ringcentral-embeddable/blob/master/docs/config-client-id-and-secret.md'
  );
  // don't throw error in PR tests
  if (window.location.hostname !== 'localhost') {
    throw new Error('RingCentral App Client Id is required.');
  }
}

const appVersion = process.env.APP_VERSION;
const externalAppVersion = pathParams.appVersion || appVersion;

const {
  stylesUri,
  userAgent,
  analyticsKey,
  enableErrorReport,
  authorizationCode,
  authorizationCodeVerifier,
  defaultCallWith,
  enableFromNumberSetting,
  showMyLocationNumbers,
  disconnectInactiveWebphone,
  disableInactiveTabCallEvent,
  disableLoginPopup,
  multipleTabsSupport,
  enableWebRTCPlanB,
  brand,
  enableRingtoneSettings,
} = pathParams;

const defaultBrand = brand || process.env.BRAND;
const brandConfig = process.env.BRAND_CONFIGS[defaultBrand];

if (process.env.NODE_ENV === 'production') {
  const styleName = 'app.css';
  const style = document.querySelector(`link[href="${styleName}"]`);
  if (!style) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = styleName;
    document.head.appendChild(link);
  }
}

const redirectUri = pathParams.redirectUri || process.env.REDIRECT_URI;
const proxyUri = pathParams.proxyUri || process.env.PROXY_URI;
const disableCall = typeof pathParams.disableCall !== 'undefined';
const disableMessages = typeof pathParams.disableMessages !== 'undefined';
const disableReadText = typeof pathParams.disableReadText !== 'undefined';
const disableConferenceInvite =
  typeof pathParams.disableConferenceInvite === 'undefined' ||
  pathParams.disableConferenceInvite === 'true';
const disableGlip =
  typeof pathParams.disableGlip === 'undefined' ||
  pathParams.disableGlip === 'true';
const disableMeeting = typeof pathParams.disableMeeting !== 'undefined';

const prefix = pathParams.prefix || defaultPrefix;
const fromAdapter = !!pathParams.fromAdapter;
const fromPopup = !!pathParams.fromPopup;
let _errorReportToken = null;
if (enableErrorReport) {
  _errorReportToken = process.env.ERROR_REPORT_KEY;
}
if (pathParams.errorReportToken) {
  _errorReportToken = pathParams.errorReportToken;
}
const errorReportSampleRate = pathParams.errorReportSampleRate || '0.1';
const errorReportProjectId = pathParams.errorReportProjectId || '16';
const errorReportEndpoint =
  (_errorReportToken &&
    `http://${_errorReportToken}@ec2-13-124-226-35.ap-northeast-2.compute.amazonaws.com/${errorReportProjectId}`) ||
  null;

const recordingLink = process.env.RECORDING_LINK;

const phone = createPhone({
  apiConfig,
  brandConfig,
  prefix,
  appVersion,
  redirectUri,
  proxyUri,
  stylesUri,
  disableCall,
  disableMessages,
  disableReadText,
  disableConferenceInvite,
  disableGlip,
  disableMeeting,
  authProxy,
  userAgent,
  analyticsKey,
  errorReportEndpoint,
  errorReportSampleRate,
  recordingLink,
  authorizationCode,
  authorizationCodeVerifier,
  defaultCallWith,
  disableInactiveTabCallEvent: !!disableInactiveTabCallEvent,
  enableFromNumberSetting: !!enableFromNumberSetting,
  showMyLocationNumbers: !!showMyLocationNumbers,
  disconnectInactiveWebphone: !!disconnectInactiveWebphone,
  disableLoginPopup: !!disableLoginPopup,
  multipleTabsSupport: !!multipleTabsSupport || fromPopup,
  enableWebRTCPlanB,
  forceCurrentWebphoneActive: fromPopup,
  fromPopup,
  enableRingtoneSettings,
  brandBaseUrl: process.env.HOSTING_URL
    ? process.env.HOSTING_URL
    : url.resolve(window.location.href, './'),
});

const store = createStore(phone.reducer);

phone.setStore(store);

window.phone = phone;

window.addEventListener('message', (e) => {
  const data = e.data;
  console.log('==============================');
  console.log(data.type);
  console.log(data?.call);
  console.log('==============================');
  if (data) {
    switch (data.type) {
      case 'rc-call-ring-notify':
        // get call on active call updated event
        console.log(data.call);
        const postCallRing = {
          Type: 'CALL',
          EventType: 'INBOUND',
          Action: 'NOTIFY',
          ANI: data.call.from,
          ExternalReferenceID: data.call.id,
        };
        postToSAP(postCallRing);
        break;
      case 'rc-call-start-notify':
        // get call when a incoming call is accepted or a outbound call is connected
        console.log(data.call);
        const postCallStart = {
          Type: 'CALL',
          EventType: ' INBOUND',
          Action: 'ACCEPT',
          ANI: data.call.from,
          ExternalReferenceID: data.call.id,
        };
        postToSAP(postCallStart);
        break;
      case 'rc-call-end-notify':
        // get call on call end event
        console.log(data.call);
        const postCallEnd = {
          Type: 'CALL',
          EventType: 'UPDATEACTIVITY',
          Action: 'END',
          ANI: data.call.from,
          ExternalReferenceID: data.call.id,
        };
        postToSAP(postCallEnd);
        break;
      default:
        break;
    }
  }
});

const postToSAP = (eventPayload) => {
  window.parent.postMessage(eventPayload, '*');
};

ReactDOM.render(
  <App
    phone={phone}
    showCallBadge={!fromAdapter}
    appVersion={externalAppVersion}
  />,
  document.querySelector('div#viewport')
);
