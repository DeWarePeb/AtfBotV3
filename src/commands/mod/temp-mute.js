const discord = require('discord.js');
const ms = require("ms");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No");

        const logChannel = client.channels.cache.get('742366740691812380');

        if (!args[0]) return message.reply("Who?");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission");

        var mutePerson = message.guild.member(message.mentions.users.first());

        if (!mutePerson) return message.reply("cannot find user");

        if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("No");

        var muteRole = message.guild.roles.cache.find(x => x.name === "muted" || x.name === "Muted");
        if (!muteRole) return message.channel.send("no muted role found");

        var muteTime = args[2];

        if (!muteTime) return message.channel.send("how long?");

        await (mutePerson.roles.add(muteRole.id));
        message.channel.send(`${mutePerson} has been muted for ${muteTime}`);

        setTimeout(() => {

            mutePerson.roles.remove(muteRole.id);

            message.channel.send(`${mutePerson} has been unmuted.`);


        }, ms(muteTime));

    },
    aliases: [],
    description: 'Temp Mute someone'
}