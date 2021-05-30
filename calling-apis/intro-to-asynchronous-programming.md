# Intro to Asynchronous Programming

## Learning Goals

- Define asynchronous programming
- Compare synchronous and asynchronous programming

## Introduction: A Pizza Metaphor

It's Friday, and Mica is exhausted and spending the evening at home. It's dinner time, and they have no food in their freezer nor fridge. They aren't going to go grocery shopping, and nobody will make dinner for them tonight.

Instead, they'll make a phone call to their favorite restaurant (who's not on an app) and order dinner for themself for delivery.

There's a series of things that happen between the moment Mica makes the order all the way to the point where they take the first bite.

In painstaking detail, let's outline all the actions Mica would do, beginning with picking up the phone, and ending with eating the meal.

<br/>

<details style="max-width: 700px; margin: auto;">
  <summary>
    No, seriously. Take one minute to make a list of the actions Mica would do. After that, then read more here.
  </summary>

We may imagine that what Mica does is make the order, then wait for the order, and then eat.

It's actually way more likely that Mica will make the order, then **before the order arrives, they do other things,** like read, shower, sleep, watch TV. Mica is able to eat their food only after the food order has been received, cooked, assembled, assigned a driver, driven over, and delivered.

The food order was received, made, and delivered. However, while that was happening, Mica **did not wait for the food order to finish** in order to continue other actions. While waiting for the food, Mica didn't stop everything they were doing, sit on the couch, and stare at the wall. (Or maybe they did!)

The point is, Mica didn't _need_ to stop executing other actions while waiting for the food. They continued their other actions and processes while the food-delivery process was working and finishing.

Lastly, **once the food delivery _did_ happen**, Mica knew what action they had to do next: **receive the food** and then eat it!

Throughout this lesson, we can keep in mind these two questions:

1. When does this line of code "finish"?
1. What do we do when this line of code "finishes"?

</details>

## Vocabulary and Synonyms

| Vocab                    | Definition                                                                                                                                        | Synonyms          | How to Use in a Sentence                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flow of control          | The order of execution of programming statements.                                                                                                 | -                 | "When we trace code as it runs, we are following the flow of control"                                                                               |
| Asynchronous programming | A method of programming that intentionally executes actions and processes outside of the typical program flow, so that the program doesn't stop and wait for a result. | Async programming | "Making API calls and loading pages on the web is usually asynchronous, and other code will execute without waiting for the result of an API call." |

## Flow of Control

[**Flow of control**](https://en.wikipedia.org/wiki/Control_flow) in programming refers to the order of programming statements that are executed, and when.

[Synchronous code](https://developer.mozilla.org/en-US/docs/Glossary/synchronous) is code with a specific _flow of control_. Synchronous code always finishes executing an entire line of code before proceeding to the next line of code.

We have been writing synchronous code this whole time!

For example, observe this Python code and this JavaScript code which do the same thing:

```python
def say_apples():
    print("apples")

def say_oranges():
    print("oranges")

say_apples()
say_oranges()
```

```js
const sayApples = () => {
  console.log('apples');
};

const sayOranges = () => {
  console.log('oranges');
};

sayApples();
sayOranges();
```

Both code snippets print out `apples` first, and then `oranges` second, because we call the function that prints `apples` first, and _then_ we call the function that prints `oranges` second. If we need to change the order of how these print, we need to change the order of the lines of code.

### Pizza Metaphor: Synchronous Code

Unlike the food-delivery example from above, synchronous code _executes and finishes_ in a very specific order.

Synchronous code may be more like calling the restaurant and making the order:

1. The restaurant asks what dishes you want
1. They wait for your answer
1. Then they proceed to the next question

## Asynchronous Programming

[Asynchronous Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts) is a method of programming that intentionally breaks the typical flow of control in order to avoid having to stop and wait for a result.

Asynchronous programming accomplishes this by:

1. calling actions/processes outside the usual program flow
2. defining what happens when the result eventually comes back

Asynchronous programming allows us to program behavior where some code _does not wait_ for other code to finish.

To set up asynchronous programming, we will need to consider:

- Which specific technologies (tools and environment) to use that support running asynchronous code
- During or after an asynchronous call, what should happen for all the different cases of success and failure

## Writing Asynchronous Code

To write good asynchronous code, we will have to determine and write the following things:

| Thing to Determine                                                                                                                  | Food Delivery Metaphor                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What is the asynchronous function we are invoking?                                                                                  | How do we order the food?                                                                                                                                                                         |
| What do we do after the asynchronous call finishes?                                                                                 | What do we do after we receive the food delivery?                                                                                                                                                 |
| What do we do if the async call doesn't finish successfully?                                                                        | What do we do if the food never arrives? What do we do if the restaurant calls back and says that they are out of food? What do we do if the restaurant calls back and says they lost your order? |
| How can we ensure that every other part of the program runs correctly, without bugs, even if the asynchronous call hasn't finished? | How do we make sure that Mica isn't too hungry and orders another dinner? If Mica's friend joins them and they are hungry and wants to eat, what does Mica do?                                    |

## Summary

Typically, we write a lot of code that runs in a very specific order (synchronous). However, certain technologies allow us to write asynchronous code, and we'll see plenty of these technologies in JavaScript.

To write asynchronous code, we'll need to anticipate four things:

1. How do we make an asynchronous call?
2. What should happen if the asynchronous call finishes successfully?
3. What should happen if the asynchronous call doesn't finish successfully?
4. What other pieces of code depend on this asynchronous call?

## Resources

- [MDN's intro on General Asynchronous Programming Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [MDN's intro to Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
