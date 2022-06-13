function redirect() {
	const url = window.location.search;
	const urlParams = new URLSearchParams(url);
	const utmSource = urlParams.get("utm_source");
	const utmMedium = urlParams.get("utm_medium");
	const utmCampaign = urlParams.get("utm_campaign");

	const urlRedirect = `https://decoin.com.br/quiz-1${url.toString()}`;
	const decodedUri = decodeURIComponent(urlRedirect);	
	console.log(decodedUri);
	window.location.href = decodedUri;
}