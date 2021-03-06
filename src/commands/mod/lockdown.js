const discord = require("discord.js");
const ms = require('ms');

module.exports = {
    run: async (client, message, args) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[1] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('locked all channels');
        } else if (args[1] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                    channel.setName(channel.name.replace('🔒', ''))
                }
                )
            })
            return message.channel.send('unlocked all channels')
        }
    },
    aliases: [],
    description: 'Lockdown a channel'
}