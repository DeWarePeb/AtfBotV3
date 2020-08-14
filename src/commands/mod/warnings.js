const discord = require("discord.js");
const db = require("quick.db")

module.exports = {
    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.author


        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)


        if (warnings === null) warnings = 0;

        let embed = new discord.MessageEmbed()
            .setColor('BLACK')
            .setDescription(`${user} has **${warnings}** warning(s)`)
            .setTimestamp()

        message.channel.send(embed/*`${user} have **${warnings}** warning(s)`*/)
    },
    aliases: [],
    description: 'Get how many warnings someone has'
}