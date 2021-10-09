const inquirer = require('inquirer')
const { validate } = require('uuid')
require('colors')

const menuOpts = [{
  type: 'list',
  name: 'option',
  message: '¿What do u wanna do?',
  choices: [
    {
      value: '1', 
      name: '1. Crear una tarea'
    },
    {
      value: '2',
      name: '2. listar tareas'
    },
    {
      value: '3', 
      name: '3. lsitar tareas completadas'
    },
    {
      value: '4', 
      name: '4. listar tareas pendientes'
    },
    {
      value: '5', 
      name: '5. completar tarea(s)'
    },
    {
      value: '6', 
      name: '6 .borrar tarea'
    },
    {
      value: '0', 
      name: '0. salir'
    },
  ]
}]

const inquirerMenu = async () => {

  // console.clear()
  console.log('======================='.green)
  console.log('Selecciona una opcion')
  console.log('=======================\n'.green)  

  const {option} = await inquirer.prompt(menuOpts)
  return option

}

const pauseOptions = [{
  type: 'input',
  name: 'description',
  message: `Presiona ${ 'Enter'.rainbow } para continuar`
}]

const pause = async () => {
  
  console.log('\n')
  await inquirer.prompt(pauseOptions)
  
}

const reacdInput = () => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.lenght === 0) {
          return 'Need a value!!!!!'
        }
        return true
      }
    }
  ]

  const {desc} = await inquirer.prompt(question)
  return desc

}

module.exports ={
  inquirerMenu,
  pause,
  reacdInput
} 