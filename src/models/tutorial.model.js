module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("information", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      job_title:{
        type:Sequelize.STRING
      }
    });

   


  
    return Tutorial;
  };