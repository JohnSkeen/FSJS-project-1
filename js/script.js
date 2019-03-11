/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*

The goal here is to create an array of quotes, randomly select and print the quotes to the dom.
For extra credit the quotes include an extra tag, the background color changes, and there
are set intervals if the user does not click the show another quote button.

*/

// Two constants to set intervals to change the quote and background color

const quoteRotate = window.setInterval(printQuote, 10000);
const colorRotate = window.setInterval(backgroundColor, 10000);


// Array of selected quotes, sources, year, citation, and handles in objects

let quotes = [
  {
    quote: "What one programmer can do in one month, two programmers can do in two months.",
    source: "Fred Brooks",
  },
  {
    quote: "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    source: "Ellen Ullman",
    year: 2017
  },
  {
    quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    source: "Andy Hunt"
  },
  {
    quote: "Java is to JavaScript as ham is to hamster.",
    source: "Jeremy Keith",
    citation: "Resilient Web Design"
  },
  {
    quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
    source: "Oscar Godson",
    citation: "Twitter",
    handle: "@oscargodson"

  }
];

// function to retrieve and return a random quote

function getRandomQuote(array) {
  let randomNumber = Math.random() * 5;
  randomNumber = Math.ceil(randomNumber) - 1;
  return array[randomNumber];
}

// function to print quote to the dom

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let htmlString = ``;
  htmlString += `<p class="quote">${randomQuote.quote}</p>`
  htmlString += `<p class="source">${randomQuote.source}`

  // if statement to identify if quote object has citation
  if (typeof(randomQuote.citation) !== "undefined") {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`
  }

  // if statement to identify if quote object has handle
  if (typeof(randomQuote.handle) !== "undefined") {
    htmlString += `<span class="handle">${randomQuote.handle}</span>`
  }

  // if statement to identify if quote object has year
  if (typeof(randomQuote.year) !== "undefined") {
    htmlString += `<span class="year">${randomQuote.year}</span>`
  }
  htmlString += `</p>`

  // grabbing ID quote-box and printing quote to the dom
  document.getElementById("quote-box").innerHTML = htmlString;
}

printQuote();


// function to randomly select background color

function backgroundColor() {
  // creating rgb array
  let randomNumberArray = [];

  // selecting and pushing array numbers between 0 and 255
  for (i=0; i<3; i+=1) {
    let randomNumber = Math.random() * 256;
    randomNumber = Math.ceil(randomNumber) - 1;
    randomNumberArray.push(randomNumber);
  }

  // writing array numbers to document background color
  document.body.style.backgroundColor = 'rgb(' + randomNumberArray[0] + ',' + randomNumberArray[1] + ',' + randomNumberArray[2] + ')';
}

// grabbing "loadQuote" button and adding event listeners to both print quote and change background color
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", backgroundColor, false);
