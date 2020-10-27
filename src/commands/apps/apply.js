const discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

const prompts = [
    //'What is your discord name?',
    'How old are you?',
    'What is your PSN name?',
    'What is your Social club?',
    'What level are you on gta?',
    'Why do you want to join ATFO? (Max 30 words)'
]

module.exports = {
    run: async (client, message, args) => {
        const applyChannel = message.guild.channels.cache.find(c => c.name == "applicant-chat");
        const appsChannel = message.guild.channels.cache.find(c => c.name == "apps");
        const acceptedChannel = message.guild.channels.cache.find(c => c.name == "accepted❗");

        try {
            const response = await getResponses(message);
            const embed = new MessageEmbed()
                //.addField('Discord', response.discord, true)
                .addField('Age', response.age, true)
                .addField('Psn', response.psn, true)
                .addField('Social Club', response.sc, true)
                .addField('Level', response.level, true)
                .addField('Reason', response.reason, true)
                .setFooter(`Sent by ${message.author.tag}`)
                .setTimestamp()
            const msg = await message.channel.send('Confirm application', embed);
            await msg.react('👍');
            await msg.react('👎');

            const filter = (reaction, user) => ['👍', '👎'].includes(reaction.emoji.name) && !user.bot && user.id === message.author.id;
            const reactions = await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            const choice = reactions.get('👍') || reactions.get('👎');
            if (choice.emoji.name === '👍') {
                const giveawayEmbed = new MessageEmbed()
                    .setTitle('Application has been send!')
                    .addField('Age', response.age, true)
                    .addField('Psn', response.psn, true)
                    .addField('Social Club', response.sc, true)
                    .addField('Level', response.level, true)
                    .addField('Reason', response.reason, true)
                    .setFooter(`Sent by ${message.author.tag}`)
                    .setTimestamp()
                const giveawayMsg = await message.channel.send(giveawayEmbed);
                await giveawayMsg.react('🎉');
            }
            if (choice.emoji.name === '👎') {
                message.channel.send('Cancelled Application');
            }
        } catch (err) {
            console.log(err)
        }
    },
    aliases: [],
    description: 'well'
}

async function getResponses(message) {
    const responses = {}

    for (let i = 0; i < prompts.length; i++) {
        await message.channel.send(prompts[i]);
        const response = await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1 });
        const { content } = response.first();
        if (i === 0)
            responses.age = content;
        else if (i === 1)
            responses.psn = content;
        else if (i === 2)
            responses.sc = content;
        else if (i === 3)
            responses.level = content;
        else if (i === 4)
            responses.reason = content;
    }
    return responses;
}