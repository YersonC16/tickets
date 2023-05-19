const {Schema, model} = require('mongoose')

const TicketDoc = new Schema({
    numerodeticket:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    problema:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    }
}, {
    timestamps: true
    })

module.exports = model('Ticket', TicketDoc)