const discord = require("discord.js");

module.exports = (client, role) => {
    const logChannel = client.channels.cache.get('700265762174009384');
    if (logChannel) {
        var embed = new discord.MessageEmbed()
            .setColor('BLACK')
            .setAuthor("role deleted", role.guild.iconURL)
            .addField('role name', role.name)
            .addField('role id', role.id + `\n**----------------------**`)
            .setTimestamp()
        logChannel.send(embed);
    }
};