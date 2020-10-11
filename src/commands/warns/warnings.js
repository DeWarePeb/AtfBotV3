const discord = require("discord.js");
const fs = require("fs");
const warns = require('../../../warnings.json');

module.exports = {
    run: async (client, message, args) => {
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if (!wUser) return message.channel.send("Please mention a valid member in this server.");



        let warnembed = new discord.MessageEmbed()
            .setTitle("Warnings")
            .addField("User", wUser)
            .addField("Total Warnings", warns[wUser.id].warns)
            .setColor("BLACK");

        message.channel.send(warnembed); 
    },
    aliases: [],
    description: 'Get how many warnings someone has'
}