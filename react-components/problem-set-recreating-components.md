# Problem Set: Recreating Components

## Directions

This problem set will ask you to create several components. To do this, we will create a practice React app named `recreate-github`.

Run this command to create this practice project.

```bash
$ npm create -y vite@latest recreate-github -- --template react
```

Change into the created directory, install the dependencies, and run the server, as directed by the output from the setup.

There is no submission for this problem set. Be prepared to share your work in small groups.

## Practice

Create a simplified version of the GitHub landing page using React components. The GitHub landing page has changed since this screenshot was taken, but it has a number of interesting pieces to recreate. Please base your work on this screenshot and the accompanying detailed instructions that follow.

![Web browser displaying the GitHub landing page](../assets/react-components_problem-set-recreating-components_landing.png)  
_Fig. A snapshot in time. The GitHub landing page (c. Jun 2021)_

You _must_ create the following components with these names:

- `NavigationBar`
- `SearchBar`
- `LoginControls`
- `HeroSection`
- `NewsletterForm`
- `StatsBar`

The `App` component must render all of these components once.

### Prioritize Content, Deprioritize Layout

For this exercise, creating the components with the correct content and rendering them is the highest priority.

Setting the layout is the lowest priority.

### Add Zero Behavior

For this exercise, all links should go nowhere, and all buttons should do nothing. Text input fields should do nothing.

### Do Not Recreate Animations

The goal of this assignment is to practice creating components. Do not recreate any animations or advanced styles for this exercise.

Otherwise, be creative and bring in any other styles you want.

<!-- Simon Note: I want to emphasize it, so here's some straight-up repetition! -->
### !callout-danger

## Prioritize Content, Deprioritize Layout

For this exercise, creating the components with the correct content and rendering them is the highest priority. Setting the layout is the lowest priority.

### !end-callout

### `NavigationBar`

![The navigation region of the GitHub landing page](../assets/react-components_problem-set-recreating-components_navigationbar.png)

This component should list the following navigation items:

- Why GitHub?
- Team
- Enterprise
- Explore
- Marketplace
- Pricing

### `SearchBar`

![Controls allowing visitors to search GitHub](../assets/react-components_problem-set-recreating-components_searchbar.png)

Components can be small! This component should include a text input field with the placeholder text "Search GitHub."

### `LoginControls`

![Controls allowing visitors to Sign In to GitHub or Sign Up for GitHub](../assets/react-components_problem-set-recreating-components_logincontrols.png)

This component should include these links:

- Sign in
- Sign up

### `HeroSection`

![The featured text section of the GitHub landing page, often referred to as a hero in design language](../assets/react-components_problem-set-recreating-components_herosection.png)

This component should include the following text:

- Where the world builds software 
- Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.

### `NewsletterForm`

![Controls allowing visitors to sign up for GitHub](../assets/react-components_problem-set-recreating-components_newsletterform.png)

This component should include:

- a text input field for an email address
- a button that says "Sign up for GitHub."

### `StatsBar`

![Assorted statistics about GitHub](../assets/react-components_problem-set-recreating-components_statsbar.png)

This component should include the following text:

- 65+ million Developers
- 3+ million Organizations
- 200+ million Repositories
- 72% Fortune 50

<br />

<details>
<summary>Here's an example solution for review after completing the problem set
</summary>

[Recreating Components Problem Set Solution](https://github.com/AdaAnswers/problem-set-recreating-components)

It's ok if this solution looks different than what you came up with. Consider discussing your approach with a classmate to see how others tackled this problem set.

The `main` solution branch focuses on the content of the components. It doesn't look like the GitHub landing page, but it does have the specified content split into the required components.

The [`solution-styled`](https://github.com/AdaAnswers/problem-set-recreating-components/tree/solution-styled) branch adds some styles to the components to make them look more like the GitHub landing page. It's not a perfect match, but it shows a possible approach to get something close to that site. Especially with styling, there are many ways to achieve the same look, so comparing with a classmate can be very interesting.

</details>
