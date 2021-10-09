const { inquirerMenu, pause, reacdInput} = require('./helpers/inquierer');
const Tarea = require('./models/tarea');

require('colors')
// const { showMenu, pause } = require('./helpers/mensajes');
const main = async() => {
  let opt = '';
  const tareas = new Tareas(); 

  do {
    opt = await inquirerMenu()
    // const tarea = new Tarea('Comprar cosas')
    
    switch (opt) {
      case '1':
        const description = await reacdInput('Description: ')
        break;
    
      case '2':
        break;
      case '3':
      break;
      case '4':
      break;
      case '5':
      break;
      case '6':
      break;
      default:
        break;
    }


    await pause()
    // if(opt !== '0') await pause()

  } while (opt !== '0');

}
main()