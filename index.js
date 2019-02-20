var TelegramBot = require('node-telegram-bot-api');
var token = '291066921:AAE6JDJNCehCHTJWPFwJPTJKHMzHTrJICok';
var bot = new TelegramBot(token, {polling: true});




	

	







	

	









	bot.on('message', function (msg) {
 
	var fromid = msg.from.id;
	var username = msg.from.username;
	var fname = msg.from.first_name;
	//new Date(msg.date).format("%Y-%m-%d %H:%M:%S");
    console.log(msg);
	var sendMessageText; 
	//var callback_query = msg.chat.callback_query;
	});
	
	
	
	
bot.on('text', function(msg) {
var messageChatId = msg.chat.id;
var messageText = msg.text;




		
if (messageText == '/start' ) {
	  bot.sendMessage(messageChatId, ' Здарова');

	    }
		
		
		      
	  
    else {
            
    }
	;
		

		
		
		  if (messageText == 'pn' || messageText == 'Pn'|| messageText == 'PN'|| messageText == 'Пн'|| messageText == 'ПН' || messageText == 'пн' ) {
		  bot.massage (messageChatId,'rasp/1.jpg');}	
		  
         if (messageText == 'vt' || messageText == 'Vt'|| messageText == 'VT'|| messageText == 'Вт'|| messageText == 'ВТ' || messageText == 'вт' ) {
		  bot.sendPhoto (messageChatId,'rasp/2.jpg');}	
		  
		  if (messageText == 'sr' || messageText == 'Sr'|| messageText == 'SR'|| messageText == 'Ср'|| messageText == 'СР' || messageText == 'ср' ) {
		  bot.sendPhoto (messageChatId,'rasp/3.jpg');}	
		  
		  if (messageText == 'cht' || messageText == 'Cht'|| messageText == 'CHt'|| messageText == 'Чт'|| messageText == 'ЧТ' || messageText == 'чт' ) {
		  bot.sendPhoto (messageChatId,'rasp/4.jpg');}	
		  
		   if (messageText == 'pt' || messageText == 'Pt'|| messageText == 'PT'|| messageText == 'Пт'|| messageText == 'ПТ' || messageText == 'пт' ) {
		  bot.sendPhoto (messageChatId,'rasp/5.jpg');}	
		  
		   if (messageText == 'sb' || messageText == 'Sb'|| messageText == 'SB'|| messageText == 'Сб'|| messageText == 'СБ' || messageText == 'сб' ) {
		  bot.sendPhoto (messageChatId,'rasp/6.jpg');}	
		  
		    if (messageText == 'raspisanie' || messageText == 'Raspisanie'|| messageText == 'RASPISANIE'|| messageText == 'Расписание'|| messageText == 'РАСПИСАНИЕ' || messageText == 'расписание' ) {
		  bot.sendPhoto (messageChatId,'rasp/10.jpg');}	

    else {
            
    }
	;
  
  
});




bot.on('callback_query', function (cq) {
  

  
  
   console.log(cq);
});

bot.on('callback_query', function (msg) {
	// console.log(msg);
	var answer = msg.data;

	


		
		
		
		
		
	

});
	  /*
	  
	bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'mini_g_1') {
    text = 'Edited Text';
  }

  bot.editMessageText(text, opts_subject);
});
	  
	  
	  */
