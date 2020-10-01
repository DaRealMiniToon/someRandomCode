const discord = require('discord.js')
const ws = require('ws')
const client = new discord.Client()
module.exports = {
	name: 'ping',
    description: 'Ping!',
    guildOnly: true,
    cooldown: 5,
    usage: 'ping',
	execute(message, args) {
	   const m = message.channel.send("Ping?").then((m) => {
	   
	   m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms, \nUptime is ${Math.round(client.addListener.uptime)}ms`)

	   })

}}