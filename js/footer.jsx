var React = require('react');

var Footer = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count"></span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
});

module.exports = Footer;


