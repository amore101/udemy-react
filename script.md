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
- pass functions with argument: props and bind
```
this.switchName.bind(this, 'MaoMao')
this.switchName('MaoMao')
```
- Click to change state
- Input to change state

### Two way binding
- pass function to child component, 
- call function in child component, (first bind)
- run function in parent component,
- change state in parent component,
- props in child component change with state in parent component,
- store/show the value of changed props. (second bind)

### Style (not finished)

### Tips
- try to use stateless components instead of stateful components






## Reaching out to the web (shown in another project)