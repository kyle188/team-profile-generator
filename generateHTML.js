// create the team
const generateHTML = team => {

  // create the manager html
  const generateManager = manager => {
      return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>
      `
  }

  // create the html for engineers
  const generateEngineer = engineer => {
      return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title">${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>
      `
  }

  // create the html for interns
  const generateIntern = intern => {
      return `
<div class="card employee-card">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title">${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>
      `
  }

  const html = [];

  html.push(team.filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  )
  html.push(team.filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team.filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  )
 
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body style="background-color:tan;">
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text" style="background-color:powderblue;">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${html}
            </div>
        </div>
    </main>
    
    </body>
    <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
    </html>
`
}


// export function to generate entire page
// module.exports = team => {

//   return `
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //   <meta charset="UTF-8" />
// //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
// //   <title>My Team</title>
// //   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
// //       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
// //   <link rel="stylesheet" href="style.css">
// //   <script src="https://kit.fontawesome.com/c502137733.js"></script>
// // </head>
// // <body>
// //   <div class="container-fluid">
// //       <div class="row">
// //           <div class="col-12 jumbotron mb-3 team-heading bg-danger">
// //               <h1 class="text-center text-white">My Team</h1>
// //           </div>
// //       </div>
// //   </div>
// //   <div class="container">
// //       <div class="row">
// //           <div class="row team-area col-12 d-flex justify-content-center">
// //               ${generateTeam(team)}
// //           </div>
// //       </div>
// //   </div>
// // </body>
// // </html>
// //   `;
// };


export default generateHTML








// // create Manager card
// const generateHTML = roster

// const generateManager = function (manager) {
//   return `
//   <div class="col-4 mt-4">
//       <div class="card h-100">
//           <div class="card-header">
//               <h3>${manager.name}</h3>
//               <h4>Manager</h4><i class="material-icons">content_paste</i>
//           </div>
//           <div class="card-body">
//               <p class="id">ID: ${manager.id}</p>
//               <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
//               <p class="office">Office Number: ${manager.officeNumber}</p>
//           </div>
//       </div>
//   </div>
//   `;
// }

// // create Engineer card
// const generateEngineer = function (engineer) {
//   return `
//   <div class="col-4 mt-4">
//       <div class="card h-100">
//           <div class="card-header">
//               <h3>${engineer.name}</h3>
//               <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
//           </div>
//           <div class="card-body">
//               <p class="id">ID: ${engineer.id}</p>
//               <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
//               <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
//           </div>
//       </div>
//   </div>
//   `
// }

// // create Intern card 
// const generateIntern = function (intern) {
//   return `
//   <div class="col-4 mt-4">
//       <div class="card h-100">
//           <div class="card-header">
//               <h3>${intern.name}</h3>
//               <h4>Intern</h4><i class="material-icons">assignment_ind</i>
//           </div>
//           <div class="card-body">
//               <p class="id">ID: ${intern.id}</p>
//               <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
//               <p class="school">School: ${intern.school}</p>
//           </div>
//   </div>
// </div>
//   `
// };

// // push array to page 
// generateHTML = (data) => {

//   // array for cards 
//   pageArray = []; 

//   for (let i = 0; i < data.length; i++) {
//       const employee = data[i];
//       const role = employee.getRole(); 


//       // call manager function
//       if (role === 'Manager') {
//           const managerCard = generateManager(employee);

//           pageArray.push(managerCard);
//       }

//       // call engineer function
//       if (role === 'Engineer') {
//           const engineerCard = generateEngineer(employee);

//           pageArray.push(engineerCard);
//       }

//       // call intern function 
//       if (role === 'Intern') {
//           const internCard = generateIntern(employee);

//           pageArray.push(internCard);
//       }
      
//   }

//   // joining strings 
//   const employeeCards = pageArray.join('')

//   // return to generated page
//   const generateTeam = generateTeamPage(employeeCards); 
//   return generateTeam;

// }

// // generate html page 
// const generateTeamPage = function (employeeCards) {   
// return`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <header>
//         <nav class="navbar" id="navbar">
//             <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
//         </nav>
//     </header>
//     <main>
//         <div class="container">
//             <div class="row justify-content-center" id="team-cards">
//                 <!--Team Cards-->
//                 ${employeeCards}
//             </div>
//         </div>
//     </main>
    
// </body>
// <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
// </html>
// `;
// }

// export to index
// export default generateHTML; 
























// const createManager = function (manager) {
//   return `
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${manager.name}</h5>
//     <p class="card-text">Position</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${manager.id}:</li>
//     <li class="list-group-item">${manager.email}:</li>
//     <li class="list-group-item">${manager.officeNumber}:</li>
//   </ul>
// </div>
// `}

// const createEngineer = function (engineer) {
//   return `
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${engineer.name}</h5>
//     <p class="card-text">Position</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${engineer.id}:</li>
//     <li class="list-group-item">${engineer.email}:</li>
//     <li class="list-group-item">${engineer.github}:</li>
//   </ul>
// </div>
// `}

// const createIntern = function (intern) {
//   return `
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${intern.name}</h5>
//     <p class="card-text">Position</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${intern.id}:</li>
//     <li class="list-group-item">${intern.email}:</li>
//     <li class="list-group-item">${intern.school}:</li>
//   </ul>
// </div>
// `}

// generateHTML = (data) => {
//   htmlArray = []
//   for(let i = 0; i < data.length; i++) {
//     const employee = data[i]
//     const role = employee.getRole()

//     if (role === 'Manager') {
//       const managerHtml = createManager(employee)
//       htmlArray.push(managerHtml)
//     }
//     if (role === 'Engineer') {
//       const engineerHtml = createEngineer(employee)
//       htmlArray.push(engineerHtml)
//     }
//     if (role === 'Intern') {
//       const internHtml = createIntern(employee)
//       htmlArray.push(internHtml)
//     }
//   }
//   const employeeHtml = htmlArray.join("")
//   const createTeam = createTeamHtml(employeeHtml) 
//   return createTeam
// }

// const createTeamHtml = function (employeeHtml) {

//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
//       <title>Profile Generator</title>
//     </head>
//     <body>
//         <header class="header">
//             <h1>My Team</h1>
//         </header>
//       <div class="container">
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
//               <h5 class="card-title">${employeeHtml}</h5>
//               <p class="card-text">Position</p>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">${id}:</li>
//               <li class="list-group-item">${email}:</li>
//               <li class="list-group-item">${officeNumber}:</li>
//             </ul>
//           </div>
//       </div>
//     </body>
//     </html>
//     `
// }

// export default generateHTML