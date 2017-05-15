var mongoose = require('mongoose');

var team = [

    {
        "img": "images/male.png",
        "name": "Ekin Vural",
        "role": "Projektleiter"
    },
    {
        "img": "images/female.png",
        "name": "Milica Milosavljevic",
        "role": "Stellvertreterin"
    },
    {
        "img": "images/male.png",
        "name": "Kajetan Powolny",
        "role": "Projektmitarbeiter"
    },
    {
        "img": "images/male.png",
        "name": "Mohamed Negm",
        "role": "Projektmitarbeiter"
    }
]



var userSchema = new mongoose.Schema({ about: String });
mongoose.model('Data', userSchema);


module.exports = {
    team
}