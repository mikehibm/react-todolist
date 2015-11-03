var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('director').Router;

var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');
var Store = require('./store.jsx');
var Actions = require('./actions.jsx');

var App = React.createClass({
  getInitialState: function() {
    return Store.getState();
  },
  
  componentDidMount: function () {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return (
      <div>
        <Header />
		    <Main items={ this.state.items } 
              isAllChecked={ this.state.isAllChecked } />
        <Footer items={ this.state.items } 
                countTodo={ this.state.countTodo } 
                itemFilter={ this.state.itemFilter }
                hasCompleted={ this.state.hasCompleted } />
      </div>
    );
  },
  
  _onChange: function () {
    this.setState(Store.getState());
  }  
});


//Define routes.
var router = Router({
  '/': function(){ Actions.show_all(); },
  '/active': function(){ Actions.show_active(); },
  '/completed': function(){ Actions.show_completed(); }
})
.configure({
  'notfound': function(){ Actions.show_all(); },
  'html5history': false
})
.init();


ReactDOM.render(
  <App />,
  document.getElementsByClassName('todoapp')[0]
);

