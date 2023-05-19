const asistentCtrl = {};

const ticket = require('../models/ticket')

asistentCtrl.renderAsistForm = (req, res) => {
    res.render('ticket/new-ticket')
};

asistentCtrl.createAsist = async (req, res) => {
    const {documento, problema, nombre} = req.body;
    // Generar la letra aleatoria en mayúscula
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
  // Generar los tres dígitos aleatorios
  const randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  
  // Generar el número de ticket aleatorio
  const numerodeticket = `${randomLetter}${randomDigits}`;
    const newasist = new ticket({ documento, problema, nombre, numerodeticket });
    await newasist.save(); 
    req.flash('success_msg', 'Ticket creado con exito')
    res.redirect('/tickets');
};
//metodo para obtener todas la asistencia
asistentCtrl.renderAsist = async (req, res) => {
    const jk = await ticket.find().lean();
    res.render('ticket/tickets', {jk});
}; 

//metodo para obtener todas la asistencia pero en json
asistentCtrl.renderAsistJson = async (req, res) => {
    const jk = await ticket.find().lean();
    res.json(jk);
}; 

//metodo para editar la asistencia
asistentCtrl.EditForm = async (req, res) => {
    const ps = await ticket.findById(req.params.id).lean()
    /* console.log(req.params.id) */
    res.render('ticket/edit-ticket', {ps})
};

//metodo para actualizar la asistencia
asistentCtrl.UpdateAsist = async (req, res) => {
    const {documento, problema, nombre} = req.body;
    await ticket.findByIdAndUpdate(req.params.id, { documento, problema, nombre});
    req.flash('success_msg', 'ticket actualizada con exito!')
    res.redirect('/tickets');
};

//metodo para eliminar la asistencia
asistentCtrl.DeleteAsist = async (req, res) => {
    await ticket.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'ticket eliminado con exito!')
    res.redirect('/tickets');
};
module.exports = asistentCtrl;