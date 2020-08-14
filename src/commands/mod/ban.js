const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!args[0]) return message.reply("Who?");

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have permissions.");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("I dont have permissions");

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));

        var reason = args.slice(1).join(" ");

        if (!banUser) return message.reply("cannot find user");

        if (banUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Cannot ban this member");

        var embed = new discord.MessageEmbed()
            .setColor("BLACK")
            .setThumbnail(banUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Banned:** ${banUser} (${banUser.id})
        **Banned By:** ${message.author}
        **reason: ** ${reason}`);

        banUser.ban(reason).catch(err => {
            if (err) return message.channel.send(`Something went wrong`);
        });

        message.reply(embed);
    },
    aliases: [],
    description: 'Bans a guild member by their ID'
}