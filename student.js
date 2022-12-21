const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");
client.on("connect",function()
{
    setInterval(function(){
        var text ="Hello";
        var i = 0;
        console.log(text);
        if(i<15)
        {
            client.publish("typing_speed","Text Entered: "+text);
            i++;
        }
    }),30000;
});

