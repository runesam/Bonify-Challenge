async function getData(uri, parameters, fetch) {
	let mainURL = 'https://content.googleapis.com/youtube/v3/';
	if (parameters) {
		const parametersKeys = Object.keys(parameters).map(key => `${key}=${parameters[key]}`).join('&');
		mainURL = `${mainURL}${uri}?${parametersKeys}`;
	}
	const Fetch = fetch || window.fetch;
	const promise = await Fetch(mainURL);
	const json = await promise.json();
	return json;
}

async function postData(uri, data, fetch) {
	const Fetch = fetch || window.fetch;
	const URL = `https://content.googleapis.com/youtube/v3/${uri}`;
	try {
		const promise = await Fetch(URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return await promise.json();
	} catch (reason) {
		return reason;
	}
}

const service = {
	getData,
	postData,
};

module.exports = service;



// Client ID
//
// Client Secret
// VyQOXYtmGKZ3w9PcawZfotE1