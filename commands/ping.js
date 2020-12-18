module.exports = {
    name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    aliases: ['reply-pls', 'get-response'],
    execute(message, args) {
        message.channel.send('Pong.');
    },
};