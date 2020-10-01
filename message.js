const discord = require('discord.js')
const client = new discord.Client() 
module.exports = {
	name: 'message',
    description: 'Global Announcement',
    usage: '(prefix) message',
    guildOnly: true,
	execute(message, args) {
        if (!args.length) return message.reply('please specify a destination channel id.');

        		const channel = client.channels.cache.get(args[0]);
        		if (!channel) return message.reply('I could not find such a channel.');
        
        		channel.send('Hello!');
				message.send(`I have sent a message to channel \`${args[0]}\`!`);
				if (channel) {
					channel.send('This is a message from shard ${this.shard.ids.join(',')}!');
					true;
				}
				else {
					false;
				}
        		return client.shard.broadcastEval(`
						Hello world!
        		`)
        			.then(console.log);
	},
};