var Slack = require('slack');

module.exports = function(context, cb) {
    const token = context.secrets.TOKEN;
    const bot = new Slack({ token });
    console.log(bot.channels.list({ token: token }).then(console.log));
    bot.chat
        .postMessage({ text: 'blah', channel: 'food-bot' })
        .then(console.log)
        .then(response => cb(null, response))
        .catch(console.log);
};
