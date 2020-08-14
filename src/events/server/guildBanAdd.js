const discord = require("discord.js");

module.exports = (guild, user, client) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var embed = new discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor("user banned", guild.iconURL)
    .addField('banned user', user.tag)
    .addField('user id', user.id + `\n**----------------------**`)
    .setTimestamp()
    logChannel.send(embed).catch()
};