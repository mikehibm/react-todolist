
const Dispatcher = require('./dispatcher.jsx'),
      Constants = require('./constants.jsx');

const Actions = {
    add_item: function (text) {
        Dispatcher.dispatch({
            actionType: Constants.ADD_ITEM,
            text: text,
            checked: false
        });
    },
    
    edit_item: function(id, text){
        Dispatcher.dispatch({
            actionType: Constants.EDIT_ITEM,
            id: id,
            text: text
        });
    },
    
    remove_item: function (id) {
        Dispatcher.dispatch({
            actionType: Constants.REMOVE_ITEM,
            id: id
        });
    },
    
    toggle_item: function (id) {
        Dispatcher.dispatch({
            actionType: Constants.TOGGLE_ITEM,
            id: id
        });
    },
    
    toggle_all: function(){
        Dispatcher.dispatch({
            actionType: Constants.TOGGLE_ALL
        });
    },
    
    show_all: function(){
        Dispatcher.dispatch({
            actionType: Constants.SHOW_ALL
        });
    },
    
    show_active: function(){
        Dispatcher.dispatch({
            actionType: Constants.SHOW_ACTIVE
        });
    },
    
    show_completed: function(){
        Dispatcher.dispatch({
            actionType: Constants.SHOW_COMPLETED
        });
    },

    clear_completed: function(){
        Dispatcher.dispatch({
            actionType: Constants.CLEAR_COMPLETED
        });
    }
    
};

module.exports = Actions;