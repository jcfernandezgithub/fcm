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

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./firebase-messaging-sw.js')
		.then(function(registration) {
			console.log('Registration successful, scope is:', registration.scope);
		}).catch(function(err) {
			console.log('Service worker registration failed, error:', err);
		});
	}

messaging.requestPermission().then(function () {
	console.log("Granted");
	return messaging.getToken();
}).then(token => {
	console.log(token);
}).catch((err) => {
	console.log(err);
})