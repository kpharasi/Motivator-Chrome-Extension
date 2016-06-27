window.onload = function start() {
	random = Math.floor((Math.random()*10) + 1);
	var quote = getQuote(random);
	document.getElementById('quote').innerHTML = quote.quote;
	document.getElementById('author').innerHTML = quote.author;
}

function getQuote(index) {

	var quotes = new Array();
	
	quotes[0] = {quote:"It always seems impossible until its done.",author:"Nelson Mandela"};
	quotes[1] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};	
	quotes[2] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[3] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[4] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[5] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[6] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[7] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[8] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	quotes[9] = {quote:"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.",author:"Muhammad Ali"};
	
	return quotes[index];
}