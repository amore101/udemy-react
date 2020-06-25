// if you want to create a react app fast
`npm install create-react-app -g`
// script version impacts the structure of the project
`create-react-app react-compete-guide --script-version 1.1.5`
// clean the App.css and App.js

// create a functional component
// output dynamic contents
`I am {Math.floor(Math.random() * 30)} years old`

// transfer props
props.children refers to contents between tags
props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

// state is managed inside a component
state is used to change the component, well, state from within. Changes to state also trigger an UI update.

// handle events: use functions in render

// change state in function using setState
only change part of the state

// hooks can be used in functional components
useState is used to manage state

// difference between f & c in changing state
f - replace; c - merge
to fix this in f, use multiple separated state slices

// try to use stateless components instead of stateful components

// transfer functions with argument: props and bind