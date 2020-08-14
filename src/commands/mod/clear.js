const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no");

        if (!args[1]) return message.reply("how many?");

        if (Number.isInteger(parseInt(args[1]))) {

            var aantal = parseInt(args[1]) + 1;

            message.channel.bulkDelete(aantal).then(() => {

                if (args[1] == 0) {

                    message.reply(`stupid`);

                } else if (args[1] == 1) {

                    message.reply(`deleted 1 message`);

                } else {

                    message.reply(`deleted ${args[1]} messages`);

                }

            });

        } else {
            return message.reply("how many");
        }
    },
    aliases: [],
    description: 'Deletes messages'
}