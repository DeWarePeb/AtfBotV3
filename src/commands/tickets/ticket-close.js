const discord = require("discord.js");

module.exports = {
    run: async (client, message) => {

        const categoryID = "741706521590628433";

        if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("no");

        if (message.channel.parentID == categoryID) {
            message.channel.delete();

            var embedCreateTicket = new discord.MessageEmbed()
                .setTitle("ticket," + message.channel.name)
                .setDescription("ticket is marked **complete**")
                .setFooter("ticket closed");

            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "test");
            if (!ticketChannel) return message.reply("channel doesnt exsist");

            ticketChannel.send(embedCreateTicket);

        } else {

            message.channel.send("wrong channel");

        }

    },
    aliases: [],
    description: 'Close a ticket'
}