module.exports = {
    find(req, res, next){
        User.find()
        .then(data => {
            res.status(200).json(data);
        })
    },
    findOne(req, res, next){
        User.findOne(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
    },
    create(req, res, next){
        const {name, email} = req.body;
        User.create({name, email})
        .then((data => {
            res.status(201).json(data);
        }))
    }
}