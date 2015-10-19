var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <Header />
		    <Main />
        <Footer />
      </div>
    );
  }
});

// app クラスを描画
ReactDOM.render(
  <App />,
  document.getElementsByClassName('todoapp')[0]
);

