module.exports = {
    name: 'ping',
    description: "This command is a ping command.",
    execute(message,args){
        message.channel.send('pong!');
    }
}