const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No");

        const logChannel = client.channels.cache.get('742366740691812380');

        if (!args[0]) return message.reply("Who?");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission");

        var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if (!mutePerson) return message.reply("cannot find user");

        if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("No");

        var muteRole = message.guild.roles.cache.find(x => x.name === "muted" || x.name === "Muted")
        if (!muteRole) return message.channel.send("no muted role found");


        await (mutePerson.roles.add(muteRole.id));
        message.channel.send(`${mutePerson} has been muted.`);

    },
    aliases: [],
    description: 'Mute someone'
}