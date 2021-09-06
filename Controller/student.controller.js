const { Student } = require("../models");

module.exports = {
    studentController: async (req, res) => {
      const students = await Student.findAll();

      res.render("student_list", {students: students});
    },

    publishStudentController: async (req, res) => {
      const {name, department, phone, bio, email, password} = req.body;
      if(!name || !department || !phone || !bio || !email || !password){ //if no name or no department or no phone or no..., redirect to same page(dont submit)
        return res.redirect('/auth/register');
      }      
      const student = await Student.create({
          name,
          department,
          phone,
          bio,
          email,
          password
      });
      console.log(req.body);
      res.redirect('/students');
  },    
    

    viewStudentController: (req, res) => {
      res.render("view_student");
    },
}