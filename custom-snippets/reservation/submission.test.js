const {Reservation} = require('./submission');

describe('Reservation', () => {

  test('instances of reservation have username and a getter method for returnDate', () => {
    const reservation = new Reservation('Hoppleypawz', 'June 01');

    expect(reservation).toBeInstanceOf(Reservation);
    expect(reservation.username).toEqual('Hoppleypawz');
    // Notice that returnDate doesn't use () to retrieve the value, Getter methods 
    // behave a little differently, so be sure to research them specifically.
    expect(reservation.returnDate).toEqual('June 01');
  });
});