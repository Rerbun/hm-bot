const axios = require("axios");
const Discord = require("discord.js")

module.exports = {
    name: 'np',
    description: 'Als je wilt weten wat er te horen is op habbomix',
    cooldown: 15,
    aliases: ['now', 'now-playing'],
    execute(message, args) {
        axios.get('https://master.habbomix.nl/api/live/nowplaying/habbomix').then(function (response) {
            const npembed = new Discord.MessageEmbed()
                .setColor('#93FF5F')
                .setTitle('Nu op habbomix')
                .setURL('https://habbomix.nl')
                .addFields(
                    {name: 'dj:', value: `${response.data.live.is_live ? response.data.live.streamer_name : 'auto-dj' }`},
                    {name: 'nummer:', value: `${response.data.now_playing.song.text}`},
                    {name: 'luisteraars:', value: `${response.data.listeners.unique}`});


            message.channel.send(npembed);
            console.log(response.data.song);

        }).catch(function (error) {
            console.log(error);
            message.channel.send('Het is niet gelukt om de huidige status op te vragen')
        })
    },
};