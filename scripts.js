//select one quote at random from the quotes json
fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        let randomQuote = data[Math.floor(Math.random() * data.length)];
        //if author is unknown, display 'Unknown'
        if (randomQuote.author === null) {
            randomQuote.author = 'Unknown';
        }
        //console.log(randomQuote);
        document.getElementById('quote').innerHTML = randomQuote.text;
        document.getElementById('author').innerHTML = randomQuote.author;
    }
    
    );