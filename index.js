const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
const token = 'Nzc2ODA5OTUzOTA1NDc1NjA1.X66SpQ.ocNF2Tyfxgf2Z5HUAlEpvCu2vQc';
client.once('ready', () => {
    console.log('Moronbot is online!');
})
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'moron'){
        client.commands.get('moron').execute(message,args);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }else if(command === 'slave'){
        client.commands.get('slave').execute(message,args);
    }
})
client.login(token);

