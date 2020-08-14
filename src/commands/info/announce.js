const discord = require('discord.js');
const { prefix } = require('../../configs/config.json');

module.exports = {
    run: async (client, message) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have permissions.");

        const args = message.content.split(" ");
        const announcement = args.splice(1).join(" ");
        var announcelog = client.channels.cache.get('575152713181167627');
        
        let embed = new discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle("**Announcement**")
        .setDescription(announcement)
        .setFooter(`Announced by HC`)
        .setTimestamp()

        if (!announcelog) {
            message.reply("Channels doesnt exsist.")
            return
        }
        if (!announcement) {
            message.reply("What do you want me to announce?")
            return
        }
        else {
            message.reply("Announcement succesful")
            if (announcelog && announcement) {
                announcelog.send(embed)
            }
        }
    },
    aliases: [],
    description: 'Announce something'
}