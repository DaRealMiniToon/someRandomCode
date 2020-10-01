const discord = require('discord.js')
module.exports = {
	name: 'members',
    description: 'Find server members',
    usage: '(prefix) members',
    guildOnly: true,
	execute(message, args) {
        if (message.member.hasPermission("MANAGE_MESSAGES")){
            const embed = new discord.MessageEmbed()

            .setTitle(`error 404 - cannot fetch members, you do not have perms`)
            .setDescription(`${message.member} caused this error lmao`)
            .setTimestamp()

            message.send(embed)
        }
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            // We now have a collection with all online member objects in the totalOnline variable
            message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
        });
	},
};