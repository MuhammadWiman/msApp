// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDifQRePehp9--HSV6m10QnXgO12ZGYC00",
  authDomain: "fluent-grammar-298304.firebaseapp.com",
  databaseURL: "https://fluent-grammar-298304-default-rtdb.firebaseio.com",
  projectId: "fluent-grammar-298304",
  storageBucket: "fluent-grammar-298304.appspot.com",
  messagingSenderId: "298899238484",
  appId: "1:298899238484:web:79ffd0feae32e06e6fc7c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



