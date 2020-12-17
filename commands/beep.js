module.exports = {
    name: 'beep',
    description: 'beep!',
    guildOnly: true,
    execute(message, args) {
        message.channel.send('boop.');
    },
};