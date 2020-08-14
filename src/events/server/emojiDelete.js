const discord = require("discord.js");

module.exports = (client, emoji) => {
    const logChannel = client.channels.cache.get('700265762174009384');

    var embed = new discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('emoji deleted', emoji.guild.iconURL)
    .addField('emote name', emoji.name)
    .addField('emote url', emoji.url+ `\n**----------------------**`)
    .setTimestamp()
    logChannel.send(embed).catch()
};