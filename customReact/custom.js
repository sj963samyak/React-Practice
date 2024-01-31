const mainContainer = document.querySelector("#root");
const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "click here to vsist google",
};
function customRender(reactElement, mainContainer) {
  let domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("target", reactElement.props.target);
  domElement.setAttribute("href", reactElement.props.href);
  mainContainer.appendChild(domElement);

  //   second method now create it using the loop
  let domElement2 = document.createElement(reactElement.type);
  domElement2.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement2.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement2);
}
customRender(reactElement, mainContainer);
