const _0x3e0872=_0x4ef8;(function(_0x14599f,_0x4c9552){const _0x109c99=_0x4ef8,_0x402057=_0x14599f();while(!![]){try{const _0x151116=parseInt(_0x109c99(0x1b6))/0x1+-parseInt(_0x109c99(0x1a1))/0x2*(-parseInt(_0x109c99(0x190))/0x3)+parseInt(_0x109c99(0x1dd))/0x4*(-parseInt(_0x109c99(0x191))/0x5)+-parseInt(_0x109c99(0x1c0))/0x6+parseInt(_0x109c99(0x1e3))/0x7+parseInt(_0x109c99(0x197))/0x8*(-parseInt(_0x109c99(0x1a4))/0x9)+-parseInt(_0x109c99(0x1da))/0xa*(parseInt(_0x109c99(0x1ce))/0xb);if(_0x151116===_0x4c9552)break;else _0x402057['push'](_0x402057['shift']());}catch(_0x30588b){_0x402057['push'](_0x402057['shift']());}}}(_0x127e,0x75a82));const _0x2bb39f=(function(){let _0x45c9a9=!![];return function(_0x408774,_0x33579b){const _0x1bb180=_0x4ef8;if(_0x1bb180(0x180)!==_0x1bb180(0x180)){const _0x1ae9df=_0xc0545a[_0x1bb180(0x199)](_0x1cf0a7,arguments);return _0x350cc9=null,_0x1ae9df;}else{const _0x42c595=_0x45c9a9?function(){const _0x21fc63=_0x1bb180;if(_0x33579b){if(_0x21fc63(0x196)!==_0x21fc63(0x196))_0x396988[_0x21fc63(0x186)]['set'](_0x899cc7[_0x21fc63(0x1dc)],_0x1af188,_0x21fc63(0x1a5)),_0x54964a['ticketPanel'][_0x21fc63(0x194)](_0x1cdcf0['GuildID'],_0x546f62['id'],_0x21fc63(0x1e1));else{const _0x582190=_0x33579b['apply'](_0x408774,arguments);return _0x33579b=null,_0x582190;}}}:function(){};return _0x45c9a9=![],_0x42c595;}};}()),_0x5e8d15=_0x2bb39f(this,function(){const _0x3b72c5=_0x4ef8;return _0x5e8d15['toString']()['search'](_0x3b72c5(0x18c))['toString']()[_0x3b72c5(0x1d5)](_0x5e8d15)[_0x3b72c5(0x1de)]('(((.+)+)+)+$');});function _0x4ef8(_0x341b56,_0x487ba0){const _0x71f8d8=_0x127e();return _0x4ef8=function(_0x5e8d15,_0x2bb39f){_0x5e8d15=_0x5e8d15-0x17c;let _0x127e4b=_0x71f8d8[_0x5e8d15];return _0x127e4b;},_0x4ef8(_0x341b56,_0x487ba0);}function _0x127e(){const _0x1f6802=['21237uOVDWd','15NwMYAv','button7','setPlaceholder','set','NoPermsMessage','rJPxF','2992736xCbsRZ','setCustomId','apply','editReply','LogsChannelID','send','button1','EmbedColor','setImage','push','170LIcBLY','FooterTimestamp','FooterIcon','9UsVaqA','selectMenuOptions','cache','@discordjs/builders','TicketName','selectCategory','Successfully\x20sent\x20the\x20ticket\x20panel\x20to\x20this\x20channel!','setTimestamp','Blurple','TicketPanelSettings','Secondary','setMinValues','./config.yml','button2','Ticket','Success','js-yaml','Primary','580205RIavRt','channel','TicketButton2','button4','setColor','setStyle','ButtonEmoji','button3','TicketButton7','channels','3666546OZGMyq','Gray','has','addComponents','Panel','panel','button6','TicketButton6','guild','EmbedColors','utf8','PanelTitle','setDescription','Description','25729XGIEJG','Administrator','Locale','load','readFileSync','setMaxValues','TicketButton8','constructor','TicketButton1','./commands.yml','button5','TicketButton3','1030WKwaxb','setLabel','GuildID','533428yLuVGd','search','Green','discord.js','msgID','categorySelect','6483211ZAnkAI','TicketButton5','deferReply','setFooter','setName','hPgmz','Danger','FooterMsg','Enabled','Red','SelectMenu','ticketPanel','setEmoji','PanelThumbnail','TicketSettings','TicketButton4','setThumbnail','(((.+)+)+)+$','description','ButtonColor','emoji'];_0x127e=function(){return _0x1f6802;};return _0x127e();}_0x5e8d15();const {SlashCommandBuilder}=require(_0x3e0872(0x1a7)),{Discord,ActionRowBuilder,ButtonBuilder,EmbedBuilder,SelectMenuBuilder,ButtonStyle}=require(_0x3e0872(0x1e0)),fs=require('fs'),yaml=require(_0x3e0872(0x1b4)),config=yaml[_0x3e0872(0x1d1)](fs[_0x3e0872(0x1d2)](_0x3e0872(0x1b0),_0x3e0872(0x1ca))),commands=yaml[_0x3e0872(0x1d1)](fs[_0x3e0872(0x1d2)](_0x3e0872(0x1d7),_0x3e0872(0x1ca)));module['exports']={'enabled':commands[_0x3e0872(0x1b2)][_0x3e0872(0x1c4)][_0x3e0872(0x183)],'data':new SlashCommandBuilder()[_0x3e0872(0x17f)](_0x3e0872(0x1c5))[_0x3e0872(0x1cc)](commands[_0x3e0872(0x1b2)]['Panel'][_0x3e0872(0x1cd)]),async 'execute'(_0x289afc,_0x23ec3a){const _0xf1b322=_0x3e0872;await _0x289afc[_0xf1b322(0x17d)]({'ephemeral':!![]});if(!_0x289afc[_0xf1b322(0x1c8)][_0xf1b322(0x1bf)][_0xf1b322(0x1a6)]['get'](config[_0xf1b322(0x189)][_0xf1b322(0x19b)]))return console['log']('\x1b[31m%s\x1b[0m','[WARNING]\x20TicketSettings.LogsChannelID\x20is\x20not\x20a\x20valid\x20channel!');if(!_0x289afc['member']['permissions'][_0xf1b322(0x1c2)](_0xf1b322(0x1cf)))return _0x289afc['editReply']({'content':config['Locale'][_0xf1b322(0x195)],'ephemeral':!![]});if(config['TicketButton1'][_0xf1b322(0x18e)]===_0xf1b322(0x1ac))config[_0xf1b322(0x1d6)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b5)];if(config[_0xf1b322(0x1d6)][_0xf1b322(0x18e)]===_0xf1b322(0x1c1))config[_0xf1b322(0x1d6)]['ButtonColor']=ButtonStyle[_0xf1b322(0x1ae)];if(config['TicketButton1'][_0xf1b322(0x18e)]==='Green')config[_0xf1b322(0x1d6)]['ButtonColor']=ButtonStyle[_0xf1b322(0x1b3)];if(config[_0xf1b322(0x1d6)][_0xf1b322(0x18e)]===_0xf1b322(0x184))config[_0xf1b322(0x1d6)][_0xf1b322(0x18e)]=ButtonStyle['Danger'];if(config['TicketButton2']['ButtonColor']===_0xf1b322(0x1ac))config[_0xf1b322(0x1b8)]['ButtonColor']=ButtonStyle[_0xf1b322(0x1b5)];if(config[_0xf1b322(0x1b8)][_0xf1b322(0x18e)]==='Gray')config[_0xf1b322(0x1b8)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1ae)];if(config[_0xf1b322(0x1b8)][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config['TicketButton2']['ButtonColor']=ButtonStyle[_0xf1b322(0x1b3)];if(config[_0xf1b322(0x1b8)]['ButtonColor']===_0xf1b322(0x184))config['TicketButton2'][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x181)];if(config[_0xf1b322(0x1d9)]['ButtonColor']==='Blurple')config['TicketButton3'][_0xf1b322(0x18e)]=ButtonStyle['Primary'];if(config[_0xf1b322(0x1d9)][_0xf1b322(0x18e)]===_0xf1b322(0x1c1))config[_0xf1b322(0x1d9)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1ae)];if(config['TicketButton3'][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config[_0xf1b322(0x1d9)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b3)];if(config['TicketButton3'][_0xf1b322(0x18e)]===_0xf1b322(0x184))config[_0xf1b322(0x1d9)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x181)];if(config[_0xf1b322(0x18a)]['ButtonColor']===_0xf1b322(0x1ac))config[_0xf1b322(0x18a)]['ButtonColor']=ButtonStyle[_0xf1b322(0x1b5)];if(config[_0xf1b322(0x18a)][_0xf1b322(0x18e)]==='Gray')config['TicketButton4'][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1ae)];if(config[_0xf1b322(0x18a)][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config[_0xf1b322(0x18a)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b3)];if(config[_0xf1b322(0x18a)][_0xf1b322(0x18e)]===_0xf1b322(0x184))config[_0xf1b322(0x18a)][_0xf1b322(0x18e)]=ButtonStyle['Danger'];if(config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]===_0xf1b322(0x1ac))config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b5)];if(config['TicketButton5']['ButtonColor']===_0xf1b322(0x1c1))config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1ae)];if(config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]==='Green')config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]=ButtonStyle['Success'];if(config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]===_0xf1b322(0x184))config[_0xf1b322(0x17c)][_0xf1b322(0x18e)]=ButtonStyle['Danger'];if(config[_0xf1b322(0x1c7)][_0xf1b322(0x18e)]===_0xf1b322(0x1ac))config['TicketButton6'][_0xf1b322(0x18e)]=ButtonStyle['Primary'];if(config['TicketButton6']['ButtonColor']===_0xf1b322(0x1c1))config[_0xf1b322(0x1c7)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1ae)];if(config[_0xf1b322(0x1c7)][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config[_0xf1b322(0x1c7)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b3)];if(config[_0xf1b322(0x1c7)]['ButtonColor']==='Red')config['TicketButton6'][_0xf1b322(0x18e)]=ButtonStyle['Danger'];if(config['TicketButton7'][_0xf1b322(0x18e)]===_0xf1b322(0x1ac))config[_0xf1b322(0x1be)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b5)];if(config['TicketButton7'][_0xf1b322(0x18e)]===_0xf1b322(0x1c1))config['TicketButton7'][_0xf1b322(0x18e)]=ButtonStyle['Secondary'];if(config[_0xf1b322(0x1be)][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config[_0xf1b322(0x1be)][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x1b3)];if(config['TicketButton7'][_0xf1b322(0x18e)]===_0xf1b322(0x184))config['TicketButton7'][_0xf1b322(0x18e)]=ButtonStyle[_0xf1b322(0x181)];if(config[_0xf1b322(0x1d4)][_0xf1b322(0x18e)]===_0xf1b322(0x1ac))config[_0xf1b322(0x1d4)][_0xf1b322(0x18e)]=ButtonStyle['Primary'];if(config[_0xf1b322(0x1d4)][_0xf1b322(0x18e)]===_0xf1b322(0x1c1))config[_0xf1b322(0x1d4)]['ButtonColor']=ButtonStyle[_0xf1b322(0x1ae)];if(config['TicketButton8'][_0xf1b322(0x18e)]===_0xf1b322(0x1df))config['TicketButton8'][_0xf1b322(0x18e)]=ButtonStyle['Success'];if(config[_0xf1b322(0x1d4)]['ButtonColor']==='Red')config[_0xf1b322(0x1d4)]['ButtonColor']=ButtonStyle['Danger'];const _0x147ba2=new ButtonBuilder();_0x147ba2['setCustomId'](_0xf1b322(0x19d)),_0x147ba2[_0xf1b322(0x1db)](config['TicketButton1'][_0xf1b322(0x1a8)]),_0x147ba2[_0xf1b322(0x1bb)](config[_0xf1b322(0x1d6)][_0xf1b322(0x18e)]);if(config[_0xf1b322(0x1d6)]['ButtonEmoji'])_0x147ba2[_0xf1b322(0x187)](config[_0xf1b322(0x1d6)]['ButtonEmoji']);const _0x3af08d=new ButtonBuilder();_0x3af08d[_0xf1b322(0x198)]('button2'),_0x3af08d[_0xf1b322(0x1db)](config[_0xf1b322(0x1b8)][_0xf1b322(0x1a8)]),_0x3af08d[_0xf1b322(0x1bb)](config['TicketButton2'][_0xf1b322(0x18e)]);if(config[_0xf1b322(0x1b8)]['ButtonEmoji'])_0x3af08d[_0xf1b322(0x187)](config[_0xf1b322(0x1b8)][_0xf1b322(0x1bc)]);const _0x21fcec=new ButtonBuilder();_0x21fcec[_0xf1b322(0x198)](_0xf1b322(0x1bd)),_0x21fcec['setLabel'](config['TicketButton3']['TicketName']),_0x21fcec[_0xf1b322(0x1bb)](config[_0xf1b322(0x1d9)]['ButtonColor']);if(config['TicketButton3'][_0xf1b322(0x1bc)])_0x21fcec['setEmoji'](config[_0xf1b322(0x1d9)][_0xf1b322(0x1bc)]);const _0x382358=new ButtonBuilder();_0x382358[_0xf1b322(0x198)](_0xf1b322(0x1b9)),_0x382358[_0xf1b322(0x1db)](config['TicketButton4'][_0xf1b322(0x1a8)]),_0x382358[_0xf1b322(0x1bb)](config['TicketButton4'][_0xf1b322(0x18e)]);if(config['TicketButton4']['ButtonEmoji'])_0x382358[_0xf1b322(0x187)](config['TicketButton4'][_0xf1b322(0x1bc)]);const _0x51be93=new ButtonBuilder();_0x51be93[_0xf1b322(0x198)](_0xf1b322(0x1d8)),_0x51be93[_0xf1b322(0x1db)](config[_0xf1b322(0x17c)][_0xf1b322(0x1a8)]),_0x51be93[_0xf1b322(0x1bb)](config[_0xf1b322(0x17c)]['ButtonColor']);if(config[_0xf1b322(0x17c)][_0xf1b322(0x1bc)])_0x51be93[_0xf1b322(0x187)](config[_0xf1b322(0x17c)][_0xf1b322(0x1bc)]);let _0x49ff88='';if(!config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x18a)]['Enabled']&&!config[_0xf1b322(0x17c)]['Enabled'])_0x49ff88=new ActionRowBuilder()['addComponents'](_0x147ba2);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&!config['TicketButton3'][_0xf1b322(0x183)]&&!config[_0xf1b322(0x18a)]['Enabled']&&!config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&!config['TicketButton4'][_0xf1b322(0x183)]&&!config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d,_0x21fcec);if(config['TicketButton2'][_0xf1b322(0x183)]&&config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x18a)]['Enabled']&&config[_0xf1b322(0x17c)]['Enabled'])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d,_0x21fcec,_0x51be93);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x17c)]['Enabled'])_0x49ff88=new ActionRowBuilder()['addComponents'](_0x147ba2,_0x3af08d,_0x21fcec,_0x382358);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&config[_0xf1b322(0x17c)]['Enabled'])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d,_0x21fcec,_0x382358,_0x51be93);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()['addComponents'](_0x147ba2,_0x3af08d,_0x382358,_0x51be93);if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d,_0x51be93);if(config[_0xf1b322(0x1b8)]['Enabled']&&!config['TicketButton3'][_0xf1b322(0x183)]&&config['TicketButton4'][_0xf1b322(0x183)]&&!config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x3af08d,_0x382358);if(!config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&config[_0xf1b322(0x1d9)]['Enabled']&&config['TicketButton4'][_0xf1b322(0x183)]&&config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x21fcec,_0x382358,_0x51be93);if(!config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&config['TicketButton3'][_0xf1b322(0x183)]&&config['TicketButton4'][_0xf1b322(0x183)]&&!config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x21fcec,_0x382358);if(!config[_0xf1b322(0x1b8)]['Enabled']&&!config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x382358);if(!config[_0xf1b322(0x1b8)][_0xf1b322(0x183)]&&!config[_0xf1b322(0x1d9)][_0xf1b322(0x183)]&&config[_0xf1b322(0x18a)][_0xf1b322(0x183)]&&config[_0xf1b322(0x17c)]['Enabled'])_0x49ff88=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0x147ba2,_0x382358,_0x51be93);const _0x1987f8=new EmbedBuilder()['setTitle'](config[_0xf1b322(0x1ad)][_0xf1b322(0x1cb)])[_0xf1b322(0x1cc)](config[_0xf1b322(0x1ad)]['PanelMessage']);if(config[_0xf1b322(0x1ad)][_0xf1b322(0x19e)])_0x1987f8[_0xf1b322(0x1ba)](config[_0xf1b322(0x1ad)]['EmbedColor']);if(!config['TicketPanelSettings'][_0xf1b322(0x19e)])_0x1987f8[_0xf1b322(0x1ba)](config[_0xf1b322(0x1c9)]);if(config[_0xf1b322(0x1ad)]['PanelImage'])_0x1987f8[_0xf1b322(0x19f)](config[_0xf1b322(0x1ad)]['PanelImage']);if(config['TicketPanelSettings'][_0xf1b322(0x188)])_0x1987f8[_0xf1b322(0x18b)](config[_0xf1b322(0x1ad)][_0xf1b322(0x188)]);if(config['TicketPanelSettings']['FooterMsg'])_0x1987f8[_0xf1b322(0x17e)]({'text':''+config[_0xf1b322(0x1ad)]['FooterMsg']});if(config['TicketPanelSettings']['FooterMsg']&&config[_0xf1b322(0x1ad)][_0xf1b322(0x1a3)])_0x1987f8[_0xf1b322(0x17e)]({'text':''+config[_0xf1b322(0x1ad)][_0xf1b322(0x182)],'iconURL':''+config['TicketPanelSettings'][_0xf1b322(0x1a3)]});if(config[_0xf1b322(0x1ad)][_0xf1b322(0x1a2)])_0x1987f8[_0xf1b322(0x1ab)]();const _0x33dfac=[];_0x33dfac[_0xf1b322(0x1a0)]({'label':config[_0xf1b322(0x1d6)]['TicketName'],'value':_0xf1b322(0x19d),'description':config['TicketButton1']['Description'],'emoji':config['TicketButton1']['ButtonEmoji']});if(config[_0xf1b322(0x1b8)][_0xf1b322(0x183)])_0x33dfac[_0xf1b322(0x1a0)]({'label':config[_0xf1b322(0x1b8)][_0xf1b322(0x1a8)],'value':_0xf1b322(0x1b1),'description':config[_0xf1b322(0x1b8)]['Description'],'emoji':config[_0xf1b322(0x1b8)][_0xf1b322(0x1bc)]});if(config[_0xf1b322(0x1d9)][_0xf1b322(0x183)])_0x33dfac[_0xf1b322(0x1a0)]({'label':config['TicketButton3']['TicketName'],'value':_0xf1b322(0x1bd),'description':config[_0xf1b322(0x1d9)]['Description'],'emoji':config[_0xf1b322(0x1d9)][_0xf1b322(0x1bc)]});if(config['TicketButton4'][_0xf1b322(0x183)])_0x33dfac[_0xf1b322(0x1a0)]({'label':config[_0xf1b322(0x18a)]['TicketName'],'value':_0xf1b322(0x1b9),'description':config[_0xf1b322(0x18a)]['Description'],'emoji':config[_0xf1b322(0x18a)][_0xf1b322(0x1bc)]});if(config[_0xf1b322(0x17c)][_0xf1b322(0x183)])_0x33dfac[_0xf1b322(0x1a0)]({'label':config['TicketButton5'][_0xf1b322(0x1a8)],'value':_0xf1b322(0x1d8),'description':config[_0xf1b322(0x17c)][_0xf1b322(0x1cd)],'emoji':config[_0xf1b322(0x17c)][_0xf1b322(0x1bc)]});if(config[_0xf1b322(0x1c7)][_0xf1b322(0x183)])_0x33dfac[_0xf1b322(0x1a0)]({'label':config[_0xf1b322(0x1c7)][_0xf1b322(0x1a8)],'value':_0xf1b322(0x1c6),'description':config[_0xf1b322(0x1c7)][_0xf1b322(0x1cd)],'emoji':config[_0xf1b322(0x1c7)]['ButtonEmoji']});if(config[_0xf1b322(0x1be)][_0xf1b322(0x183)])_0x33dfac['push']({'label':config[_0xf1b322(0x1be)]['TicketName'],'value':_0xf1b322(0x192),'description':config['TicketButton7']['Description'],'emoji':config[_0xf1b322(0x1be)][_0xf1b322(0x1bc)]});if(config[_0xf1b322(0x1d4)][_0xf1b322(0x183)])_0x33dfac['push']({'label':config['TicketButton8'][_0xf1b322(0x1a8)],'value':'button8','description':config['TicketButton8'][_0xf1b322(0x1cd)],'emoji':config[_0xf1b322(0x1d4)][_0xf1b322(0x1bc)]});await _0x33dfac['map'](_0x20c4c6=>{const _0x15ae0c=_0xf1b322;if(!_0x20c4c6[_0x15ae0c(0x18f)])delete _0x20c4c6[_0x15ae0c(0x18f)];if(!_0x20c4c6['description'])delete _0x20c4c6[_0x15ae0c(0x18d)];});let _0xf41e7e=new SelectMenuBuilder()['setCustomId'](_0xf1b322(0x1e2))[_0xf1b322(0x193)](config[_0xf1b322(0x1d0)][_0xf1b322(0x1a9)])[_0xf1b322(0x1af)](0x1)[_0xf1b322(0x1d3)](0x1)['addOptions'](_0x33dfac),_0x3841a0=new ActionRowBuilder()[_0xf1b322(0x1c3)](_0xf41e7e);if(config[_0xf1b322(0x189)][_0xf1b322(0x185)]===![])_0x289afc[_0xf1b322(0x1b7)][_0xf1b322(0x19c)]({'embeds':[_0x1987f8],'components':[_0x49ff88]});_0x289afc[_0xf1b322(0x19a)]({'content':_0xf1b322(0x1aa),'ephemeral':!![]});if(config[_0xf1b322(0x189)][_0xf1b322(0x185)])_0x289afc[_0xf1b322(0x1b7)][_0xf1b322(0x19c)]({'embeds':[_0x1987f8],'components':[_0x3841a0]})['then'](async function(_0x5d2807){const _0x566476=_0xf1b322;_0x23ec3a['ticketPanel'][_0x566476(0x194)](config[_0x566476(0x1dc)],_0x33dfac,_0x566476(0x1a5)),_0x23ec3a['ticketPanel'][_0x566476(0x194)](config[_0x566476(0x1dc)],_0x5d2807['id'],_0x566476(0x1e1));});}};