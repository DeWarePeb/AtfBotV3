const discord = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    if (!oldMessage.guild.bot) return;
    if (oldMessage.content === newMessage.content) {
        return;
    }
    var LogEmbed = new discord.MessageEmbed()
        .setAuthor(oldMessage.author.tag)
        .setColor("BLACK")
        .setDescription("Edited message")
        .addField("Before", oldMessage.content, true)
        .addField("After", newMessage.content, true)
        .setTimestamp();
    logChannel.send(LogEmbed);
};