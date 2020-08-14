const discord = require("discord.js");

module.exports = (client, message) => {
    if (!message.guild.me) return;

    if (!message.partial) {
        const logChannel = client.channels.cache.get('700265762174009384');
        if (logChannel) {
            var embed = new discord.MessageEmbed()
                .setTitle('Deleted Message')
                .setColor("BLACK")
                .addField('Author', `@${message.author.tag}`, true)
                .addField('Channel', `#${message.channel.name}`, true)
                .setDescription(message.content)
                .setFooter(`Author ID: (${message.author.id}) | Message ID: (${message.author.id}) `)
                .setTimestamp();
            logChannel.send(embed);
        }
    }
};