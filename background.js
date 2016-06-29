window.onload = function start() {
	random = Math.floor((Math.random()*10) + 1);
	var quote = getQuote(random);
	document.getElementById('quote').innerHTML = quote.quote;
	document.getElementById('author').innerHTML = quote.author;
}

function getQuote(index) {

	var quotes = new Array();
	
	quotes[0] = {quote:"It always seems impossible until its done.",author:"Nelson Mandela"};
	quotes[1] = {quote:"Good, better, best. Never let it rest. 'Til your good is better and your better is best.",author:"St. Jerome"};	
	quotes[2] = {quote:"In order to succeed, we must first believe that we can.",author:"Nikos Kazantzakis"};
	quotes[3] = {quote:"What you do today can improve all your tomorrows.",author:"Ralph Marston"};
	quotes[4] = {quote:"Life is 10% what happens to you and 90% how you react to it.",author:"Charles R. Swindoll"};
	quotes[5] = {quote:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"};
	quotes[6] = {quote:"Failure will never overtake me if my determination to succeed is strong enough.",author:"Og Mandino"};
	quotes[7] = {quote:"Always do your best. What you plant now, you will harvest later.",author:"Og Mandino"};
	quotes[8] = {quote:"You are never too old to set another goal or to dream a new dream.",author:"C. S. Lewis"};
	quotes[9] = {quote:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"};
	
	return quotes[index];
}