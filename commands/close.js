module.exports = {
    name: 'close',
    description: 'stopt het script',
    devOnly: true,
    execute(message, args) {
        let waitTime = 5000;
        message.channel.send(`sluit bot in ${waitTime/1000} seconden`);
        setTimeout(function () {return message.client.destroy()},waitTime);

    },
};