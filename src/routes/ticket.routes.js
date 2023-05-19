const { Router } = require('express')
const router = Router();

const { renderAsistForm, 
    createAsist, 
    renderAsist, 
    EditForm, 
    UpdateAsist, 
    DeleteAsist,
    renderAsistJson 
} = require('../controllers/ticket.controller')

const {isAuthenticated} = require ('../helpers/auth')

//new asistencia
router.get('/tickets/add', renderAsistForm)

router.post('/tickets/new-ticket',  createAsist)

//obtener toda la asistencia
router.get('/tickets',  renderAsist)

//obtener toda la asistencia pero en json
router.get('/tickets/json',  renderAsistJson)

//editar la asistencia
router.get('/tickets/edit/:id',  EditForm)

router.put('/tickets/edit/:id',  UpdateAsist)

//eliminar una asistencia 
router.delete('/tickets/delete/:id',  DeleteAsist)
module.exports = router;