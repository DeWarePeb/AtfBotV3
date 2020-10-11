const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        const announceChannnel = message.guild.channels.cache.find(c => c.name == "announcements");
        const recruitChannel = message.guild.channels.cache.find(c => c.name == "accepted❗");

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have permissions.");
        if (message.guild.id != "716382053842813000") return message.reply("Wrong server");
        if (!announceChannnel) {
            message.channel.send("no announcements channel")
        }
        if (!recruitChannel) {
            message.channel.send("no accepted channel")
        }
        let channel = recruitChannel;
        let position = channel.position;
        channel.clone().then((channel2) => {
            channel2.setPosition(position)
            channel.delete()
            channel2.send('@everyone')
            var embed = new discord.MessageEmbed()
            .setTitle("You have been accepted into ATFO!")
            .setDescription("Click on the title to get into the recruitment server\n leave this server once you join the recruitment server!")
            //.setURL('https://discord.gg/aRmvzgJ')
            .setColor("BLACK")  
            .setTimestamp();

            channel2.send(embed);
            channel2.send('https://discord.gg/aRmvzgJ');
        })
        announceChannnel.send("@everyone\n all applications have been revivewed . if you have any questions feel free to DM DeWarePeb#3953.")

    },
    aliases: [],
    description: 'AutoMarks apps'
}