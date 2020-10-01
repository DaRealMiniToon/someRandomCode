module.exports = {
	name: 'beep',
    description: 'Beep!',
    guildOnly: false,
    usage: '(prefix) beep',
	execute(message, args) {
		message.channel.send('Boop');
	},
};