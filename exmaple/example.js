var template = require('./example.hbs');

// 2: Initialise the document
var count = 0; // We need some app data. Here we just store a count.

//var tree = render(count);
var tree = template.render({count: count})[0]; // We need an initial tree
var rootNode = template.createElement(tree); // Create an initial root DOM node ...
document.getElementById('root').appendChild(rootNode); // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function() {
    count += 1;

    //var newTree = render(count);
    var newTree = template.render({count: count})[0];
    var patches = template.diff(tree, newTree);
    rootNode = template.patch(rootNode, patches);
    tree = newTree;
}, 1000);
