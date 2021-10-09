require('colors')

const showMenu = () => {

  return new Promise( resolve => {
    console.clear()
    console.log('======================='.green)
    console.log('Selecciona una opcion')
    console.log('=======================\n'.green)  

    console.log(`${'1.'.green} Crear una tarea`)
    console.log(`${'2.'.green} listar tareas`)
    console.log(`${'3.'.green} lsitar tareas completadas`)
    console.log(`${'4.'.green} listar tareas pendientes`)
    console.log(`${'5.'.green} completar tarea(s)`)
    console.log(`${'6.'.green} borrar tarea`)
    console.log(`${'0.'.green} salir\n`)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question('Seleccione una opcion: ', ( opt ) => {
      readline.close()
      resolve(opt)
    })
  })

  
}

const pause = () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readline.question(`Presione ${'Enter'.green} para continuar`, ( opt ) => {
      readline.close()
      resolve()
    })
  })
}

module.exports = {
  showMenu,
  pause
}