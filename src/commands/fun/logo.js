const discord = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        const embed = new discord.MessageEmbed()
            .setTitle(`Crew logo`)
            .setImage("https://cdn.discordapp.com/attachments/625873846452486175/720644029829611560/image0.jpg")
            .setColor("BLACK")

        return message.channel.send(embed);
    },
    aliases: [],
    description: 'The crew logo'
}