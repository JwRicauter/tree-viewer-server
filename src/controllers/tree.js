
const treeUtils = require('../utils/tree');

async function getChildren(req, res, next) {
  try {
      let path = req.originalUrl.split("=")[1];
      path = decodeURIComponent(path);
      
      let pathIsValid = treeUtils.pathIsValid(path);
      if (!pathIsValid) { res.status(404).json({ error: 'not valid path' }) }
      
      res.status(200).json({'children': treeUtils.retrieveChildrens(path)});

  } catch (err) {
      console.error(`Errors`, err.message);
      next(err);
  }
}


module.exports = {
  getChildren
};