var React = require('react');
var ReactDOM = require('react-dom');

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
                itemFilter={ this.state.itemFilter } />
      </div>
    );
  },
  
  _onChange: function () {
    this.setState(Store.getState());
  }  
});

// app クラスを描画
ReactDOM.render(
  <App />,
  document.getElementsByClassName('todoapp')[0]
);

