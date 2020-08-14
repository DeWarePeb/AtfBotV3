const discord = require('discord.js');
const { formatDate } = require("../../utils/function.js");

module.exports = {
    run: async (client, message) => {
        var mem = message.guild.members.cache
            .filter((m) => !m.user.bot)
            .sort((a, b) => b.user.createdAt - a.user.createdAt)
            .first();
        var Embed = new discord.MessageEmbed()
            .setTitle(`The youngest member in ${message.guild.name}`)
            .setColor(`BLACK`)
            .setFooter(`Date format: MM/DD/YYYY`)
            .setDescription(
                `${mem.user.tag} is the youngest user in ${
                message.guild.name
                }! Account creation date: ${formatDate(mem.user.createdAt)}`
            );
        message.channel.send(Embed);
    },
    aliases: [],
    description: 'Get the youngest account in the server'
}