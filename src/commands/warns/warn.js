const discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const warns = require('./warnings.json');



module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are not allowed to run that command!");

        let wUser =  message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let warnChannel = message.guild.channels.cache.find(c => c.name == "❌strikes");
        if (!wUser) return message.channel.send("Please mention a valid member in this server.");
        if (wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Unable to warn staff members.")

        let reason = args.join(" ").slice(22);
        if (!reason) reason = "No reason specified.";

        if (!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };

        warns[wUser.id].warns++;

        fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
            if (err) console.log(err);
        });

        const warnembed = new discord.MessageEmbed()
            .setTitle("Warning Logged")
            .addField("User Warned", wUser)
            .addField("Reason", reason)
            .addField("Current Warnings", warns[wUser.id].warns)
            .setColor("BLACK");

        //message.channel.send(warnembed);
        warnChannel.send(warnembed);
        wUser.send(warnembed);
    },
    aliases: [],
    description: 'Warn someone'
}