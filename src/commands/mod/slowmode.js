const discord = require("discord.js");

module.exports = {
    run: async (client, message, args) => {
        if (!args[1]) return message.channel.send("Spefify the length of slowmode in seconds! (1-21600 Seconds)")
        let duration = args[1]
        message.channel.setRateLimitPerUser(duration)
            .catch(() => {
                message.channel.send("Failed to set slowmode in this channel, check your slowmode length.")
            })
        message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
    },
    aliases: [],
    description: 'Set slowmode to a channel'
}