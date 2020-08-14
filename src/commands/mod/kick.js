const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!args[0]) return message.reply("Who?");

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have permissions.");

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I dont have permissions");

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));

        var reason = args.slice(1).join(" ");

        if (!kickUser) return message.reply("cannot find user");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Cannot kick this member");

        var embed = new discord.MessageEmbed()
            .setColor("BLACK")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Kicked:** ${kickUser} (${kickUser.id})
        **Kicked By:** ${message.author}
        **reason: ** ${reason}`);

        kickUser.kick(reason).catch(err => {
            if (err) return message.channel.send(`Something went wrong`);
        });

        message.reply(embed);
    },
    aliases: [],
    description: 'Kickes a guild member by their ID'
}