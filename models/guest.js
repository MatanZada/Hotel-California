const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "The filed name is a required filed!"
    },
    gender: {
        type: String,
        required: "The filed gender is a required filed!"
    },
    dateOfBirth: {
        type: Date,
        required: "The filed dateOfBirth is a required filed!"
    },
    isVip: {
        type: Boolean,
        required: "The filed isVip is a required filed!"
    },
}, {
    timestamps: true
})

guestSchema.methods.canDrink = function canDrink() {
    let Xmas = new Date();
    let year = Xmas.getYear()

    let myDate = this.dateOfBirth;
    let myYear = myDate.getYear();

    if (year - 18 > myYear) {
        return this._doc.canDrink = true
    } else {
        return this._doc.canDrink = false
    }
}
module.exports = mongoose.model('Guest', guestSchema);