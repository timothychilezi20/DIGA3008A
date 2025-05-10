function getQuote(){
    //Get the elements
    let newQuote = document.getElementById("quote"); 
    let source = document.getElementById("source"); 

    //Create an Array
    let quotes = [];
    let sources = []; 

    //Setting the quotes
    quotes[0] = "“Be yourself; everyone else is already taken.”"; 
    sources[0]="― Oscar Wilde"; 

    quotes[1] = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"; 
    sources[1]="― Marilyn Monroe"; 

    quotes[2] = "“So many books, so little time.”"; 
    sources[2]="― Frank Zappa"; 

    quotes[3] = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"; 
    sources[3]="― Albert Einstein"; 

    quotes[4] = "“A room without books is like a body without a soul.”"; 
    sources[4]="― Marcus Tullius Cicero"; 

    quotes[5] = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"; 
    sources[5]="― Bernard M. Baruch"; 
    
    //Randomly generate number 
    let i=Math.floor(Math.random() * quotes.length); 

    //set the quote
    newQuote.innerHTML = quotes[i]; 
    source.innerHTML = sources[i]; 
}