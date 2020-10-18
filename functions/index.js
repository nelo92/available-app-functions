const functions = require('firebase-functions');
const request = require('request');

exports.helloWorld = functions.https.onRequest((req, res) => {
    // functions.logger.info("Call function helloWorld...", { structuredData: true });
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");
    res.send("Hello from Firebase!");
    // functions.logger.info("Call function helloWorld.");
});

exports.checkstatus = functions.https.onRequest((req, res) => {
    // functions.logger.info("Call function checkstatus...");
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");
    let url = req.query.url;
    // functions.logger.info("url = " + url);
    request(url, (e, r, b) => {
        // functions.logger.info('statusCode:', r && r.statusCode);
        // functions.logger.info('error:', e);
        res.json({
            statusCode: r.statusCode,
            error: e
        });
    });
    // functions.logger.info("Call function checkstatus.");
});
