import './main';
import PubNub from 'pubnub';

let pubnub = new PubNub({
	publishKey: 'pub-c-be8b919e-2818-4fcb-a239-ba1cc61980d5',
	subscribeKey: 'sub-c-6465c2be-8dfd-11e6-a68c-0619f8945a4f'
});

export default {
	sendMessage (data) {
		let publishConfig = {
			channel: 'chat',
			message: data
		};

		pubnub.publish(publishConfig);

	},
	onMessage (callback) {
		pubnub.addListener({
			message (data) {
				callback(data.message);
			}
		});

		pubnub.subscribe({
			channels: ['chat']
		});
	}
};