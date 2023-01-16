const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json())
app.locals.title = 'Mad Libs API'
app.locals.madlibs = 
[
  {
    id: 1,
    quote: "'The way to get started is to quit talking and begin doing.' -Walt Disney",
    parsedQuote: "The way to get pluralNoun is to quit talking and begin ingVerb",
    wordsNeeded: ["pluralNoun", "ingVerb"],
    partsOfSpeech: ["Plural noun", "Verb ending in '-ing'"]
  },
  {
    id: 2,
    quote: "'In the end, it's not the years in your life that count. It's the life in your years.' -Abraham Lincoln",
    parsedQuote: "In the end, its not the pluralNoun1, in your life but the noun in your pluralNoun2",
    wordsNeeded: ["pluralNoun1", "noun", "pluralNoun2"],
    partsOfSpeech: ["Plural noun", "Noun", "Plural Noun"]
  },
  {
    id: 3,
    quote: "'Never let the fear of striking out keep you from playing the game.' -Babe Ruth",
    parsedQuote: "Never let the fear of ingVerb1 keep you from ingVerb2 the noun - Babe Ruth",
    wordsNeeded: ["ingVerb1", "ingVerb2", "noun"],
    partsOfSpeech: ["Verb ending in '-ing'", "Verb ending in '-ing'", "Noun"]
  },
  {
    id: 4,
    quote: "'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.' -Dr. Seuss",
    parsedQuote: "You have brains in your noun. You have bodyPart in your shoes. You can verb yourself in any direction you choose. -Dr. Seuss",
    wordsNeeded: ["noun", "bodyPart", "verb"],
    partsOfSpeech: ["Noun", "Body part", "Verb"]
  },
  {
    id: 5,
    quote: "'If you can't handle me at my worst, then you sure as hell don't deserve me at my best.' - Marilyn Monroe",
    parsedQuote: "If you can't handle me at my estAdjective1, then you sure as heck don't deserve me at my estAdjective2. - Marilyn Monroe",
    wordsNeeded: ["estAdjective1", "estAdjective2"],
    partsOfSpeech: ["Adjective ending in '-est'", "Adjective ending in '-est'" ]
  },
  {
    id: 6,
    quote: "'A journey of a thousand miles begins with a single step.' - Lao Tzu",
    parsedQuote: "A noun1 of a number miles begins with a single noun2. -Lao Tzu",
    wordsNeeded: ['noun1', 'number', 'noun2'],
    partsOfSpeech: ["Noun", "Number", "Noun"]
  },
  {
    id: 7,
    quote: "'If you want to make your dreams come true, the first thing you have to do is wake up.' - J.M. Power",
    parsedQuote: 'If you want to make your pluralNoun come true, the first noun you have to do is verb. - J.M. Power',
    wordsNeeded: ['pluralNoun', 'noun', 'verb'],
    partsOfSpeech: ["Plural noun", "Noun", "Verb"]
  },
  {
    id: 8,
    quote: "'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.' ― Bernard M. Baruch",
    parsedQuote: 'Be who you are and verb1 what you feel, because those who verb2 don\'t matter, and those who matter don\'t verb3 ― Bernard M. Baruch',
    wordsNeeded: ['verb1', 'verb2', 'verb3'],
    partsOfSpeech: ["Verb", "Verb", "Verb"]
  },
  {
    id: 9,
    quote: "'You only live once, but if you do it right, once is enough.' ― Mae West",
    parsedQuote: 'You only verb1 once, but if you do it adverb, once is enough. - Mae West',
    wordsNeeded: ['verb1', 'adverb'],
    partsOfSpeech: ["Verb", "Adverb"]
  },
  {
    id: 10,
    quote: "'We accept the love we think we deserve.' ― Stephen Chbosky",
    parsedQuote: "We accept the noun we think we deserve ― Stephen Chbosky",
    wordsNeeded: ["noun"],
    partsOfSpeech: ["Noun"]
  },
  {
    id: 11,
    quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' ― Ralph Waldo Emerson",
    parsedQuote: "To be a mammal in a world that is constantly trying to make you a noun is the estAdjective accomplishment. ― Ralph Waldo Emerson",
    wordsNeeded: ["mammal", "noun", "estAdjective" ],
    partsOfSpeech: ["Mammal", "Noun", "Adjective ending in '-est'"]
  },
  {
    id: 12,
    quote: "'All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.' - J.R.R. Tolkien",
    parsedQuote: "All that is gold does not verb1, Not all those who verb2 are lost; The old that is adjective does not wither, Deep noun are not reached by the frost. - J.R.R. Tolkien",
    wordsNeeded: ["verb1", "verb2", "adjective", "noun"],
    partsOfSpeech: ["Verb", "Verb", "Adjective", "Noun"]
  },
  {
    id: 13,
    qupte: "'The fool doth think he is wise, but the wise man knows himself to be a fool.' -William Shakespeare",
    parsedQuote: "'manPerson doth think he is wise, but the wise man knows himself to be a noun.' ― William Shakespeare",
    wordsNeeded: ["manPerson", "noun"],
    partsOfSpeech: ["Person who uses he/him pronouns", "Noun"]
  },
  {
    id: 14,
    quote: "'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.' - William Shakespeare",
    parsedQuote: "'Be not afraid of noun1. Some are born adjective, some achieve noun2, and others have greatness pastTenseVerb upon them.' - William Shakespeare",
    wordsNeeded: ["noun1", "adjective", "noun2", "pastTenseVerb"],
    partsOfSpeech: ["Noun", "Adjective", "Noun", "Past-tense verb"]
  },
  {
    id: 15,
    quote: "'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.' - Ralph Waldo Emerson",
    parsedQuote: "What lies preposition1 you and what lies preposition2 you, pales in comparison to what lies preposition3 you. - Ralph Waldo Emerson",
    wordsNeeded: ["preposition1", "preposition2", "preposition3"],
    partsOfSpeech: ["Preposition", "Preposition", "Preposition"]
  },
  {
    id: 16,
    quote: "'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime. - Anon'",
    parsedQuote: "Give a man a noun and you feed him for a day; teach a man to verb and you feed him for periodOfTime. - Anon",
    wordsNeeded: ["noun", "verb", "periodOfTime"],
    partsOfSpeech: ["Noun", "Verb", "Period Of Time"]
  },
  {
    id: 17, 
    quote: "'The grass is always greener on the other side of the fence.' - Anon",
    parsedQuote: "The grass is always adjective on the other side of the noun. - Anon",
    wordsNeeded: ["adjective", "noun"],
    partsOfSpeech: ["Adjective", "Noun"]
  },
  {
    id: 18,
    quote: "'A picture is worth a thousand words' - Anon",
    parsedQuote: "A noun is worth number pluralNoun - Anon",
    wordsNeeded: ["noun", "number", "pluralNoun"],
    partsOfSpeech: ["Noun", "Number", "Plural noun"]
  },
  {
    id: 19,
    quote: "'The only thing we have to fear is fear itself.' ― Franklin D. Roosevelt",
    parsedQuote: "The only noun1 we have to fear is noun2. ― Franklin D. Roosevelt",
    wordsNeeded: ["noun1", "noun2"],
    partsOfSpeech: ["Noun", "Noun"]
  },
  {
    id: 20,
    quote: "'Anything worth dying for is certainly worth living for.' - Joseph Heller",
    parsedQuote: "Anything worth dying for is adverb worth living for. - Joseph Heller",
    wordsNeeded: ["adverb"],
    partsOfSpeech: ["Adverb"]
  }, 
  {
    id: 21,
    quote: "'It was the best of times, it was the worst of times' - Charles Dickens",
    parsedQuote: "event1 was the best of times, event2 was the worst of times - Charles Dickens",
    wordsNeeded: ["event1", "event2"],
    partsOfSpeech: ["Event", "Event"]
  },
  {
    id: 22,
    quote: "'Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.' - Robert Frost",
    parsedQuote: "Two roads diverged in a place, and person verb the one less traveled by, and that has made all the difference. - Robert Frost",
    wordsNeeded: ["place", "person", "verb"],
    partsOfSpeech: ["Place", "Person", "Verb"]
  }, 
  {
    id: 23,
    quote: "'To be, or not to be: that is the question: // Whether tis nobler in the mind to suffer // The slings and arrows of outrageous fortune //Or to take arms against a sea of troubles' - William Shakespeare",
    parsedQuote: "To verb1, or not to verb2: that is the question: // Whether tis adjective1 in the mind to suffer // The slings and arrows of adjective2 fortune //Or to take arms against a sea of pluralNoun - William Shakespeare",
    wordsNeeded: ["verb1", "verb2", "adjective1", "adjective2", "pluralNoun"],
    partsOfSpeech: ["Verb", "Verb", "Adjective", "Adjective", "Plural noun"]
  },
  {
    id: 24,
    quote: "'Water, water, everywhere, nor any drop to drink' - Samuel Taylor Coleridge",
    parsedQuote: "noun1, noun2, everywhere, nor any drop to verb - Samuel Taylor Coleridge",
    wordsNeeded: ["noun1", "noun2", "verb"],
    partsOfSpeech: ["Noun", "Noun", "Verb"]
  },
  {
    id: 25,
    quote: "'Do not go gentle into that good night' - Dylan Thomas",
    parsedQuote: "Do not go adverb into that adjective place - Dylan Thomas",
    wordsNeeded: ["adverb", "adjective", "place"],
    partsOfSpeech: ["Adverb", "Adjective", "Place"]
  }
]
app.locals.favorites = []

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})

app.get('/madlibs', (req, res) => {
  const madlibs = app.locals.madlibs

  res.json({madlibs})
})

app.get('/madlibs/favorites', (req, res) => {
  const favorites = app.locals.favorites

  res.json(favorites)
})

app.get('/madlibs/:id', (req, res) => {
  const id = req.params.id;
  const madlib = app.locals.madlibs.find(madlib => madlib.id === parseInt(id))

  if(!madlib) {
    return res.sendStatus(404)
  }

  res.status(200).json(madlib)
})


app.use(express.json())

app.post('/madlibs/favorites', (req, res) => {
  const id = Date.now()
  const favorite = req.body;

  ['quote', 'isFavorited'].forEach(requiredElement => {
    if(!favorite[requiredElement]) {
      res
        .status(422)
        .send({error: `Expected format: {quote: <string>, isFavorited: <boolean>}. You're missing a "${requiredElement}" property.`})
    }
  })

  const { quote, isFavorited } = favorite
  app.locals.favorites.push({ id, quote, isFavorited })
  res.status(201).json({ id, quote, isFavorited })
})

app.delete('/madlibs/favorites/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filteredFavorites = app.locals.favorites.filter(madlib => madlib.id !== id)
  app.locals.favorites = filteredFavorites

  res.status(200).json(app.locals.favorites);
})

module.exports = app;
