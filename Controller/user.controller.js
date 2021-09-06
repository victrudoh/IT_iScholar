module.exports = {
    loginController: (req, res) => {
      res.render("login");
    },
    registerController: (req, res) => {
      res.render("register");
    },
    createController: (req, res)=> {
      res.redirect('/user/login');
    },
    verifyController: (req, res)=> {
      res.redirect('/');
    }
}