const Tarea = require("./tarea")

class Tareas{

  _listado = {}

  constructor() {
    this._listado = {}
  }

  crearTarea (descript = ''){
    const tarea = new Tarea(descript)
    this._listado[tarea.id] = tarea
  }
}

module.exports = Tareas