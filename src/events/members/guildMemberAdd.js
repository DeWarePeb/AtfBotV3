const discord = require("discord.js");

module.exports = (client, member, message) => {

    var role = member.guild.roles.cache.get('625462119940227103');

    if (!role) return;

    if (member.user.bot) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('575107491873161229');

    if (!channel) return;
    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Welcome to ATFO ${member.user.username}!`)
        .setColor("#00ff00")
        .setFooter("Member joined")
        .setTimestamp();

    channel.send(joinEmbed);

};