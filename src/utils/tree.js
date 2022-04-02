const dirTree = require("directory-tree");

const pathIsValid = (path) => {
    const tree = dirTree(path);
    if (tree) return true; 
    else return false;
}

const retrieveChildrens = (path) => {
    const tree = dirTree(path);
    array = [];
    tree.children.map( item => {
        array.push({
            'path': item.path,
            'name': item.name,
            'children': 'children' in item
        })
    })

    return array
}

module.exports = {
    pathIsValid,
    retrieveChildrens
}