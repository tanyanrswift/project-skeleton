//this file is not required for a Resful API, because it is for static files such as images, html, etc, and this 
//will all be on our front end side in this type of application
//Keep for sanity/consistency

module.exports = {
    index(req, res, next){
        res.render("static/index", {title: "Welcome to My Application"});
    }
}