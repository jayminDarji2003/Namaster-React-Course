const heading = React.createElement(
  "h1",
  {
    id: "title1",
    className: "title11",
  },
  "heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "title22",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    // hello: "helloWorld"  // it's called props
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root (root => id => container)
root.render(container);
