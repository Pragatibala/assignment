# COMPONENT

## Question 1: What are components in React? Explain the difference between functional components and class components.

### Ans :

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components are in two types, Class components and Function components.

#### Difference between Class component & Function component

**Class component:**

- In class ES6 class based structure that extends React.component
- Use this.state and setState management.
- Slightly heavier because of (this) binding and more boilerplate

**Function component:**

- In function component we use simple js function.
- Use the useState and useReducer hooks for state management.
- Lightweight and more performant for pre-hooks and lack state

## Question 2: How do you pass data to a component using props?

### Ans:

Passing data to a component using props is one of the key concepts in react.

- Define Props in the parent component :
  When render a child component, pass the data as an attribute of the child component, these attributes are props (properties).
- Access Props in the child component:
  The child component receives the props object, which contain the data from the parent. You can access the specific values through this object.
  **Example**

```jsx
// Parent Component
function ParentComponent() {
  const message = "Hello everyone";
  return <ChildComponent greeting={message} />;
}

// Child Component
function ChildComponent(props) {
  return <h1>{props.greeting}</h1>;
}
```

## Question 3: What is the role of render() in class components?

### Ans:

React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX (JavaScript XML) code to the root component of our app.
**Example**

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.name}!</h1>
      </div>
    );
  }
}

export default Welcome;
```

# PROPS & STATE

## Question 1: What are props in React.js? How are props different from state?

### Ans:

In react props are properties to pass data from parent component to child component. Props allow components to be dynamic and reusable by enabling the parent component to supply data that the child component can access.
**difference in Props & State**

_Props_ :

- immutable can't change the values
- Passed down from parent to child
- Can only updated by parent

_State_ :

- mutable can change the values
- managed within the component itself
- Can be updated by component itself

## Question 2: Explain the concept of state in React and how it is used to manage component data.

### Ans:

In React, state is an essential concept used to manage the data that changes over time within a component. Unlike props (which are passed from parent to child components), state is local to the component and can be changed by that component itself.

- Initialization: State is initialized using the useState() hook in functional components or within the constructor in class components.
- Updating State: State is updated using the setState() for class components or the function returned by useState() in functional components.
- Re-rendering: When state is updated, React automatically re-renders the component, ensuring that the UI reflects the new state values.

## Question 3: Why is this.setState() used in class components, and how does it work?

### Ans:

In React, this.setState() is used in class components to update the component's state. It is a built-in method that allows you to modify the state and trigger a re-render of the component to reflect the updated state in the UI.

You call this.setState() with an object or function that contains the updated state values. React then merges the updated values with the existing state. After the state is updated, React triggers a re-render of the component. The updated state is used to re-render the component’s UI with the new data. React batches multiple this.setState() calls and processes them together, ensuring that the component is not unnecessarily re-rendered multiple times.
**Example**

```jsx
this.setState({ key: value });
```
