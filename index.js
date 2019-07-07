#!/usr/bin/env node

// TODO add babel to use ES6+ import syntax
const inquirer = require('inquirer');
const chalk = require('chalk');
const fuzzy = require('fuzzy');
const deckJSON = require('./tarot.json');

const { red, green, cyan } = chalk;
const { log } = console;
const { cards } = deckJSON;
const deck = cards.map(({ name }) => name);

inquirer.registerPrompt('cardSelect', require('inquirer-autocomplete-prompt'));

const searchCards = (answers, input) => {
  input = input || '';
  return new Promise(function(resolve) {
    setTimeout(function() {
      const fuzzyResult = fuzzy.filter(input, deck);
      resolve(
        fuzzyResult.map(function(el) {
          return el.original;
        })
      );
    }, Math.random(30, 500));
  });
};

const questions = [
  {
    type: 'cardSelect',
    name: 'card1',
    message: 'What card did you pull?',
    prefix:
      "\nCard #1: HEART ENERGY/INNER SELF \n      -------------------------------\nThis position represents an energy that is serving as a foundation. It may be one that is permanent and represents one's true nature or an energy that has taken hold of the heart due to life events. This card's energy operates in the background and is tied with the present energy.\n      -------------------------------\n",
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card2',
    message: 'What card did you pull?',
    prefix:
      '\nCard #2: PRESENT ENERGY \n      -------------------------------\nThis is the surrounding energy that creates the mood and creates the atmosphere for future events to emerge.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card3',
    message: 'What card did you pull?',
    prefix:
      '\nCard #3: ENERGY HOLDING YOU BACK OR HELPING YOU \n      -------------------------------\nThis is the energy that may be supporting your goals or adding friction to the situation. Often the card that comes through in this position hints at your hopes and fears.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card4',
    message: 'What card did you pull?',
    prefix:
      '\nCard #4: HOPES/FEARS \n      -------------------------------\nThis is the energy that lurks in your subconscious and at times can be a saboteur. It is the manifestation of hopes and fears.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card5',
    message: 'What card did you pull?',
    prefix:
      '\nCard #5: GROUNDING ENERGY/ADVICE \n      -------------------------------\nThis is the energy that keeps you centered and connected to source energy at the present moment. This energy may come through as a positive card or a one that carries a negative energy. A negative card in this position may signal that your grounding energy is counterproductive. This card advises you to resolve any negative habits or limiting beliefs.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card6',
    message: 'What card did you pull?',
    prefix:
      '\nCard #6: LESSON FROM THE PAST \n      -------------------------------\nThis card is a past lesson or experience that serves as a reminder and offers advice for your current situation.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card7',
    message: 'What card did you pull?',
    prefix:
      '\nCard #7: EXTERNAL OPENINGS OR OBSTACLES \n      -------------------------------\nThis is the energy that enters your personal atmosphere without your invitation. It may increase or alleviate friction.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
  {
    type: 'cardSelect',
    name: 'card8',
    message: 'What card did you pull?',
    prefix:
      '\nCard #8: POSSIBLE FUTURE OR OUTCOME \n      -------------------------------\nThis is the energy that will manifest as a result of action.\n      -------------------------------\n',
    pageSize: 4,
    source: searchCards,
  },
];

inquirer.prompt(questions).then(answers => {
  log(cyan('---------------------------------------'));
  log(
    green(
      `You pulled ${answers.card1} ${answers.card2} ${answers.card3} ${answers.card4} ${answers.card5} ${
        answers.card6
      } ${answers.card7} ${answers.card8}`
    )
  );
});
