const Discord = require("discord.js");

module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
    guildOnly: true,
    usage: 'kick (user) (reason)',
    execute(message,args) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You kicked: ${taggedUser.username}`);
        
        const member = message.mentions.members.first();

        if (member.hasPermission('ADMINISTRATOR')) {
            console.log("Cannot kick/g")
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Error')
            .setAuthor('Juzt Studios')
            .setDescription('User is a mod/admin')
            .setTimestamp()
            .addField(":x: If you think this is a error, send a friend request to SimplyDeveloper#3013. :x:",1,true)
        message.channel.send(exampleEmbed);
            message.channel.send("Erorr, cannot kick user (mod/admin)")
            return  
        }
        member:kick();
            
        }
        
    }
