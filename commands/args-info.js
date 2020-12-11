module.exports = {
    name: 'args-info',
    description: 'Informatie over de gegeven argumenten',
    args: true,
    usage: '<args>',
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Argumenten: ${args}\nAantal argumenten: ${args.length}`);
    },
};