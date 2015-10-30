var React = require('react');
var Actions = require('./actions.jsx'); 

var Item = React.createClass({
  
  handleChangeChecked: function(event){
    //event.preventDefault();
    var id = this.props.id;
    Actions.toggle_item(id);
    console.log("Toggled: ", id);
  },
  
  handleRemoveClick: function(event){
    event.preventDefault();
    var id = this.props.id;
    Actions.remove_item(id);
    console.log("Item removed: ", id);
  },

  render: function() {
      var classNameForCompleted = this.props.checked ? "completed" : "";
      return (
        <li ref="itemLine" className={ classNameForCompleted } >
          <div className="view">
            <input className="toggle" type="checkbox" 
                checked={ this.props.checked } 
                onChange={ this.handleChangeChecked } />
            <label>{ this.props.text }</label>
            <button className="destroy" onClick={ this.handleRemoveClick }></button>
          </div>
        </li>
      );
  }
});

var Main = React.createClass({

  handleToggleAll: function(event){
    Actions.toggle_all();
  },

  render: function() {
    var itemLines = [];
    var items = this.props.items || [];
    
    itemLines = items.map(function(item){
      return (
        <Item key={ item.id } id={ item.id } text={ item.text} checked={ item.checked } />
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

module.exports = Main;