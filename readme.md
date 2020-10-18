# Project available-app-functions

Creator : MAU

Project Url :
https://us-central1-available-app-functions-d7588.cloudfunctions.net/

Project Console :
https://console.firebase.google.com/project/available-app-functions-d7588/overview

# Firebase function

// Create and Deploy Your First Cloud Functions
https://firebase.google.com/docs/functions/write-firebase-functions

```
exports.helloWorld = functions.https.onRequest((request, response) => {
functions.logger.info("Hello logs!", { structuredData: true });
response.send("Hello from Firebase!");
});
```

# CORS

```
// Add CORS to your index.js
// const cors = require('cors')({ origin: true });
// Put this line to your function
// Automatically allow cross-origin requests
// cors(req, res, () => { });
```

# Reference

see https://firebase.google.com/docs/functions/http-events
