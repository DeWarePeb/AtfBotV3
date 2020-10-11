const discord = require("discord.js");
const fs = require("fs");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");

        let reason = args.slice(1).join(' ');
        let warnChannel = message.guild.channels.cache.find(c => c.name == "strikes");
        let user = message.mentions.users.first();

        if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');

        if (reason.length < 1) return message.reply('You must have a reason for the warning.');

        let dmsEmbed = new discord.MessageEmbed()
            .setTitle("Warn")
            .setColor("BLACK")
            .setDescription(`You have been warned on \`${message.guild.name}\``)
            .addField("Warned by", message.author.tag)
            .addField("Reason", reason);

        warnChannel.send(dmsEmbed);
        user.send(dmsEmbed);

        message.delete();

        message.channel.send(`${user.tag} has been warned`)
    },
    aliases: [],
    description: 'Warn someone'
}