# Problem Set: Tool Library

## Directions

Complete all questions below.

## Practice

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: eb58c8c3
* title: formatToolList
* docker_directory_path: /custom-snippets/formatToolList
##### !question

Implement the function `formatToolList`.

This function takes in an array of objects. Each object in the array has this shape:

```js
{
    name: "Band Saw",
    quantity: 35
}
```

The function should return a string. This string begins with the line:

```
Tool List:
```

Then for each tool, it adds the following lines with the appropriate values:

```
Tool: Band Saw
Quantity: 35
Reserve Now!
Donate Tool!
---
```

For example, given this array of tool data:

```js
[
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
```

the function should return a string that looks like this:

```
Tool List:
Tool: Hammer
Quantity: 35
Reserve Now!
Donate Tool!
---
Tool: Axe
Quantity: 18
Reserve Now!
Donate Tool!
---
Tool: Bow
Quantity: 17
Reserve Now!
Donate Tool!
---
```

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
##### !placeholder
```js
const formatToolList = (toolsData) => {

}
```
##### !end-placeholder
### !hint

Here are the tests:

```js
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
```

### !end-hint
### !hint

Take advantage of the newline character, `\n`. When `\n` is in a string, it will create a new line.

For example, this string:

```js
`Tool List:\nTool: Hammer\nQuantity: 35\nReserve Now!\nDonate Tool!\n---`
```

would print out to be:

```
Tool List:
Tool: Hammer
Quantity: 35
Reserve Now!
Donate Tool!
```

### !end-hint
### !explanation

An example of a working implementation:

```js
const formatToolList = (toolsData) => {
  const formattedString = toolsData.reduce((text, tool) => {
    return `${text}\nTool: ${tool.name}\nQuantity: ${tool.quantity}\nReserve Now!\nDonate Tool!\n---`;
  }, "Tool List:");
  return formattedString;
};
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: ccca154e
* title: formatReservations
* docker_directory_path: /custom-snippets/formatReservations
##### !question

Implement the function `formatReservations`.

This function takes in one object. The object has this shape:

```js
{
    tool: "Band Saw",
    reservations: [
        {
            username: "Hoppleypawz",
            returnDate: "June 01"
        },
        {
          username: "Wyndguyxx",
          returnDate: "June 11"
        }
    ]
}
```

The function should return a string. This string begins with the line:

```
Reservations for ToolName:
```

where `ToolName` is the tool's name.

Then, the string lists a summary of each reservation's return date:

```
- Return Date: June 01
```

For example, given this object of tool data that includes reservations:

```js
{
    tool: "Band Saw",
    reservations: [
        {
            username: "Hoppleypawz",
            returnDate: "June 01"
        },
        {
          username: "Wyndguyxx",
          returnDate: "June 11"
        }
    ]
}
```

the function should return a string that looks like this:

```js
Reservations for Band Saw:
- Return Date: June 01
- Return Date: June 11
```

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
### !hint

Here are the tests:

```js
describe("formatReservations", () => {
  test("lists one reservations for the tool", () => {
    const toolData = {
      tool: "Band Saw",
      reservations: [
        {
          username: "Hoppleypawz",
          returnDate: "June 01"
        }
      ]
    };

    const result = formatReservations(toolData);
    expect(result).toEqual(`Reservations for Band Saw:\n- Return Date: June 01`);

    // The expected string would print out like this:
    // Reservations for Band Saw:
    // - Return Date: June 01

  });

  test("creates a list of reservations for the tool", () => {
    const toolData = {
      tool: "Band Saw",
      reservations: [
        {
          username: "Hoppleypawz",
          returnDate: "June 01"
        },
        {
          username: "Wyndguyxx",
          returnDate: "June 11"
        },
        {
          username: "Laverbean2001",
          returnDate: "June 13"
        }
      ]
    };

    const result = formatReservations(toolData);
    expect(result).toEqual(
      `Reservations for Band Saw:\n- Return Date: June 01\n- Return Date: June 11\n- Return Date: June 13`
    );

    // The expected string would print out like this:
    // Reservations for Band Saw:
    // - Return Date: June 01
    // - Return Date: June 11
    // - Return Date: June 13
  });
});
```

### !end-hint
### !explanation

An example of a working implementation:

```js
const formatReservations = (toolData) => {
  const initialStr = `Reservations for ${toolData.tool}:`;
  const result = toolData.reservations.reduce((formattedText, reservation) => {
    return `${formattedText}\n- Return Date: ${reservation.returnDate}`;
  }, initialStr);

  return result;
};
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: 88e8247d
* title: formatLibrary
* docker_directory_path: /custom-snippets/formatLibrary
##### !question

Implement the function `formatLibrary`.

This function takes in an array of objects. Each object in the array has this shape:

```js
{
    name: "Band Saw",
    totalQuantity: 35,
    reservations: [
        {
            username: "Hoppleypawz",
            returnDate: "June 01"
        },
        {
            username: "Wyndguyxx",
            returnDate: "June 11"
        },
        {
            username: "Laverbean2001",
            returnDate: "June 13"
        }
    ]
}
```

The function should return a string. This string begins with the line:

```
Tool Library:
```

Then, the string lists a summary of the quantity of each tool currently available to rent:

```
1. Band Saw (Available: 32)
```

For example, given this array:

```js

      {
        name: "Band Saw",
        totalQuantity: 35,
        reservations: [
          {
            username: "Hoppleypawz",
            returnDate: "June 01"
          },
          {
            username: "Wyndguyxx",
            returnDate: "June 11"
          },
          {
            username: "Laverbean2001",
            returnDate: "June 13"
          }
        ]
      },
      {
        name: "Bow",
        totalQuantity: 18,
        reservations: [
          {
            username: "Guttersnipe23",
            returnDate: "June 02"
          }
        ]
      }
    ]
```

the function should return a string that looks like this:

```
Tool Library:
1. Band Saw (Available: 32)
2. Bow (Available: 17)
```

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
### !hint

Here are the tests:

```js
describe("formatLibrary", () => {
  test("lists one tool and its quantity available", () => {
    const libraryData = [
      {
        name: "Band Saw",
        totalQuantity: 35,
        reservations: [
          {
            username: "Hoppleypawz",
            returnDate: "June 01"
          },
          {
            username: "Wyndguyxx",
            returnDate: "June 11"
          },
          {
            username: "Laverbean2001",
            returnDate: "June 13"
          }
        ]
      }
    ];

    const result = formatLibrary(libraryData);

    expect(result).toEqual(`Tool Library:\n1. Band Saw (Available: 32)`);

    // The expected string would print out like this:
    // Tool Library:
    // 1. Band Saw (Available: 32)
  });

  test("lists multiple tools and their quantity available", () => {
    const libraryData = [
      {
        name: "Band Saw",
        totalQuantity: 35,
        reservations: [
          {
            username: "Hoppleypawz",
            returnDate: "June 01"
          },
          {
            username: "Wyndguyxx",
            returnDate: "June 11"
          },
          {
            username: "Laverbean2001",
            returnDate: "June 13"
          }
        ]
      },
      {
        name: "Bow",
        totalQuantity: 18,
        reservations: [
          {
            username: "Guttersnipe23",
            returnDate: "June 02"
          }
        ]
      }
    ];

    const result = formatLibrary(libraryData);

    expect(result).toEqual(
      `Tool Library:\n1. Band Saw (Available: 32)\n2. Bow (Available: 17)`
    );

    // The expected string would print out like this:
    // Tool Library:
    // 1. Band Saw (Available: 32)
    // 2. Bow (Available: 17)
  });
});
```

### !end-hint
### !hint

Many loops, such as the `forEach` and `reduce` function, can keep track of the current index.

For example, this code:

```js
['red', 'yellow', 'blue'].forEach( (color, currentIndex) => {
    console.log(`${currentIndex}. ${color}`);
});
```

Will output this:

```
0. red
1. yellow
2. blue
```

### !end-hint
### !explanation

An example of a working implementation:

```js
const formatLibrary = (libraryData) => {
  let formattedLibrary = "Tool Library:";
  libraryData.forEach((tool, currentIndex) => {
    formattedLibrary = `${formattedLibrary}\n${currentIndex + 1}. ${
      tool.name
    } (Available: ${tool.totalQuantity - tool.reservations.length})`;
  });
  return formattedLibrary;
};
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

