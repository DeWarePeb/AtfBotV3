const discord = require('discord.js')

module.exports = {
    run: async (client, message) => {
        let embed = new discord.MessageEmbed()
            .setTitle('Rules 3 (Enemy encounters, Activity/inactivity)')
            .setColor('BLACK')
            .setDescription('Use /rules + 1,2 or 3 to get other rule pages.')
            .addField('Enemy encounters:', [
                `• Do not engage enemy crew members unless attacked by them.`,
                `• If jumped by enemy crew members either leave or go to your apartment, facility and ask fellow crew members for assistance`,
                `\u200b`
            ])
            .addField('Activity/inactivity:', [
                `• If you cannot make a session please contact your branch General with a reason of your absence or it will be counted against you for promotions`,
                `• If you cannot make it to sessions for more than 2 weeks please contact your branch Generals to be put on the Reserves list so we know not to kick you`,
                `• If you do not attend a session for 2 weeks without messaging your branch general with a valid reason you have the possibility from being kicked from the crew for inactivity`,
                `•all sessions are Mandatory unless you have a reasonable excuse (irl problems lead to exemption)`,
                `\u200b`
            ])
        return message.channel.send(embed);
    },
    aliases: [],
    description: 'Get the bot to say something'
}