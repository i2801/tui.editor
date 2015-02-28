
'use strict';

var MarkdownEditor = require('./markdownEditor');
var Layout = require('./layout');
var EventManager = require('./eventManager');
var CommandManager = require('./commandManager');


function NEditor(options) {
    this.options = options;

    this.eventManager = new EventManager();
    this.commandManager = new CommandManager();

    this.layout = new Layout(this, options);
    this.layout.init();

    rangy.init();

    this.editor = new MarkdownEditor(this);

}

NEditor.prototype.remove = function() {
    console.log('remove');
};

NEditor.prototype.hide = function() {
    console.log('hide');
};

NEditor.prototype.getMarkdown = function() {
    console.log('getMarkdown');
};

window.ne = window.ne || {};
window.ne.NEditor = NEditor;