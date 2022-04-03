
const treeUtils = require('../utils/tree');
var path        = require('path');
var fs          = require('fs');

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

async function childFile(req, res, next) {
  try {      
      
      let path = req.originalUrl.split("=")[1];
      path = decodeURIComponent(path);

      let pathIsValid = treeUtils.pathIsValid(path);
      if (!pathIsValid) { res.status(404).json({ error: 'not valid path' }) }

      
      fs.readFile(`./${path}`, function(err, data) {
        if(err) {
          res.status(404).json({ error: "Oops! Couldn't find that file." })
        } else {
          let content_type = treeUtils.getMimeType(path);
          res.setHeader('content-type', content_type);

          if (content_type.split('/')[0] == 'image') {
            let base64data = data.toString('base64');  
            res.status(200).send(base64data);
          } else {
            res.status(200).send(data);
          }
          
        }   
        res.end();
      }); 

  } catch (err) {
      console.error(`Errors`, err.message);
      next(err);
  }
}


module.exports = {
  getChildren,
  childFile
};