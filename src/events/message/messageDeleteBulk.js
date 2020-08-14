const discord = require("discord.js");

module.exports = (client, messages) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var LogEmbed = new discord.MessageEmbed()
        .setColor('RED')
        .setAuthor("message bulk delete", messages.random().guild.iconURL)
        .addField('channel', messages.random().channel)
        .addField('messages count', messages.array().length + `\n**----------------------**`)
        .setTimestamp()
    logChannel.send(LogEmbed);
};