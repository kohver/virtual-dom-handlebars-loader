var compile = require('virtual-dom-handlebars/compile');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    if (!this.emitFile) {
        throw new Error("emitFile is required from module system");
    }
    return "var h = require('virtual-dom/h');" +
        "Runtime = require('virtual-dom-handlebars');" +
        "module.exports = " + compile(content);
};
