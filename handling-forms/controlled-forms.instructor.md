# Instructor: Controlled Forms

The lesson states that, without controlled forms, component state and `<input>` state can get out of sync.

- Simon note: Personal experience where that was the case was when I once implemented a search completion feature. Every time there was an input change, we'd need to make an API call. But when the API calls were too slow, the user had already typed more! Our app state and `<input>` field were out of sync.