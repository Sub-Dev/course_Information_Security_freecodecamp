const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const app = express();
















































module.exports = app;
// Aplica segurança extra
app.use(helmet.hidePoweredBy());
// Bloqueia iframes (protege contra clickjacking)
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com'],
  }
}));
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy({ policy: 'origin' }));
ninetyDaysInSeconds = 90 * 24 * 60 * 60;
timeInSeconds = ninetyDaysInSeconds;
app.use(helmet.hsts({ maxAge: timeInSeconds, force: true }));
// app.use(helmet.expectCt({ maxAge: 604800, enforce: true }));

const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
