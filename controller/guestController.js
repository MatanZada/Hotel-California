const Guest = require('../models/guest');
const axios = require('axios').default;

const insertGuest = (name, gender, dateOfBirth, isVip) => {
    return new Promise((resolve, reject) => {
        const guest = new Guest({
            name,
            gender,
            dateOfBirth,
            isVip
        })
        guest.save((err, guestData) => {
            guestData ? resolve(guestData) : reject(err)
        })
    })
}

const getAllGuest = () => {
    return new Promise((resolve, reject) => {
        Guest.find().then((guestData) => {
            guestData.forEach(function (guest) {
                guest.canDrink();
                guestData ? resolve(guestData) : reject(err)
            });
        })
    })
}


const getOneGuestById = (_id) => {
    return new Promise((resolve, reject) => {
        Guest.findOne(_id, (err, guestData) => {
            guestData ? resolve(guestData) : reject(err)
        });
    })
}

const updateGuestById = (_id, updateGuest) => {
    return new Promise((resolve, reject) => {
        Guest.findOneAndUpdate(_id, updateGuest, (err, guestData) => {
            err ? reject(err) : resolve(guestData);
        });
    })
}


const deleteOneGuestById = (_id) => {
    return new Promise((resolve, reject) => {
        Guest.deleteOne({}, {
            _id
        }, (err, guestData) => {
            err ? reject(err) : resolve(guestData);
        });
    })
}

const showMeAll = () => {
    return new Promise((resolve, reject) => {
        axios.get('/guest')
            .then((guestDate) => resolve(guestDate))
            .catch((err) => reject(err))
    })
}


module.exports = {
    insertGuest,
    getAllGuest,
    getOneGuestById,
    updateGuestById,
    deleteOneGuestById,
    showMeAll
}