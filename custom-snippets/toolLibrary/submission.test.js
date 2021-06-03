const { ToolLibrary } = require('./submission');

class Tool {
  constructor(name, quantity, reservations) {
      this.name = name;
      this.quantity = quantity;
      this.reservations = reservations;
  }

  render() {
      return `Tool: ${this.name}\nQuantity: ${this.quantity}`
  }
}

describe('ToolLibrary', () => {

  test('sets a given array of tools to the property tools', () => {
    const hammer = new Tool('Hammer', 35, []);
    const axe = new Tool('Axe', 18, []);
    const tools = [hammer, axe];

    const toolLibrary = new ToolLibrary(tools);

    expect(toolLibrary).toBeInstanceOf(ToolLibrary);
    expect(toolLibrary.tools[0].name).toEqual('Hammer');
    expect(toolLibrary.tools[1].name).toEqual('Axe');
  });

  test('listTools returns a string with tool names and quantities', () => {
    const hammer = new Tool('Hammer', 35, []);
    const axe = new Tool('Axe', 18, []);

    const toolLibrary = new ToolLibrary([hammer, axe]);

    expect(toolLibrary.listTools()).toEqual(`Tool List:\nTool: Hammer\nQuantity: 35\nReserve Now!\nDonate Tool!\n---
Tool: Axe\nQuantity: 18\nReserve Now!\nDonate Tool!\n---`);
  });
});