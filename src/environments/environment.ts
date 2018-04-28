// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCueK9-NK3lXKvZC1TCMxGT5_cdWNFKQ1Q",
    authDomain: "cadastrodepaciente.firebaseapp.com",
    databaseURL: "https://cadastrodepaciente.firebaseio.com",
    projectId: "cadastrodepaciente",
    storageBucket: "cadastrodepaciente.appspot.com",
    messagingSenderId: "175695341049"
  }
};
