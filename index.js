/**
 * Created by petersquicciarini on 1/31/17.
 */

var express = require('express'),
    app = express();

app.get('*', function(req, res) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress,
        //ip = req.ip,
        lang = req.header('Accept-Language').slice(0, 5),
        os = /\(([^)]+)\)/.exec(req.header('User-Agent'))[0].replace(/[)(]/g, '');
    res.send(JSON.stringify({ ipaddress: ip, language: lang, software: os }));
});

app.listen(process.env.PORT || 5000);