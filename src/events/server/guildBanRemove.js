const discord = require("discord.js");

module.exports = (guild, user) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var embed = new discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor("user unbanned", guild.iconURL)
    .addField('unbanned user', user.tag)
    .addField('user id', user.id + `\n**----------------------**`)
    .setTimestamp()
    logChannel.send(embed).catch()
};