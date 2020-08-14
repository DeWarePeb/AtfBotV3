const discord = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        if (!args.length) {
            return message.channel.send("Please Give the Suggestion")
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === "📥suggestions"))

        if (!channel) {
            return message.channel.send("there is no channel with name - suggestions")
        }

        var embed = new discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle("**Suggestion**")
            .setDescription(``)
            .addField('**```Suggestion:```**', [
                `${args.join(" ")}`,
                '\u200b'
            ])
            .setFooter(`--${message.author.tag}`)
            .setAuthor(message.author.tag, message.author.avatarURL())
            //.setDescription(args.join(" "))
            .setTimestamp()

        channel.send(embed).then(m => {
            m.react("✅")
            m.react("❌")
        })

        message.delete();
    },
    aliases: [],
    description: 'Suggest something'
}