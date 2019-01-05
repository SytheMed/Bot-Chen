const Discord = require("discord.js");
const fs = require("fs");
let colorp = require("../colorpreset.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(colorp.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(colorp.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(msg => msg.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(colorp.red);

    message.channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Who do you want me to ban?")
        .setColor(colorp.red);

    channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Why you want me to ban him?")
        .setColor(colorp.red);

    channel.send(embed).then(msg => msg.delete(5000));
}
