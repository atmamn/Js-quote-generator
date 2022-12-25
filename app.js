// variables

const randomQuotes = document.querySelector('.random-quote');
const author = document.querySelector('.author');
const button = document.querySelector('.button');
button.textContent = 'new quote';

const myArray= [
	{
		randomQuotes: '\"When we have respect for ourselves and others, we gravitate towards connections that encourage that.\"',
		author: 'Simeon Lindstrom'
	},
	{
		randomQuotes: '\"Anger is the ultimate destroyer of your own peace of mind.\"',
		author: 'Dalai Lama'
	},
	{
		randomQuotes: '\"A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful.\"',
		author: 'L. R. Ellert'
	},
	{
		randomQuotes: '\"Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don\'t take the shot.\"',
		author: 'Wayne Gretzky'
	},
	{
		randomQuotes: '\"Take but leave for others\"',
		author: 'Me'
	},
	{
		randomQuotes: '\"The world is a beautiful place, work hard and be happy\"',
		author: 'Me'
	},
	{
		randomQuotes: '\"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.\"',
		author: 'Ray Kroc'
	},
];

generateRandomQuote = () => {
	let randomDisplay = Math.floor(Math.random() * myArray.length);
  
	randomQuotes.innerHTML = myArray[randomDisplay].randomQuotes;
	author.innerHTML = myArray[randomDisplay].author;
  }
  
  window.onload = generateRandomQuote;
  
  button.addEventListener('click', generateRandomQuote);
  

/*button.addEventListener('click', function(){
	let randomDisplay = Math.floor(Math.random() * myArray.length);

	randomQuotes.innerHTML = myArray[randomDisplay].randomQuotes;
	author.innerHTML = myArray[randomDisplay].author;
});

window.onload = function() {
	generateRandomQuote();
}*/

