
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
    }
    
};

module.exports = Actions;