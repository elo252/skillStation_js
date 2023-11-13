//with try catch

// async function test3(){
//     try {
//         const response = await fetch(api);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// test3();

// function test1(){
//     const response = fetch(api);
//     const data = response;
//     console.log(data);
// }

// test1()



//fetch().then().then().....catch()

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//       .then((response) => {
//         if (!response.ok) {
//           reject("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


