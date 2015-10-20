
const EventEmitter = require('events').EventEmitter;

const Dispatcher = require('./dispatcher.jsx'),
      Constants = require('./constants.jsx'),
      Utils = require('./utils.jsx');

const CHANGE_EVENT = 'change';
const DBNAME = 'todo';

var items = [];

const Store = Object.assign(EventEmitter.prototype, {
    getItem: function (id) {
        return items.find(function(item){
            return item.id === id;
        });
    },
    
    addItem: function(text, checked){
        items.push({ id: Utils.uuid(), text: text, checked: checked });
        Store.emitChange();
    },

    editItem: function(id, text){
        var item = Store.getItem(id);
        if (item){
            item.text = text;
        }
        Store.emitChange();
    },

    removeItem: function(id){
        items = items.filter(function(item){
            return item.id !== id;
        });
        Store.emitChange();
    },

    toggleItem: function(id){
        var item = Store.getItem(id);
        if (item){
            item.checked = !item.checked;
        }
        Store.emitChange();
    },

    getState: function () {
        var list = items.map(function(item){
          return { id: item.id, text: item.text, checked: item.checked };
        });
        return { items: list };
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        Store.save();
    },
    
    save: function(){
        localStorage.setItem(DBNAME, JSON.stringify(items));
    },
    
    load: function(){
        var data = localStorage.getItem(DBNAME);
        if (data){
            data = JSON.parse(data);
        }
        items = data || [];
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case Constants.ADD_ITEM:
            Store.addItem(action.text, action.checked);
            break;

        case Constants.EDIT_ITEM:
            Store.editItem(action.id, action.text);
            break;

        case Constants.REMOVE_ITEM:
            Store.removeItem(action.id);
            break;

        case Constants.TOGGLE_ITEM:
            Store.toggleItem(action.id);
            break;

        default:
            // no op
    };
});

Store.load();

module.exports = Store;