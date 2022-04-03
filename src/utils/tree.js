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

const getMimeType = (path) => {
    let extension = path.split(".");
    let mimetype = extension[extension.length - 1]
    console.log(mimetype)
    switch (mimetype) {
        case 'js': return 'application/x-javascript'
        case 'json': return 'application/json'
        case 'html': return 'text/html'
        case 'doc': return 'application/msword'
        case 'pdf': return 'application/pdf'
        case 'jpeg': return 'image/jpeg'
        case 'jpg': return 'image/jpeg'
        case 'svg': return 'image/svg+xml'
        case 'tif': return 'image/tiff'
        case 'tiff': return 'image/tiff'
        case 'png': return 'image/png'
        case 'css': return 'text/css'
        case 'scss': return 'text/x-scss'
        case 'txt': return 'text/plain'
        case 'md': return 'text/markdown'
        default: return 'text/plain'
    }
}

module.exports = {
    pathIsValid,
    retrieveChildrens,
    getMimeType
}