// const myPromise = new Promise((resolve, reject) => {
//     const a = 1+1;
//     if(a===2){
//         resolve('Success');
//     }else {
//         reject('Failure');
//     }
// });
// myPromise
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     })
    
    // .then(message => console.log(message)) Naudos kai yra teisinga
    // .catch(error =>console.log(error)) Naudos kai yra neteisinga
//     const person = {
//         id: 1,
//         firstName: 'Jonas',
//         lastName:'Jonaitis',
//         keepPromise: true
//     }
// const myPromise = new Promise((resolve, reject) => {
//     if(person.keepPromise){
//         resolve('Success');
//     }else {
//         reject('Failure');
//     }
// });
// myPromise
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     })
    //Ecma6
    // const keepPromise = new Promise((resolve, reject) =>{
    //     person.keepPromise ? resolve('Success'): reject('Failure');
    // });
    // keepPromise
    //     .then(message => console.log(message))
    //     .catch(error => console.log(error))
// const cities = ['Vilnius', 'Kaunas', 'Alytus'];
// function isCityInLithuania (location) {
//     return new Promise((resolve, reject) => {
        // if(location === "Vilnius"){
        //     resolve(location);
        // } else if(location === 'Kaunas'){
        //     resolve(location);
        // } else if (location === 'Alytus') {
        //     resolve(location);
        // } else {
        //     reject('Tokio miesto nera')
        // 
        // cities.inluces(location) ? resolve(location): reject('Tokio miesto nera')
//         if(cities.includes(location)){
//             resolve(location)
//         } else {
//             reject('Tokio miesto nera')
//         }
//     });
// }
// isCityInLithuania('Vilnius')
//     .then(location => console.log(location))
//     .catch(error => console.log(error))

// const getUsers = new Promise((resolve, reject) => {
//     resolve('Users Data');
// });
// //const getUsers = Promise.resolve('Users Data')
// const getCities = new Promise((resolve, reject) => {
//     resolve('Cities Data');
// });
// //const getCities = Promise.resolve('Cities data')
// const getCountries = new Promise((resolve, reject) => {
//     resolve('Countries Data');
// });
// //const getCountries = Promise.resolve('Countries data')
// Promise.all([getUsers, getCities, getCountries]) // Ivyks kai uzsikraus visi
//     .then(data => console.log(data))
// Promise.race([getUsers, getCities, getCountries]) // Ivyks kai uzkraus bent viena
//     .then(data => console.log(data))

// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//     if(hasMeeting){
//         const details = {
//             location:'Slack',
//             time:12.30
//         }
//         resolve(details);
//     } else {
//         reject('Susitikimo nebus')
//     }
// });
// const addToCalendar = details => {
//     const calendar = `Susitikimas paskirtas ${details.time} valanda per ${details.location} programele`
//     return Promise.resolve(calendar)
//     // return new Promise((resolve, reject) => {
//     //     const calendar = `Susitikimas paskirtas ${details.time} valanda per ${details.location} programele`
//     //     resolve(calendar)
//     // })
// } 
// meeting
//     .then(addToCalendar)
//     .then(calendar => console.log(calendar))
//     .catch(error => console.log(error))

// async function myMeeting () {
//     const meetingDetails = await meeting;
//     const message = await addToCalendar(meetingDetails);
//     console.log(message)
// }
// myMeeting();
fetch('https://my-json-server.typicode.com/typicode/demo/db')
    .then(response => response.json())
    .then(data => {
        console.log(data.posts.filter(item => item.id !== 1))
    })