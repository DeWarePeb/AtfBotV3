const discord = require("discord.js");
const urban = require("urban");

module.exports = {
    run: async (client, message, args) => {
        if (!args[1] || !["search", "random"].includes(args[1])) return message.channel.send("`!urban <search|random> (query)`");
        let search = args[2] ? urban(args.slice(2).join(" ")) : urban.random();
        try {
            search.first(res => {
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, definition, example, } = res;

                let embed = new discord.MessageEmbed()
                    .setColor("black")
                    .setAuthor(`Urban Dictionary | ${word}`)
                    .setDescription(definition)
                    .addField('Example:', [
                        `${example}`
                    ])
                    .setTimestamp()

                message.channel.send(embed)
            })
        } catch (e) {
            console.log(e)
            return message.channel.send("looks like i've broken! Try again")
        }
    },
    aliases: [],
    description: 'Find something in the dictionery'
}