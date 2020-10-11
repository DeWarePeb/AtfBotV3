const Command = require('../../utils/Command.js');
const discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
	run: async (client, message, args) => {
		const embed = new discord.MessageEmbed()
			.setColor('BLACK')
			.addField('General', [
				`**❯ Prefix:** ${config.prefix}`,
				`\u200b`
			])
			.addField('Info', [
				`**❯ announce:** Announce something`,
				`**❯ bot-info:** Bot Info `,
				`**❯ say:** Get the bot to say something `,
				`**❯ server-info:** Server info`,
				`**❯ suggestion:** Suggest something`,
				`**❯ user-info:** Give info info about a member`,
				`**❯ rules:** Gives the 3 most importent rules`,
				`\u200b`
			])
			.addField('Mod', [
				`**❯ ban:** Ban a member`,
				`**❯ clear:** Delete messages (Max 99)`,
				`**❯ kick** Kick a member`,
				`**❯ lockdown:** Lockdown the server`,
				`**❯ mute** Mute someone`,
				`**❯ nuke:** Clear the hole channel`,
				`**❯ slowmode:** Set the slowmode of a channel`,
				`**❯ temp-mute** Temp mute someone`,
				`**❯ unmute:** Unmute someone`,
				`**❯ warn:** Warn someone`,
				`**❯ warnings:** See how many warnings someone has`,
				`**❯ reset-warnings:** Reset someones warnings`,
				`**❯ apps-done:** Auto completes apps stuff`,
				`\u200b`
			])
			.addField('Misc', [
				`**Giveaway commands**`,
				`**❯ start:** Start a giveaway`,
				`**❯ end:** End a giveaway before its original end time`,
				`**❯ reroll:** Reroll a giveaway`,
				`\u200b`,
				`**Ticket commands**`,
				`**❯ ticket:** Open a ticket`,
				`**❯ ticket-close:** Close a ticket`
			])
			.addField('Fun', [
				`**❯ weather:** Gives the weather of a place`,
				`**❯ oldest:** Gives the oldest account in the server`,
				`**❯ young:** Gives the youngest account in the server`,
				`**❯ dm:** Dm a member of the server`,
				`**❯ urban:** Find out what a word means`,
				`**❯ rps:** Play rock paper scissors with the bot`,
				`**❯ av:** Gves the avatar of a member`
			])
		message.channel.send(embed);
	},
	aliases: [],
	description: 'Help command'
}
