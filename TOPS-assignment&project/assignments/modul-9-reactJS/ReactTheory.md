## Question 1: What is React.js? How is it different from other JavaScript frameworks and libraries?

### Ans :

**React** :

- It is a JavaScript library created by FaceBook.
- Use for Building user interface, particularly for single page application.
- IT is component base and allows developers to create reusable UI component.
- React.js is faster as compare to JavaScript.
- React allows you to write HTML-like code in JavaScript, making it easier to design UIs directly in the logic.
- React create a virtual DOM in memory and reload a part that updated.

**Different from other JavaScript frameworks and libraries?**
React is a library not a full-fledged framework focused on building UI. Its flexibility, performance, and large ecosystem make it ideal for applications where you want complete control over how things work, unlike frameworks like Angular or Vue, which are more opinionated.

## Question 2: Explain the core principles of React such as the virtual DOM and component based architecture.

### Ans : **Core principle of React**

1. **Virtual DOM :** The Virtual DOM is a lightweight , in memory representation of the real DOM (Document Object Model). React uses this to optimize updates to the UI.
   **How it work**
   When the state or data of a React component changes React creates a new Virtual DOM tree.
   It compares this new Virtual DOM with the previous one using a process called reconciliation.
   React determines the minimal set of changes (called diffing) and updates only the affected parts of the real DOM.

2. **Component based Architecture :** React applications are built using components, which are reusable and self-contained pieces of UI.
   **How it work**
   Reusability: Components can be reused throughout the application, reducing redundancy.
   Encapsulation: Each component manages its own state and behavior, making the application modular.
   Hierarchical Structure: Components can be nested, creating a tree-like structure. For example, a "Header" component might contain a "Logo" and "Navigation" component.

## Question 3: What are the advantages of using React.js in web development?

### Ans :

React.js is a powerful library that has become one of the most popular tools for building modern, interactive, and scalable web applications. Its advantages make it a go-to choice for developers

1. Component-Based Architecture
2. Virtual DOM for High Performance
3. Declarative UI
4. Rich Ecosystem and Tooling
5. Easy Integration with Existing Projects
6. React Hooks
7. SEO-Friendliness
8. Strong Community and Ecosystem
9. JSX for Intuitive Development
10. Flexible and Scalable

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

# JSX (JavaScript XML)

## Question 1: What is JSX in React.js? Why is it used?

### Ans :

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write HTML-like code directly within JavaScript files. JSX is then transformed into React.createElement() calls, which React uses to create Virtual DOM elements.

**Why is it used**
Improved Readability and Developer Experience: Writing UI components in a syntax that closely resembles HTML makes the code easier to understand and maintain.

Combines UI and Logic: JSX allows developers to describe how the UI should look (HTML-like structure) and include dynamic logic (JavaScript expressions) in one place.

Component-Based Architecture: JSX makes it easier to define and compose React components, enabling better modularity.

Better Integration with Tools: JSX integrates seamlessly with tools like linters and debuggers, improving developer productivity.

**Advantages of JSX**
Readable and Intuitive: Familiar HTML-like syntax.
Dynamic Rendering: Supports embedding JavaScript expressions.
Error Prevention: Catch errors early during development.

## Question 2: How is JSX different from regular JavaScript? Can you write JavaScript insideJSX?

### Ans :

**JSX different from regular JavaScript**
JSX is not regular JavaScript it's a syntax extension that lets you write HTML-like code within JavaScript.

1. Syntax
   JSX Looks like HTML but is written within JavaScript & JavaScript is Pure JavaScript uses functions or objects to represent elements.
2. Transpilation
   JSX is not executable by browsers directly. Tools like Babel transpile it into regular JavaScript using React.createElement() calls.
3. HTML-Like Syntax
   JSX allows mixing of JavaScript and HTML-like elements, which regular JavaScript doesn't.

**Can You Write JavaScript Inside JSX**
Yes, we can write JavaScript expressions inside JSX by enclosing them in curly braces {}. This is one of JSX's most powerful features!

## Question 3: Discuss the importance of using curly braces {} in JSX expressions.

### Ans :

Without {}, JSX would not support dynamic or reactive content. Curly braces allow you to insert live data, making UIs interactive.
Curly braces are used to insert JavaScript variables or expressions into JSX. Without {}, JSX would treat everything as plain text.
Curly braces allow you to include conditional logic in JSX using expressions like ternary operators
You can invoke JavaScript functions and insert the returned value into JSX.
Curly braces enable rendering lists dynamically by using .map() to iterate over an array.
You can pass JavaScript objects to style components dynamically using curly braces.

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
