import $ from 'jquery';

import chat from './chat';

let chatFormElem = $('form');
let messageInputElem = $('.message-input');

function handleSendMessage (event) {
	event.preventDefault();
	let value = messageInputElem.val();

	chat.sendMessage({
		text: value,
		mine: false
	});
}

function outputMessage (data) {
	console.log(data.text);
}

chatFormElem.on('submit', handleSendMessage);

chat.onMessage(outputMessage);