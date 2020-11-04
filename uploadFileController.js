// var fs = require("fs");
// module.exports.uploadCsv = function(req, res) {
//             var today = new Date();
//             var date = today.getDate();
//             var tempPath = req.files.file.path,
//             targetPath = path.resolve('./uploads/'+req.files.file.originalFilename);
//             if (path.extname(req.files.file.name).toLowerCase() === '.csv') {
//                  fs.rename(tempPath, './uploads/csv_1', function(err) {
//                         if (err) throw err;
//                         console.log("Upload completed!");
//             });
// };

var fs = require("fs");
module.exports.uploadCsv = function(req, res){
    var today = new Date();
    var date = today.getDate();
    var tempPath = req.files.file.path,
    targetPath = path.resolve("./uploads/"+req.files.file.originalFilename);
    if(path.extname(req.files.file.name).toLowerCase() === '.csv'){
        fs.rename(tempPath, './uploads/csv_1', function(err){
            if(err) throw err;
            console.log("upload completed")
        });
    }

}

