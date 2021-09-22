const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*";

client.on("ready", () => {
    console.log("Le Bot Kirza bot est allumer !")
});

//Welcome Message
client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed ()
        .setDescription("Bienvenue !" + member.user + "vien de rejoindre le serveur de Kirza on tik tok !")
        .setFooter("Nous sommes maintenant " + member.guild.memberCount)
        .setColor("#08f0ff")
        .setImage("https://cdn.discordapp.com/attachments/880052700077772821/888768133702250556/image0.gif")
        .setTimestamp()
    member.guild.channels.get('888773335998165022').sendMessage(embed)
});

//Custom status
client.on("ready", () => {
    function randomStatus() {
        let status = ["Abonne toi a la chaine de Kirza sur TikTok !", "Bot officiel du serveur de Kirza !"]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], {type: "PLAYING", url: "https://twitch.tv/"});
    }; setInterval(randomStatus, 7000)
});

//Commande Personnalisée No Embed
client.on("message", message => {
    if(message.content === prefix + "salut")
        message.channel.send("Salut x)")
})

//Commande Personnalisée Embed
client.on("message", message => {
    if(message.content === prefix + "tiktok"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Hey, Voici le tik tok de Kirza : https://vm.tiktok.com/ZMRAM9MPr/")
        .setColor("#0e0c0c")
        .setTimestamp()
        .setTitle("La chaine Tik Tok de kirza")
        .setFooter("Bientot 10 000 abonné(e)s !")
    message.channel.send(embed)
}
})

client.login("ODg4NzY3NTA5Nzk1MzI4MDMw.YUXfPg.LRlI8WGrS3q-H4Yxyn_cl-I-aVE")