// Twilio Credentials
const accountSid = 'ACb6c22dfaa61a81e5b623e5897fe7f44b';
const authToken = process.env.AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// Send a text message to a specified number, and say which game is now on
var sendMessage = function(userNumber, gameName) {
  client.messages
    .create({
      to: '+1' + userNumber,
      from: '+19473334263',
      body: gameName + ': Game ON!',
    })
    .then(message => console.log(message.sid));
}

module.exports = sendMessage;