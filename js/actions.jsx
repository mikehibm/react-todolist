
const Dispatcher = require('./dispatcher.jsx'),
      Constants = require('./constants.jsx');

const Actions = {
    add_item: function (text) {
        Dispatcher.dispatch({
            actionType: Constants.ADD_ITEM,
            text: text,
            checked: false
        });
    }
};

module.exports = Actions;