const React = require('react'),
      ReactDOM = require('react-dom'),
      Actions = require('./actions.jsx'), 
      Constants = require('./constants.jsx');


var Item = React.createClass({

  getInitialState: function(){
    return { isEditing: false };
  },
  
  componentDidUpdate: function (prevProps, prevState) {
			if (!prevState.isEditing && this.state.isEditing) {
				var editor = ReactDOM.findDOMNode(this.refs.editor);
				editor.focus();
				editor.setSelectionRange(editor.value.length, editor.value.length); //Locate the cursor to the end.
			}
	},
    
  handleChangeChecked: function(event){
    var id = this.props.id;
    Actions.toggle_item(id);
  },
  
  handleRemoveClick: function(event){
    event.preventDefault();
    var id = this.props.id;
    Actions.remove_item(id);
  },
  
  handleDoubleClick: function(event){
    event.preventDefault();
    this.setState({ isEditing: true });
  },
  
  updateText: function(){
    var newValue = this.refs.editor.value.trim();
    if (newValue){
      Actions.edit_item(this.props.id, newValue);
    } else {
      Actions.remove_item(this.props.id);
    }
    this.finishEditing();
  },
  
   handleKeyDown: function(event) {
    if (event.keyCode === Constants.ENTER_KEY_CODE) {
      this.updateText();
    } else if (event.keyCode === Constants.ESCAPE_KEY_CODE){
      this.finishEditing();
    }
  },
  
  finishEditing: function(){
    this.refs.editor.value = '';
    this.setState( { isEditing: false } );
  },

  render: function() {
      var className = (this.props.checked ? 'completed' : '')
                    + (this.state.isEditing ? ' editing' : '');
      return (
        <li className={ className } >
          <div className="view">
            <input className="toggle" type="checkbox" 
                checked={ this.props.checked } 
                onChange={ this.handleChangeChecked } />
            <label onDoubleClick={ this.handleDoubleClick }>{ this.props.text }</label>
            <button className="destroy" onClick={ this.handleRemoveClick }></button>
          </div>
          { this.state.isEditing ? 
            <input ref='editor'
              className='edit'
              onBlur={ this.updateText }
              onKeyDown={ this.handleKeyDown }
              defaultValue={ this.props.text }
              autoFocus={ true }
            /> 
            : undefined }
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