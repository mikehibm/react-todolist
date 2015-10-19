var React = require('react');

var Main = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list"></ul>
      </section>
    );
  }
});

module.exports = Main;