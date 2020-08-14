const { MessageEmbed, version: djsversion } = require('discord.js');
const Command = require('../../utils/Command');
const { prefix } =  require('../../configs/config.json');
const { version } = require('../../../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {
    run: async (client, message) => {
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
            .setThumbnail("https://i0.wp.com/mesamods.com/wp-content/uploads/2019/10/Anonymousproject11-2.png?fit=1000%2C1000&ssl=1")
            .setDescription("**Info about this bot:**")
            .setColor('BLACK')
            .addField('General', [
                `**❯ Prefix:**  ${prefix}`,
                `**❯ Node.js:** ${process.version}`,
                `**❯ Version:** v${version}`,
                `**❯ Discord.js:** v${djsversion}`,
                '\u200b'
            ])
            .addField('System', [
                `**❯ Platform:** ${process.platform}`,
                `**❯ Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
                `**❯ CPU:**`,
                `\u3000 Cores: ${os.cpus().length}`,
                `\u3000 Model: ${core.model}`,
                `\u3000 Speed: ${core.speed}MHz`
            ])
            .setFooter("Bot made by DeWarePeb#3953")
            .setTimestamp();

        message.channel.send(embed);
    },
    aliases: [],
    description: 'Bot Info'
}