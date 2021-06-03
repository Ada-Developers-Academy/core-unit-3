const {Reservation} = require('./submission');

describe('Reservation', () => {

  test('instances of reservation have username and date', () => {
    const reservation = new Reservation('Hoppleypawz', 'June 01');

    expect(reservation).toBeInstanceOf(Reservation);
    expect(reservation.username).toEqual('Hoppleypawz');
    expect(reservation.date).toEqual('June 01');
  });
});