const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const enmap = require('enmap')
const mongoose = require('mongoose')
client.mongoose = require('./util/mongoose');

const defaultsettings = require("./util/defaultsettings")
const guild = require('./models/guild');
const { config } = require('process');



// create a new Discord client
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});


client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('USERS TYPE -help', { type: 'WATCHING' });
});


client.on('message', message => {
	if (message.author.bot){
		return
	}
	if (!message.guild){
		return console.error("Fatal error - guild is null")
	}
		const Guild = require('./models/guild');
		const settings = Guild.findOne({
			guildID: message.guild.id
		}, (err, guild) => {
			if (err) console.error(err)
			if (!guild) {
				const newGuild = new Guild({
					_id: mongoose.Types.ObjectId(),
					guildID: message.guild.id,
					guildName: message.guild.name,
					prefix: "-"
					
				})
		
				newGuild.save()
				.then(result => console.log(result)) // error on this line
					.catch(err => console.error(err));
	
				return message.channel.send('This server odijk was not in our database! We have now added and you should be able to use bot commands.').then(m => m.delete({timeout: 10000}));
			}
		});
		const prefix = settings.prefix
		if(!prefix){
			const errormessage = message.channel.send(`Database MongoDB Was not properly, current prefix : ${settings.prefix}`)
			errormessage.delete
			console.log("No db configured")
			const newGuild = new Guild({
				_id: mongoose.Types.ObjectId(),
				guildID: message.guild.id,
				guildName: message.guild.name,
				prefix: "-"
				
			})
			newGuild.save()
			.then(result => console.log(result))
			.catch(err => console.error(err));

			return message.channel.send('This server was DEFINETLY FRICKLY not in our database! We have now added and you should be able to use bot commands.').then(m => m.delete({timeout: 10000}));
		}
	if (!message.content.startsWith(prefix)){
		console.log("Error");

	
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);
	if (!command){
		message.send("Not a command. Say -help for all commands")
	}
	console.log(commandName)
try {
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	command.execute(message, args);
} catch (error) {
	console.log(error);
	message.reply('there was an error trying to execute that command!');
}
}});
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
// login to Discord with your app's token
client.mongoose.init();
client.login('NzQxMTAxNDk0Mjc0NjIxNTQy.XyyqjQ.-hSkLE6tvQ5KexzKWXWJzgVqsgE');