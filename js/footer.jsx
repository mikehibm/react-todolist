var React = require('react');
var Utils = require('./utils.jsx');

var Footer = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">{ this.props.countTodo } { Utils.pluralize(this.props.countTodo, 'item') } left</span>
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


