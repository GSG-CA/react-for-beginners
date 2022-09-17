## JSX Exercises

### Part 1

For this assignment you will be creating three components:

1. `FirstComponent`, which is an `h1` with the text "My very first component."
2. `SecondComponent`, which is an `h2` with the text "My second component."
3. `NamedComponent`, which is a `p` that should accept a property of "name" and display the text "My name is " + name.

### Part 2

1. Define a `Tweet` component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.
2. Create an `App` component that renders at least three tweets.
3. Style your `Tweet` component!

### Part 3

Create a component called `Person`. Inside of this component, render a `p` tag which displays "Learn some information about this person". Each person should have name and age properties. 

If the person is over 21 years old, display an additional `h3` that says "You are authorize". Otherwise, display an `h3` that says "you must be 21". If the person's name is longer than 8 characters, only display the first six characters of their name.

Add a prop called hobbies to your `Person` component that accepts an array of hobbies (an array of strings).  Your Person component should list each one of these hobbies as an `li`. 

Finally, render at least three copies of the `Person` component on the page.

### Extra Challenge

Open up `src/App.js` in your editor. You should see the components we created above.
Create a new component called `Card`. It should take 3 props: `title`, `image` and `children`, that render into `h2`, `img` and `p` elements respectively.

Replace the `p` in the `App` component with a `Card`. Pass whatever you like as the 3 props (although here's an image URL you can use: `https://source.unsplash.com/400x300/?burger`).

<img width="489" alt="task example" src="https://user-images.githubusercontent.com/9408641/58386359-a0ebc880-7ff6-11e9-8214-48b9206aa711.png">

<details>
<summary>Hint</summary>

This is what your `App` should return:

```jsx
<Page>
  <Title>Hello world!</Title>
  <Card
    title="Tasty burger"
    image="https://source.unsplash.com/400x300/?burger"
  >
    That is a good burger
  </Card>
</Page>
```

</details>