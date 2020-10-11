const discord = require('discord.js');

module.exports = {
    run: async (client, message) => {
        let embed = new discord.MessageEmbed()
            .setTitle('Rules')
            .setColor('BLACK')
            .addFields(
                {name: `Rule 1`, value: `**•DO NOT** go afk in public sessions , if you are going to do so , simply just warp to your facility or apartment, or just go to story mode, if we find out you got killed or stabbed for being afk it will be an automatic strike no exceptions`, inline: true},
                {name: `Rule 2`, value: `**•DO NOT** use any alien weapons , if your not confident at fighting don’t fight at all`, inline: true},
                {name: `Rule 3`, value: `**•DO NOT** accept random friend request, and do no exceed above 300 friends`, inline: true},
            )
        return message.channel.send(embed);
    },
    aliases: [],
    description: 'Get the bot to say something'
}