const discord = require('discord.js')

module.exports = {
    run: async (client, message) => {
        let embed = new discord.MessageEmbed()
        .setTitle('Rules 1 (Session rules)')
        .setColor('BLACK')
        .setDescription('Use /rules + 1,2 or 3 to get other rule pages.')
        .addField('**Session rules:**', [
            `• Behave appropriately`,
            `• Respect all members in the session`,
            `• Do as your told the first time`,
            `• Don't speak unless spoken to so there is less confusion`,
            `• If you need to say something ask for permission to speak`,
            `• Don't kill or stab crew members unless there is an valid reason or told to do so`,
            `• Act mature unless in a time of messing around`,
            `• Have fun`,
            `•DO NOT wear different crew tags`,
            `\u200b`
        ])
    return message.channel.send(embed);
    },
aliases: [],
    description: 'Get the bot to say something'
}