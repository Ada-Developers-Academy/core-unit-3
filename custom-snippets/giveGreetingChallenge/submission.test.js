const { giveCasualGreeting, giveFormalGreeting, writeLetter } = require('./submission');


describe('giveCasualGreeting', () => {

  test('returns a casual greeting with the given name', () => {
    expect(giveCasualGreeting('Miranda')).toEqual('Howdy, Miranda!');

    expect(giveCasualGreeting('Jonathan')).toEqual('Howdy, Jonathan!');
  });

});

describe('giveFormalGreeting', () => {

  test('returns a formal greeting with the given name', () => {
    expect(giveFormalGreeting('Miranda')).toEqual('Dear Mx. Miranda 🤵');

    expect(giveFormalGreeting('Jonathan')).toEqual('Dear Mx. Jonathan 🤵');
  });

});


describe('writeLetter', () => {

  test('returns a letter with a casual greeting', () => {
    const mirandasLetter = writeLetter
    (giveCasualGreeting, 'Miranda');

    expect(mirandasLetter).toEqual('Howdy, Miranda! I hope this letter finds you well.')

    const jonathansLetter = writeLetter(giveCasualGreeting, 'Jonathan');

    expect(jonathansLetter).toEqual('Howdy, Jonathan! I hope this letter finds you well.');
  });

  test('returns a letter with a formal greeting', () => {
    const mirandasLetter = writeLetter
    (giveFormalGreeting, 'Miranda');

    expect(mirandasLetter).toEqual('Dear Mx. Miranda 🤵 I hope this letter finds you well.')

    const jonathansLetter = writeLetter(giveFormalGreeting, 'Jonathan');

    expect(jonathansLetter).toEqual('Dear Mx. Jonathan 🤵 I hope this letter finds you well.');
  });

});

