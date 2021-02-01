module.exports = {
    name: 'slave',
    description: "This command is for slaves of moronbot.",
    execute(message,args){
        if(message.member.roles.cache.has('777038647547002912')){
        message.channel.send('You are my slave! Do a million pushups.');
        }else{
            message.channel.send('You are not my slave! APPROVED BY A MORON.');
        }

    }
}