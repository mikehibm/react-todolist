var React = require('react');

var Main = React.createClass({
  render: function() {
    var itemLines = [];
    var items = this.props.items || [];
    itemLines = items.map(function(item){
      return (
        <li key={ item.id } className="completed" >
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{ item.text }</label>
            <button className="destroy"></button>
          </div>
        </li>
        );
    });
    console.log("length=" + itemLines.length, itemLines[0]);
  
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { itemLines }
        </ul>
      </section>
    );
  }
});

module.exports = Main;