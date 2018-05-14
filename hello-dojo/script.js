const reactContainer = document.getElementById("react");

const render = () => {
  ReactDOM.render(
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello React "),
      React.createElement(
        "h2",
        null,
        "Things I need to do:"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Learn React"
        ),
        React.createElement(
          "li",
          null,
          "Climb Mt. Everest"
        ),
        React.createElement(
          "li",
          null,
          "Run a Marathon"
        ),
        React.createElement(
          "li",
          null,
          "Feed the dogs"
        ),
      ),
    ),
    reactContainer
  );
}
setInterval(render, 1000);