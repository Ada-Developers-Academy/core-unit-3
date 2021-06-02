const { Tool, Reservation, ToolLibrary } = require('./submission');

describe('New features for ToolLibrary, Tool, and Reservation', () => {
  test('ToolLibrary implements summarizeLibrary', () => {
    const hammer = new Tool('Band Saw', 35, [
      new Reservation('Hoppleypawz', 'June 01'),
      new Reservation('Wyndguyxx', 'June 11'),
      new Reservation('Laverbean2001', 'June 13')
    ]);
    const axe = new Tool('Bow', 18, [
      new Reservation('Guttersnipe23', 'June 02')
    ]);
    const toolLibrary = new ToolLibrary([hammer, axe]);

    const summary = toolLibrary.summarizeLibrary();

    expect(summary).toEqual('Tool Library:\n1. Band Saw (Available: 32)\n2. Bow (Available: 17)');
  });

  test('Tool has a reservation property', () => {
    const reservation = new Reservation('Guttersnipe23', 'June 02');
    const axe = new Tool('Bow', 18, [reservation]);

    expect(axe.reservations[0]).toEqual(reservation);
  });

  test('Tool has a method getAvailableQty', () => {
    const reservation = new Reservation('Guttersnipe23', 'June 02');
    const axe = new Tool('Bow', 18, [reservation]);

    expect(axe.getAvailableQty()).toEqual(17);
  });

  test('Tool has a method summarize', () => {
    const reservation = new Reservation('Guttersnipe23', 'June 02');
    const axe = new Tool('Bow', 18, [reservation]);

    expect(axe.summarize()).toEqual('Bow (Available: 17)');
  });
});
