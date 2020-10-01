// command is disabled until we need it
//const discord = require('discord.js')
/*
const client = new discord.Client()
module.exports = {
	name: 'stats',
    description: 'stats on shards',
    usage: '(prefix) stats',
    guildOnly: true,
	execute(message, args) {
		if (!discord.Guild){
			console.warn("No guild")
		}
		const promises = [
			client.shard.fetchClientValues('guilds.cache.size')
			.then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`))
			.catch(console.error),
						client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)')
					]; 
			
					return Promise.all(promises)
						.then(results => {
							const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
							const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
							return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
						})
						.catch(console.error); 
	},
};
*/