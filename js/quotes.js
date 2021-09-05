const quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney",
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life.",
        author:"Steve Jobs",
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"Whoever is happy will make others happy too.",
        author:"Anne Frank",
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron",
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon",
    },
    {
        quote:"Spread love everywhere your go. Let no one ever come to you without leaving happier.",
        author:"Mother Teresa",
    },
    {
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author:"Benjamin Franklin",
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

