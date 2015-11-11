var compile = require('virtual-dom-handlebars/compile');

module.exports = function(content) {
    if (this.cacheable) {
        this.cacheable();
    }

    if (!this.emitFile) {
        throw new Error("emitFile is required from module system");
    }

    return "var h = require('virtual-dom/h');" +
        "Runtime = require('virtual-dom-handlebars');" +
        "module.exports.diff = require('virtual-dom/diff');" +
        "module.exports.patch = require('virtual-dom/patch');" +
        "module.exports.createElement = require('virtual-dom/create-element');" +
        "module.exports.render = " + compile(content) + ";" +
        "";
};
