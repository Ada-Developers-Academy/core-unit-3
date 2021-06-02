# Problem Set: Tool Library Wave 2

## Directions

Complete all questions below.

The following questions will require independent research centered on how to represent classes in JavaScript. We should consider what we know about classes in other languages, and look for ways to represent those concepts in JavaScript.

Some useful concepts to think about include:
1. Class definitions
1. Constructors
1. Fields/properties/attributes
1. Instance methods
1. Getter methods

Our objective is to learn and practice object-oriented programming in JavaScript.

We'll accomplish this by making some classes, adding methods to these classes, and forming relationships between them.

## Diagram

In this section, let's express the classes we need to make in a UML diagram (similar to an ERD diagram, but for classes instead of databases). Imagine that you are working with a team member on this project. Take notes on paper, an online tool, or a whiteboard, so you can share your diagram easily.

We will have three classes:

| <div style="width:200px;">Class Name</div>    | Responsibility                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| `Tool`        | Represents a single tool in the tool library, such as a "Soldering Iron" or "3D Printer." Acts like a database model. |
| `ToolLibrary` | Represents a library of tools.                                                                                |
| `Reservation` | Represents one reservation of a tool, where one user is renting a tool, and must return it at a certain date. |

Here are details about the `Tool` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`         | Attribute. The human-readable name of a tool, such as "Soldering Iron" or "3D Printer."                                            |
| `quantity`     | Attribute. The total quantity of this tool within the tool library.                                                        |
| `reservations` | Attribute. An array of `Reservation` instances associated with this tool.                                                  |
| `render`       | Method. Responsible for formatting the data of the tool in a nice, human-readable string such as would show up on a web page. |

Here are details about the `ToolLibrary` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `tools`       | Attribute. An array of `Tool` instances.                                                                                 |
| `listTools`   | Method. Responsible for formatting the array of tools in a nice, human-readable string such as would show up on a web page. |

Here are details about the `Reservation` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| ------------- | ------------------------------------------------------------------------- |
| `username`    | Attribute. The name of the user who borrowed the tool.                    |
| `date`        | Attribute. A string with the return date designated for this reservation. |
| `returnDate`  | Getter Method. Returns the value of `date`.                               |

<!-- Question 1 -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: c98412a2
* title: Tool Library Wave 2
##### !question

Do some research about UML diagrams, then use your findings to create a UML diagram that describes these three classes. Your diagram should include:

- The names of all three classes
- A list of all properties underneath each class name
- Arrows between the classes, with labels to describe composition. Label which class is the _composite_ and which class is the _component_.

Now, briefly summarize your diagram below. Include a link to your diagram, if possible.

##### !end-question
### !end-challenge
<!-- prettier-ignore-end -->

## Implement `Tool`

<!-- Question 2 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: a5a68b2d
* title: Tool Library Wave 2
* docker_directory_path: /custom-snippets/tool
##### !question

Implement the class `Tool`. Here are details about the `Tool` class.

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`        | Attribute. The human-readable name of a tool, such as "Solder" or "3D Printer."                                            |
| `quantity`    | Attribute. The total quantity of this tool within the tool library.                                                        |
| `reservations`    | Attribute. An array of `Reservation` instances associated with this tool. We will see what `Reservation` instances look like a bit later. For now, we can simply be sure to keep a reference to whatever array we receive in our constructor.                                                        |
| `render`      | Method. Responsible for formatting the data of the tool in a nice, human-readable string such as would show up on a web page. |

For a `Tool` with the `name` "Band Saw" and the `quantity` 36, the `render` method will return:

```
Tool: Band Saw
Quantity: 36
```

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
### !hint

Here are the tests:

```js
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
```

### !end-hint
### !explanation

An example of a working implementation:

```js
class Tool {
    constructor(name, quantity, reservations) {
        this.name = name;
        this.quantity = quantity;
        this.reservations = reservations;
    }

    render() {
        return `Tool: ${this.name}\nQuantity: ${this.quantity}`;
    }
}
```

### !end-explanation
### !end-challenge
<!-- prettier-ignore-end -->

## Implement `ToolLibrary`

<!-- Question 3 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: a8f1be2a
* title: Tool Library Wave 2
* docker_directory_path: /custom-snippets/toolLibrary
##### !question

Implement the class `ToolLibrary`. Here are details about the `ToolLibrary` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `tools`         | Attribute. An array of `Tool` instances.                                                                                 |
| `listTools` | Method. Responsible for formatting the array of tools in a nice, human-readable string such as would show up on a web page. |

For a `ToolLibrary` with two tools, the `listTools` method will return:

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
```

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
### !explanation

An example of a working implementation:

```js
class ToolLibrary {
    constructor(tools) {
        this.tools = tools;
    }

    listTools() {
        const formattedString = this.tools.reduce((text, tool) => {
            return `${text}\n${tool.render()}\nReserve Now!\nDonate Tool!\n---`;
        }, "Tool List:");
        return formattedString;
    }
}
```

### !end-explanation
### !hint

Here are the tests:

```js
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
```

### !end-hint
### !end-challenge
<!-- prettier-ignore-end -->

## Implement `Reservation`

<!-- Question 4 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: 25d3927b
* title: Tool Library Wave 2
* docker_directory_path: /custom-snippets/reservation
##### !question

Implement the class `Reservation`. Here are details about the `Reservation` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| ------------- | ------------------------------------------------------------------------- |
| `username`    | Attribute. The name of the user who borrowed the tool.                    |
| `date`        | Attribute. A string with the return date designated for this reservation. |
| `returnDate`  | Getter Method. Returns the value of `date`.                               |

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
### !explanation

An example of a working implementation:

```js
class Reservation {
    constructor(username, date) {
        this.username = username;
        this.date = date;
    }

    get returnDate() {
        return this.date;
    }
}
```

### !end-explanation
### !hint

Here are the tests:

```js
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
```

### !end-hint
### !end-challenge
<!-- prettier-ignore-end -->

## All Together

Let's rework our classes to make them all fit together.

Inside the `ToolLibrary` class, we'll create a new method named `summarizeLibrary`. This method returns a string that summarizes the tools and available quantity, such as:

```
Tool Library:
1. Band Saw (Available: 32)
2. Bow (Available: 17)
```

To support this feature, we are introducing a number of new helper methods.

Here are details about the `ToolLibrary` class:

| <div style="width:200px;">Property Name</div>  | Description                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `tools`            | Attribute. An array of `Tool` instances.                                                                                                        |
| `summarizeLibrary` | Method. Responsible for formatting a summary of tools and available quantity in a nice, human-readable string such as would show up on a web page. |

Here are details about the `Tool` class:

| <div style="width:270px;">Property Name</div>  | Description                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | Attribute. The human-readable name of a tool, such as "Soldering Iron" or "3D Printer."                                                                         |
| `quantity`        | Attribute. The total quantity of this tool within the tool library.                                                                                     |
| `reservations`    | Attribute. An array of `Reservation` instances associated with this tool.                                                                               |
| `getAvailableQuantity` | Method. Responsible for calculating the available quantity, which is the quantity minus the number of reservations.                                     |
| `summarize`       | Method. Responsible for formatting a summary of the tool name and available quantity in a nice, human-readable string such as would show up on a web page. |

Here are details about the `Reservation` class:

| <div style="width:150px;">Property Name</div>  | Description                                                                                                                |
| ------------- | ------------------------------------------------------------------------- |
| `username`    | Attribute. The name of the user who borrowed the tool.                    |
| `date`        | Attribute. A string with the return date designated for this reservation. |
| `returnDate`  | Getter Method. Returns the value of `date`.                               |

<!-- Question 5 -->
<!-- prettier-ignore-start -->
### !challenge
* type: paragraph
* id: 21d10f9b
* title: Tool Library Wave 2
##### !question

Consider your UML diagram, and update it with the new information above. Include the following additions:

- The `ToolLibrary` class has a method named `summarizeLibrary`
- The `Tool` class has a method named `getAvailableQuantity`
- The `Tool` class has a method named `summarize`

##### !end-question
### !end-challenge
<!-- prettier-ignore-end -->

<!-- Question 6 -->
<!-- prettier-ignore-start -->
### !challenge
* type: custom-snippet
* language: javascript
* id: c4b5b174
* title: Tool Library Wave 2
* docker_directory_path: /custom-snippets/summarizeLibrary
##### !question

Implement all three classes, `ToolLibrary`, `Tool`, and `Reservation`. We can reuse some of the logic we implemented in previous questions.

The tests are visible in the first hint. (Moved into hints to prevent this text from becoming unusably long.)

##### !end-question
##### !placeholder
```js
class Tool {
    constructor(name, quantity, reservations) {

    }

    getAvailableQuantity() {

    }

    summarize() {

    }
}

class ToolLibrary {
    constructor(tools) {

    }

    summarizeLibrary() {

    }
}

class Reservation {
    constructor(username, date) {

    }

    get returnDate() {

    }
}
```
##### !end-placeholder
### !explanation

An example of a working implementation:

```js
class Tool {
    constructor(name, quantity, reservations) {
        this.name = name;
        this.quantity = quantity;
        this.reservations = reservations;
    }

    render() {
        return `Tool: ${this.name}\nQuantity: ${this.quantity}`;
    }

    getAvailableQuantity() {
        return this.quantity - this.reservations.length;
    }

    summarize() {
        return `${this.name} (Available: ${this.getAvailableQuantity()})`;
    }
}

class ToolLibrary {
    constructor(tools) {
        this.tools = tools;
    }

    listTools() {
        const formattedString = this.tools.reduce((text, tool) => {
            return `${text}\n${tool.render()}\nReserve Now!\nDonate Tool!\n---`;
        }, "Tool List:");
        return formattedString;
    }

    summarizeLibrary() {
        let formattedLibrary = "Tool Library:";
        this.tools.forEach((tool, currentIndex) => {
            formattedLibrary = `${formattedLibrary}\n${currentIndex + 1}. ${tool.summarize()}`;
        });
        return formattedLibrary;
    }
}

class Reservation {
    constructor(username, date) {
        this.username = username;
        this.date = date;
    }

    get returnDate() {
        return this.date;
    }
}
```

### !end-explanation
### !hint

Here are the tests:

```js
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

    expect(axe.getAvailableQuantity()).toEqual(17);
  });

  test('Tool has a method summarize', () => {
    const reservation = new Reservation('Guttersnipe23', 'June 02');
    const axe = new Tool('Bow', 18, [reservation]);

    expect(axe.summarize()).toEqual('Bow (Available: 17)');
  });
});
```

### !end-hint
### !end-challenge
<!-- prettier-ignore-end -->
