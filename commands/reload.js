module.exports = {
    name: 'reload',
    description: 'herlaad een commando',
    aliases: ['herlaad'],
    execute(message, args) {
        if (!args.length) return message.channel.send(`Je hebt geen commando opgegeven om te herladen, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(`Er is geen commando met de naam: \`${commandName}\`, ${message.author}!`);

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Het commando \`${command.name}\` is opnieuw geladen!`);
        } catch (error) {
            console.error(error);
            message.channel.send(`Er is een fout opgetreden bij het herladen van: \`${command.name}\`:\n\`${error.message}\``);
        }
    },
};