importScripts('https://www.gstatic.com/firebasejs/7.9.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.2/firebase-messaging.js');

var firebaseConfig = {
	apiKey: "AIzaSyDt2lv3Bo-00_4qDMeBT8sYaUjCtxiq24w",
	authDomain: "cpcedev-939dd.firebaseapp.com",
	databaseURL: "https://cpcedev-939dd.firebaseio.com",
	projectId: "cpcedev-939dd",
	storageBucket: "cpcedev-939dd.appspot.com",
	messagingSenderId: "549821252482",
	appId: "1:549821252482:web:d34a2221494716edf5059b",
	measurementId: "G-QPEB2K2GLE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BGlaYXVP5X_YT78CS1g3k3jBPxL_MP-qX6JBR-r7fNsA18INGvHg84LezJ36lbwjG0Q5TNiwztcvK00hPfyXcaA");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
});