var db = require("../models");

// Routes
// =============================================================


module.exports = function (app) {

    // Create all our routes and set up logic within those routes where required.
    app.get("/", function (req, res) {
        db.burger.findAll({raw:true})
            .then(function (data) {
                // let burgerarray = [];
                // for (let index = 0; index < data.length; index++) {
                //     // console.log(data[index].dataValues);
                //     console.log("----------------");
                //     burgerarray.push(data[index].dataValues)
                // }
                // console.log(burgerarray)
                var hbsObject = {
                    burger: data
                };
                res.render("index", hbsObject);
            });
    });

    //route to insert a new burger...this route is working
    app.post("/api/burgers", function (req, res) {
        console.log(req.body)
        db.burger.create({
                burger_name: req.body.burger_name,
                devoured: req.body.devoured
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        // console.log(req.body.id)
        db.burger.update(
            {
                devoured: req.body.devoured
            },
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burgerdata) {
                console.log(burgerdata)
                res.json(burgerdata);
            });
    });

    app.delete("/api/burgers/:id", function (req, res) {

        db.burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (burgerdata) {
                res.json(burgerdata);
            });
    });

};