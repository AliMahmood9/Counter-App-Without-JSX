const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", null, `Counter: ${counter} `),
    React.createElement("button", { onClick: decrement }, "-"),
    React.createElement("button", { onClick: increment }, "+")
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
