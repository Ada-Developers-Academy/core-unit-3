const { Tool } = require('./submission');

describe('Tool', () => {

  test('instances of tool have name, quantity, and reservations attributes', () => {
    const tool = new Tool('Band Saw', 36, []);
    expect(tool).toBeInstanceOf(Tool);
    expect(tool.name).toEqual('Band Saw');
    expect(tool.quantity).toEqual(36);
    expect(tool.reservations.length).toEqual(0);
  });

  test('render includes name and quantity', () => {
    const tool = new Tool('Band Saw', 36, []);

    expect(tool.render()).toEqual('Tool: Band Saw\nQuantity: 36');
  });

});
