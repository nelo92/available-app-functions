const functions = require('firebase-functions');
const request = require('request');

// exports.helloWorld = functions.https.onRequest((req, res) => {
//     // functions.logger.info("Call function helloWorld...", { structuredData: true });
//     res.set("Access-Control-Allow-Origin", "*");
//     res.set("Access-Control-Allow-Credentials", "true");
//     res.send("Hello from Firebase!");
//     // functions.logger.info("Call function helloWorld.");
// });

exports.checkstatus = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");
    let uri = req.query.uri;
    request(uri, (e, r, b) => {
        res.json({
            uri: uri,
            status: r.statusCode,
            error: e
        });
    });
});