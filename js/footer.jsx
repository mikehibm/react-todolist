var React = require('react');
var Utils = require('./utils.jsx');
var Actions = require('./actions.jsx'); 
var Constants = require('./constants.jsx');


var Footer = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  handleShowAll: function(){
    Actions.show_all();
  },
  
  handleShowActive: function(){
    Actions.show_active();
  },
  
  handleShowCompleted: function(){
    Actions.show_completed();
  },
  
  handleClearCompleted: function(){
    Actions.clear_completed();
  },
  
  render: function() {
    var selectedAll = this.props.itemFilter == Constants.ItemFilter.ALL ? "selected" : undefined;
    var selectedActive = this.props.itemFilter == Constants.ItemFilter.ACTIVE ? "selected" : undefined;
    var selectedCompleted = this.props.itemFilter == Constants.ItemFilter.COMPLETED ? "selected" : undefined;
    var clearCompletedButton = this.props.hasCompleted ? 
                                <button className="clear-completed" onClick={ this.handleClearCompleted }>Clear completed</button>
                                : undefined;
  
    return (
      <footer className="footer">
        <span className="todo-count">{ this.props.countTodo } { Utils.pluralize(this.props.countTodo, 'item') } left</span>
        <ul className="filters">
          <li>
            <a href="#/" className={ selectedAll } onClick={ this.handleShowAll }>All</a>
          </li>
          <li>
            <a href="#/active" className={ selectedActive } onClick={ this.handleShowActive }>Active</a>
          </li>
          <li>
            <a href="#/completed" className={ selectedCompleted } onClick={ this.handleShowCompleted }>Completed</a>
          </li>
        </ul>
        { clearCompletedButton }
      </footer>
    );
  }
});

module.exports = Footer;


