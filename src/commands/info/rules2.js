const discord = require('discord.js')

module.exports = {
    run: async (client, message) => {
        let embed = new discord.MessageEmbed()
        .setTitle('Rules 2 (Discord rules)')
        .setColor('BLACK')
        .setDescription('Use /rules + 1,2 or 3 to get other rule pages.')
        .addField('**Discord rules:**', [
            `•Do Not promote any other discord severs or crews in this Discord`,
            `• Keep topics of chats in their categories in the discord`,
            `• No discrimination of race or sexuality`,
            `• Respect all members`,
            `• If you have any questions concerning the crew or upcoming sessions contact any higher up`,
            `• Your discord name must be the same as your PSN`,
            `• Do not @ high commands in general chats,privately dm them about your concerns and wait for a response`,
            `• DO NOT SPAM, if you do so you may get muted`,
            `• If you have any issues with your branch officers or leaders go to your Branch Generals for further information`,
            `• No screenshotting messages from the server `,
            `• Have Fun!`,
            `\u200b`
        ])
    return message.channel.send(embed);
    },
aliases: [],
    description: 'Get the bot to say something'
}