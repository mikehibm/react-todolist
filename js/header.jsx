var React = require('react'); 
var Actions = require('./actions.jsx'); 
var ENTER_KEY = 13;

var Header = React.createClass({
  getInitialState: function() {
    return {};
  },
  
  handleKeyDown: function (event) {
			if (event.keyCode !== ENTER_KEY) {
				return;
			}
			event.preventDefault();

			var val = event.target.value.trim();
			if (val) {
        Actions.add_item(val);
        console.log("added " + val);
				event.target.value = '';
			}
	},
  
  render: function() { 
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" 
              placeholder="What needs to be done?" 
              autoFocus 
              onKeyDown={this.handleKeyDown} />
      </header>
    );
  }
});

module.exports = Header;
