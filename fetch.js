
// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     // console.log(res); // Logs the raw response object
//     return res.json(); // Converts response to JSON
//   })
//   .then((data) => {
//     // You can log the actual fact here:
//     console.log("Cat Fact1:", data.fact);
//     return fetch(url);
//   })
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data2)=>{
//     console.log(`data2:${data2.fact}`);
//   })
//   .catch((err) => {
//     console.log("ERROR -", err); // Handles any fetch errors
//   });


//   api using await 


let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("Fact 1:", data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("Fact 2:", data2.fact);

    let res3 = await fetch(url);
    let data3 = await res3.json();
    console.log("Fact 3:", data3.fact);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
  console.log("hello");
}

// getFacts();

console.log("hello");