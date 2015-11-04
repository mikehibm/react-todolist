const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('director').Router,
      Store = require('./store.jsx'),
      Actions = require('./actions.jsx'),
      TodoHeader = require('./TodoHeader.jsx'),
      TodoItemList = require('./TodoItemList.jsx'),
      TodoFooter = require('./TodoFooter.jsx');

const App = React.createClass({
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
        <TodoHeader />
		    <TodoItemList items={ this.state.items } 
              isAllChecked={ this.state.isAllChecked } />
        <TodoFooter items={ this.state.items } 
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
  '/': function(){ Actions.showAll(); },
  '/active': function(){ Actions.showActive(); },
  '/completed': function(){ Actions.showCompleted(); }
})
.configure({
  'notfound': function(){ Actions.showAll(); },
  'html5history': false
})
.init();


ReactDOM.render(
  <App />,
  document.getElementsByClassName('todoapp')[0]
);

