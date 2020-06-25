## Set up
- if you want to create a react app fast
`npm install create-react-app -g`
- script version impacts the structure of the project
`create-react-app react-compete-guide --script-version 1.1.5`
- clean the App.css and App.js


## React basics

### Functional components $ Class components
- state, .setState & useState (hooks)
- f: replace, c: merge to fix this in f, use multiple separated state slices

### state & props
- state
   - state is managed inside a component
   - state is used to change the component. Changes to state also trigger an UI update.
- props (value & function)
   - props.children refers to contents between tags
   - props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

### Events
- use functions in render
- pass functions as props
- transfer functions with argument: props and bind
```
this.switchName.bind(this, 'MaoMao')
this.switchName('MaoMao')
```

### Tips
- try to use stateless components instead of stateful components