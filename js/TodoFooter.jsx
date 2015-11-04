const React = require('react'),
      Utils = require('./utils.jsx'),
      Actions = require('./actions.jsx'), 
      Constants = require('./constants.jsx');


const TodoFooter = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  handleClearCompleted: function(){
    Actions.clearCompleted();
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
            <a href="#/" className={ selectedAll }>All</a>
          </li>
          <li>
            <a href="#/active" className={ selectedActive }>Active</a>
          </li>
          <li>
            <a href="#/completed" className={ selectedCompleted }>Completed</a>
          </li>
        </ul>
        { clearCompletedButton }
      </footer>
    );
  }
});

module.exports = TodoFooter;


