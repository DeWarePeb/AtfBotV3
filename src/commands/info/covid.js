const discord = require('discord.js');
const covid = require('novelcovid');

module.exports = {
    run: async (client, message) => {
        const covidStats = await covid.all()

        let embed = new discord.MessageEmbed()
            .setTitle('Covid19 Stats')
            .setColor('BLACK')
            .addFields(
                {name: `Cases`, value: covidStats.cases, inline: true},
                { name: `Cases Today`, value: covidStats.todayCases, inline: true},
                { name: `Deaths`, value: covidStats.deaths, inline: true},
                { name: `Deaths Today`, value: covidStats.todayDeaths, inline: true},
                { name: `Recoverd`, value: covidStats.recoverd, inline: true},
                { name: `Recoverd Today`, value: covidStats.todayRecoverd, inline: true},
                { name: `Infected Right Now`, value: covidStats.active, inline: true},
                { name: `Critical`, value: covidStats.critical, inline: true},
                { name: `Tested`, value: covidStats.tests, inline: true},

            )
        return message.channel.send(embed);
    },
    aliases: [],
    description: 'Get the bot to say something'
}