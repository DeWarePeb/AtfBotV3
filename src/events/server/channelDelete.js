const discord = require("discord.js");

module.exports = (client, channel) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var embed = new discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('channel deleted', channel.guild.iconURL)
    .addField('channel', channel)
    .addField('channel id', channel.id + `\n**----------------------**`)
    .setTimestamp()
    logChannel.send(embed).catch()
};