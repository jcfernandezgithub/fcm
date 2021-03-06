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

messaging.requestPermission()
	.then(function() {
		console.log('Granted');
		document.getElementById('permission').innerHTML = "Granted";
		return messaging.getToken();
	})
	.then(function (token) {
		console.log(token);
		document.getElementById('token').innerHTML = token;
	})
	.catch(function (err) {
		console.log(err);
	});

	messaging.onMessage(function(payload) {
		console.log('onMessage: ', payload);
	});