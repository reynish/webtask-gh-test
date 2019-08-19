var Slack = require('slack');

module.exports = function(context, cb) {
    const token = context.secrets.TOKEN;
    const bot = new Slack({ token });
    bot.chat
        .postMessage({ text: 'blah', channel: 'food-bot' })
        .then(console.log)
        .then(response => cb(null, response));
};
