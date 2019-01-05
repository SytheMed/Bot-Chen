const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

if(!prefix){
    prefix = ".";
}
  message.channel.send("```" + "\n" +
                       "Type " + prefix + "ping to get a simple pong response\n" +
                       "Type " + prefix + "sinfo for server info!\n" +
                       "Type " + prefix + "binfo for bot info!\n" +
                       "Type " + prefix + "userinfo for user info!\n" +
                       "Type " + prefix + "rename [newname] to rename the bot!\n" +
                       "Type " + prefix + "report [@user reason] to report a player!\n" +
                       "Type " + prefix + "prefix [new prefix] for customized prefix!\n" +
                       "Type " + prefix + "tempmute [1s/1m/1h] to mute a user!\n" +
                       "Type " + prefix + "clear [amount] to clear messages!\n" 
                       "Type " + prefix + "best command!\n"
                       + "```");

}

module.exports.help = {
    name: "help"
}
