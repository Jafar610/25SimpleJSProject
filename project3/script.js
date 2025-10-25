function generate(){
    var quotes = {
       "Helen Keller":'"The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart."',
       "Zig Ziglar": '"Your attitude, not your aptitude, will determine your altitude"',

       "George Orwell":'"Freedom is the right to tell people what they do not want to hear."',

    }

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    
    document.getElementById('qoutes').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}