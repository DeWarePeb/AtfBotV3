const discord = require('discord.js');
const config = require('../../configs/config.json');
let embed = new discord.MessageEmbed()
  .setColor("BLACK")
  .addFields(
    { name: 'Titel', value: 'Fire in the Booth' },
    { name: 'Intro', value: 'Ok, right, here we areCharlie *Yup* Were about to take them to the chocolate factory *Why, why are you hitting me with the fat jokes for?* Im not say - Im just saying sort of - very sort of Oompa Loompa vibes going on, you know?Ok, right, so, drill Get into my drilly meditation *Wow* Drill gods, be with me *Is this happening?* I should probably say, shoutout to my friends in prison, shouldnt I?  *Okay*  Shoutout to Martin and Tabitha, currently in the pen for tax evasion  Free my jiggas!  *Mad* Mmm' },
    { name: 'Verse 1 (Part 1)', value: 'Riding round in a Rover If I see opps then its over Ill send man straight to Jehovah When I take shots like M. Sharapova Doing up tennis Call man Dennis, Im a Menace Doing up olives in Venice Big man ting, Im bigger than Ben is Stop it, otherwise Unknown P might bash mans head straight down like a Bop It So make like a Freddo and hop it  Your girl is four foot four and got bare hair on her toes like a Hobbit  If I see her in the club then Im doing up AJ, the way that I weave and bob it ' },
    { name: 'Verse 1 (Part 2)', value: 'And Im not from Homerton, not from Hackney  So I never go East, cause bare man try spot P like acne Im from Surrey where me and the mandem always go hunting  And the gyaldem are thick like Theresa May on a real big bum ting  19 Hunna on the new rusty, had a gap year in Kenya, came back with the feet so dusty  Still waking up to geese in country, and I never have porridge at nans because its oh so lumpy And if opps wanna throw some hands then I just draw for the pumpy  Look at me, Im Unknown T, Ive got braids and a deep voice And when I bend my back and dig it, I really hurt my knee joints Got a song called "Throwback", but my girl got no back  Mmm And if you wanna talk Unknowns, then you better talk P, just know that' },
  )
module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.includes('I’m Unknown P')) {
    message.channel.send(embed)
  }
  if (!message.content.startsWith(config.prefix)) return;
  let cmdName = message.content.substring(message.content.indexOf(config.prefix) + 1).split(new RegExp(/\s+/)).shift();
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  //const args = message.content.substring(message.content.indexOf(' ')+1);
  //const args = message.content.slice(config.prefix.length).trim().split(" ");
  if (client.commands.get(cmdName))
    client.commands.get(cmdName)(client, message, args);
  else
    message.channel.send("No command is named that way.")
  console.log("Command does not exist.");
};