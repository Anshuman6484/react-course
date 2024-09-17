// Create react element or component
// This is how React views components under the hood

const reactElement = {
  type: 'a', // type of element like 'a', 'div', 'nav', etc.
  props: {
    // properties of elements or attributes. This is an object
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit google', // innerHTML
}

// Fetch the root or container where we inject our components
const root = document.getElementById('root')

// customRender function
function customRender(element, container) {
  const domElement = document.createElement(element.type) // create DOM element
  domElement.innerHTML = element.children // set innerHTML
  for (const key in element.props) {
    domElement.setAttribute(key, element.props[key]) // set all attributes or properties
  }
  container.appendChild(domElement)
}

// Render the component
// Create a function that accepts two parameters: first is the element to inject, and second is where to inject this component
customRender(reactElement, root)
