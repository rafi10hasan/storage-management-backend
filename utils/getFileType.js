const path = require("path");


function getFileType(filename) {
  const ext = path.extname(filename).toLowerCase(); 
  switch (ext) {
    case ".docx":
    case ".txt":
      return "note"; 

    case ".pdf":
      return "pdf";

    case ".jpg":
    case ".jpeg":
    case ".png":
      return "image"; 

    default:
      return "folder"; 
  }
}

module.exports = getFileType;
