// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyDmdjJSF-TTpt1_LmFMTHlGSswAxlJqiig',
      authDomain: 'mospri-f4891.firebaseapp.com',
      projectId: 'mospri-f4891',
      storageBucket: 'mospri-f4891.appspot.com',
      messagingSenderId: '562343219153',
      appId: '1:562343219153:web:12a205abd2305e8bcbdaf0',
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true,
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
