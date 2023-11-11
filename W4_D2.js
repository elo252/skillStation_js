
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


