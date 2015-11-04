const React = require('react'),
      ReactDOM = require('react-dom'),
      Actions = require('./actions.jsx'), 
      Constants = require('./constants.jsx'),
      TodoItem = require('./TodoItem.jsx');

const TodoItemList = React.createClass({

  handleToggleAll: function(event){
    Actions.toggleAll();
  },

  render: function() {
    var itemLines = [];
    var items = this.props.items || [];
    
    itemLines = items.map(function(item){
      return (
        <TodoItem key={ item.id } id={ item.id } text={ item.text} checked={ item.checked } />
      );
    });
  
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"
            checked={ this.props.isAllChecked } 
            onChange={ this.handleToggleAll } />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { itemLines }
        </ul>
      </section>
    );
  }
});

module.exports = TodoItemList;