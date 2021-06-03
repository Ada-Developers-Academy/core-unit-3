const formatToolList = require('./index');

describe("formatToolList", () => {
  test("formats a list of one tool", () => {
    const tools = [
      {
        name: "Band Saw",
        quantity: 35
      }
    ];
    const result = formatToolList(tools);
    expect(result).toEqual(
      `Tool List:\nTool: Band Saw\nQuantity: 35\nReserve Now!\nDonate Tool!\n---`
    );
    // The expected string would print out like this:
    // Tool List:
    // Tool: Band Saw
    // Quantity: 35
    // Reserve Now!
    // Donate Tool!
    // ---
  });

  test("formats a list of tools", () => {
    const tools = [
      {
        name: "Hammer",
        quantity: 35
      },
      {
        name: "Axe",
        quantity: 18
      },
      {
        name: "Bow",
        quantity: 17
      }
    ];

    const result = formatToolList(tools);

    // Multi-line Strings Preserve Indentation
    // So that's why this string isn't indented
    expect(result)
      .toEqual(`Tool List:\nTool: Hammer\nQuantity: 35\nReserve Now!\nDonate Tool!\n---
Tool: Axe\nQuantity: 18\nReserve Now!\nDonate Tool!\n---
Tool: Bow\nQuantity: 17\nReserve Now!\nDonate Tool!\n---`);

    // The expected string would print out like this:
    // Tool List:
    // Tool: Hammer
    // Quantity: 35
    // Reserve Now!
    // Donate Tool!
    // ---
    // Tool: Axe
    // Quantity: 18
    // Reserve Now!
    // Donate Tool!
    // ---
    // Tool: Bow
    // Quantity: 17
    // Reserve Now!
    // Donate Tool!
    // ---
  });
});
