const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
                "Sorry but you do not have permission to unmute anyone"
            );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("I do not have permission to manage roles.");
        }

        const user = message.mentions.members.first();
        const logChannel = client.channels.cache.get('742366740691812380');

        if (!user) {
            return message.channel.send(
                "Please mention the member to who you want to unmute"
            );
        }
        var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        var muterole = message.guild.roles.cache.find(x => x.name === "Muted" || x.name === "muted")


        if (user.roles.cache.has(muterole)) {
            return message.channel.send("Given User do not have mute role so what i am suppose to take")
        }


        user.roles.remove(muterole)

        await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)

        user.send(`You are now unmuted from **${message.guild.name}**`)

    },
    aliases: [],
    description: 'Unmute someone'
}