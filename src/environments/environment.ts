// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  logInUrl: 'https://flipper-login.herokuapp.com/api',
  firebase: {
    apiKey: 'AIzaSyCxxXQy6wivXJQO4pcFW0Wi6pIXV_bqyhU',
    authDomain: 'flipper-front.firebaseapp.com',
    databaseURL: 'https://flipper-front.firebaseio.com',
    projectId: 'flipper-front',
    storageBucket: 'flipper-front.appspot.com',
    messagingSenderId: '910126592352'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
