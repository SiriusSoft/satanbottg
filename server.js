//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))
var TelegramBot=require('node-telegram-bot-api');var token='361154707:AAEyIZa7wzCWiEqRvdDq8z-fVcpuDgBoXqw';var bot=new TelegramBot(token,{polling:true});var notes=[];bot.onText(/\/РЅР°РїРѕРјРЅРё (.+) РІ (.+)/,function(msg,match){var userId=msg.from.id;var text=match[1];var time=match[2];notes.push({'uid':userId,'time':time,'text':text});bot.sendMessage(userId,'РћС‚Р»РёС‡РЅРѕ! РЇ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅР°РїРѕРјРЅСЋ, РµСЃР»Рё РЅРµ СЃРґРѕС…РЅСѓ :)');});setInterval(function(){for(var i=0;i<notes.length;i++){var curDate=new Date().getHours()+':'+ new Date().getMinutes();if(notes[i]['time']==curDate){bot.sendMessage(notes[i]['uid'],'РќР°РїРѕРјРёРЅР°СЋ, С‡С‚Рѕ РІС‹ РґРѕР»Р¶РЅС‹: '+ notes[i]['text']+' СЃРµР№С‡Р°СЃ.');notes.splice(i,1);}}},1000);
