# Instructor: State and Event Handling

## Initializing state from props

There was originally a note in this lesson hinting at initializing state from props. This has to be done carefully and with great intention, or else it can become an anti-pattern: https://medium.com/@justintulk/react-anti-patterns-props-in-initial-state-28687846cc2e

It's very tempting to think of state as instance variables and props as arguments to a ctor, and the initialization values passed into `useState` as the initialization we do in a ctor. But in general this will not be the case. And though the parallels are seductive, we should be careful about using this explanation as a shortcut to understanding with students as it can lead down this path.

Data for a component may come from both props and state. A component should only create state for values that it truly owns. If there is some prop value passed in, there is no need to store it in state, as most likely we will want to redraw the component if the props are updated. But in the case where props were used to initialize state, the prop change wouldn't be reflected in the component since the state value will now be controlling the display.

There _are_ times when a truly "initial" value might need to be passed in and we never expect it to change, but we want the internal state initialized from this value to change, but these tend to be more for toy examples than for cases where the data resembles something we might actually get from a data store.

Mostly, if we are passing props in that are based on some other components state, then the question is why would we bother storing this in state when the value is already available in props? And once we divorce the value from the props by putting it in state, we run the risk of any prop changes not being reflected in the state (since it will only initialize once). To get around this, we would need to register a dependency on the particular prop value to update the state when the prop changes. But if we do that, we might as well simply read from the prop the whole time.

Now maybe this is OK (say the prop value indicates some range and we need to some some pre-calculation over the range and store the result in state, then register an effect to run if the prop updates), but in general, if we find ourselves tempted to initialize state from props, we should double check, and think about it again, and then probably not do that.
