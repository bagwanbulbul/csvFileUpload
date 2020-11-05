const express = require("express");
const router = express.Router();
const csvController = require("../controllers/tutorial/csv.controller");
const upload = require("../middleweares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/tutorials", csvController.getTutorials);

  app.use("/api/csv", router);
};

router.get("/get_user_Details",(req,res)=>{
  var user_details = Select("first_name","last_name","job_title","email","age").from("information")
  user_details.then((data)=>{
    res.send(data)
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })

})

router.get("/count_job_title",(req,res)=>{
  var job_title = select("job_title").from("information")
  job_title.then((data)=>{
    var count = 0;
    for(var i of data){
      if(data[i]["job_tittle"] == data[i+1]["job_title"]){
        conunt = count+1
      }
    }
    res.send(count)
    console.log(count)
  })
  .catch((err)=>{
    console.log(err)
  })

})

module.exports = routes;