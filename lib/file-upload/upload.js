const multer = require('multer');
const { createError } = require('../../errors/create-error');
const upload = multer({
  limits:{
  fileSize: 5 * 1024 * 1024
  },
  fileFilter: (_req,file,done)=>{
    console.log('file',file)
     const fileTypes = file.mimetype;
     console.log('filetypes',fileTypes)
     if(fileTypes === 'image/png' || fileTypes === 'image/jpeg' || fileTypes === 'image/jpg' || fileTypes === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileTypes==="text/plain" || fileTypes === "application/pdf"){
       done(null,true)
     }
     else{
       done(createError('invalid file type',404),false)
     }
  }
})

module.exports = upload

