# Execution Context and Closures

## Goals

Our goals for this lesson is to introduce at a high-level how nested functions can share context variables in a particular scope, known as closure scope or "closures." By doing so, we will have a better understanding of what makes JavaScript functions and callback functions so powerful as we gear up for consuming APIs.

## Introduction

Before diving into closures, however, we need to begin with a little context. _Execution_ context, that is!  

The **execution context** describes the current environment within which JavaScript code is being run. By its very name, this environment can change depending on when the lines of code are run or where the lines of code are scoped. It's all about the _context_ of when and where JavaScript code is _executed_, which will define the scope of variables and function declarations.  

### !callout-into

## An Example

Fatima opens up her web browser to a new tab. This new tab holds an execution context containing global variables, built-in JavaScript methods, all of which she can inspect using her web browser's console tool.  

<br>

In this tab she logs into Ada's learn platform with a saved email and password. Information like passwords or site cookies are all part of this particular tab's execution context.  

<br>

Then she opens up a new, separate tab to check her email. The cookies and other global variables found in the new tab will be different than those of her first tab.  

### !end-callout

## Local and Global Context

Much like globally and locally scoped variables, there are global and local execution contexts that are created when a function is called and deleted when a function is finished. Below is a breakdown of two execution contexts in a JavaScript file:

![A visual aid describing three separate execution contexts within a JavaScript file](../assets/functions_execution-context-visual.png)