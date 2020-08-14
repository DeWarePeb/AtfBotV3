const config = require('./src/configs/config.json');
const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const { registerCommands, registerEvents } = require('./src/utils/registry');
//giveaway
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});
client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});
//giveaway
(async () => {
    //client.login(process.env.token);
    client.login(config.token);
    client.commands = new Map();
    client.cachedMessageReactions = new Map();
    await registerEvents(client, '../events');
    await registerCommands(client, '../commands');

})();