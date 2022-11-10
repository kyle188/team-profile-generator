import inquirer from 'inquirer'
import fs from 'fs'
import generateHTML from './generateHTML.js'
import Manager from './lib/Manager.js'
import Engineer from './lib/Engineer.js'
import Intern from './lib/Intern.js'
import path from 'path'
const rosterArray = []


const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter team manager's name.",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter team manager's employee ID",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter team manager's email address",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter team manager's office number",
      name: "officeNumber"
    }
  ])

    .then(answers => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber)
      rosterArray.push(manager)
      console.log(manager)
      addMember()
    })
}

const addMember = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Please select a new employee role, or finish building team if complete",
      name: "role",
      choices: [
        "add engineer",
        "add intern",
        "finished building"]
    }
  ])
    .then(userChoice => {
      switch (userChoice.role) {
        case "add engineer":
          addEngineer()
          break
        case "add intern":
          addIntern()
          break
        default:
          createRoster()
      }
    })
  // .then(listChoice => {
  //     if (listChoice.role === "add engineer") {
  //       addEngineer()
  //     }
  //     if (listChoice.role === "add intern") {
  //       addIntern()
  //     } else {
  //       createRoster()
  //     }
  // })
}

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter name of new engineer",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter ID of new engineer",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter email address of new engineer's",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter new engineer's GitHub username",
      name: "github"
    }
  ])
    .then(answers => {
      console.log(answers)
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github)
      rosterArray.push(engineer)
      addMember()
    })
}

const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter name of new intern",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter ID of new intern",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter email address of new intern's",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter new intern's school",
      name: "school"
    }
  ])
    .then(answers => {
      console.log(answers)
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school);
      rosterArray.push(intern)
      addMember()
    })
}

const createRoster = () => {
  console.log("Roster Created!")
  fs.writeFile("./dist/profile.html", generateHTML(rosterArray), (error) => {
    if (error) {
      console.log(error)
      return
    } else {
      console.log("File Saved")
    }
  })
}
addManager()