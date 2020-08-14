const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions");

        let channel = client.channels.cache.get(message.channel.id);
        var posisii = channel.position;
        console.log(posisii)

        channel.clone().then((channel2) => {
            channel2.setPosition(posisii)
            channel.delete()
            var embed = new discord.MessageEmbed()
            .setImage("https://media1.tenor.com/images/2e50750a1356ee2cf828090cbb864634/tenor.gif?itemid=4464831")
            .setDescription("**Channel has been nuked!**")
            .setColor("BLACK")  
            .setTimestamp();

            channel2.send(embed);
        })
        
    },
    aliases: [],
    description: 'Nukes the channel'
}