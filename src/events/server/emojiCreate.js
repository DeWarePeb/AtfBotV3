const discord = require("discord.js");

module.exports = (client, emoji) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var embed = new discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('emoji created', emoji.guild.iconURL)
    .addField('emote name', emoji.name)
    .addField('emote', emoji + `\n**----------------------**`)
    .setTimestamp()
    logChannel.send(embed).catch()
};