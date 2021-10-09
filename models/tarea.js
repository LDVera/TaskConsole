const {v4: uuidv4} = require('uuid')

class Tarea {
  id = ''
  descript = ''
  completadoEn = null

  constructor( descript ){

    this.id = uuidv4()
    this.descript = descript;

  }
}

module.exports = Tarea