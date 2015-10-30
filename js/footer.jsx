var React = require('react');
var Utils = require('./utils.jsx');
var Actions = require('./actions.jsx'); 

var Footer = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  handleShowAll: function(){
    console.log("handleShowAll");
    Actions.show_all();
  },
  
  handleShowActive: function(){
    console.log("handleShowActive");
    Actions.show_active();
  },
  
  handleShowCompleted: function(){
    console.log("handleShowCompleted");
    Actions.show_completed();
  },
  
  handleClearCompleted: function(){
    console.log("handleClearCompleted");
    Actions.clear_completed();
  },
  
  render: function() {
    return (
      <footer className="footer">
        <span className="todo-count">{ this.props.countTodo } { Utils.pluralize(this.props.countTodo, 'item') } left</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={ this.handleShowAll }>All</a>
          </li>
          <li>
            <a href="#/active" onClick={ this.handleShowActive }>Active</a>
          </li>
          <li>
            <a href="#/completed" onClick={ this.handleShowCompleted }>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={ this.handleClearCompleted }>Clear completed</button>
      </footer>
    );
  }
});

module.exports = Footer;


