const React = require('react'), 
      Actions = require('./actions.jsx'), 
      Constants = require('./constants.jsx');

const TodoHeader = React.createClass({

  handleKeyDown: function (event) {
			if (event.keyCode !== Constants.ENTER_KEY_CODE) {
				return;
			}
			event.preventDefault();

			var val = event.target.value.trim();
			if (val) {
        Actions.addItem(val);
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

module.exports = TodoHeader;
