// Create the Angular module
angular.module('myApp', ['firebase'])
.controller('AuthController', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
    
    // Make sure this runs before any Firebase operations
    if (!firebase.apps.length) {
        // Initialize Firebase
        // const config = {
        //     apiKey: "YOUR_API_KEY",
        //     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        //     projectId: "YOUR_PROJECT_ID",
        //     storageBucket: "YOUR_PROJECT_ID.appspot.com",
        //     messagingSenderId: "YOUR_SENDER_ID",
        //     appId: "YOUR_APP_ID"
        // };

        const config = {
            apiKey: "AIzaSyD43ELMWdESkAA8vQ-p4-e4hq8CAIC2wmY",
            authDomain: "login-52519.firebaseapp.com",
            projectId: "login-52519",
            storageBucket: "login-52519.firebasestorage.app",
            messagingSenderId: "863554395533",
            appId: "1:863554395533:web:a4edd31c19f30004de31c4",
          };
        
        firebase.initializeApp(config);
    }

    // Now create the auth instance
    const auth = $firebaseAuth(firebase.auth());
    
    // Rest of your controller code remains the same
    $scope.user = null;
    
    $scope.signInWithGoogle = function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.$signInWithPopup(provider)
            .then(function(result) {
                $scope.user = result.user;
                console.log('Signed in as:', result.user.displayName);
            })
            .catch(function(error) {
                console.error('Authentication failed:', error);
            });
    };
    
    // ... rest of your code
}]);