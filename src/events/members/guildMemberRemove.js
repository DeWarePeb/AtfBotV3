const discord = require("discord.js");

module.exports = (client, member) => {
    var channel = member.guild.channels.cache.get('622513188809736193');
    if (!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor("#ff0000")
        .setFooter("Member left")
        .setTimestamp();

    channel.send(leaveEmbed);

};