const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzQxMTAxNDk0Mjc0NjIxNTQy.XyyqjQ.-hSkLE6tvQ5KexzKWXWJzgVqsgE' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();




