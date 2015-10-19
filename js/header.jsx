var React = require('react');

var Header = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autofocus />
      </header>
    );
  }
});

module.exports = Header;
