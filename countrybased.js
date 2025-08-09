// let url4="http://universities.hipolabs.com/search?name="
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let country=document.querySelector("input").value;
//     console.log(country);
//     let arr=await getCollege(country);
//     show(arr);
// });
// function show(arr){
//     let list =document.querySelector("#list");
//     list.innerText="";
//     for(col of arr){
//         console.log(col.name)
//     let li=document.createElement("li");
//     li.innerText=col.name;
//     list.appendChild(li);
//     }
// }
// async function getCollege(country) {
//   try {
//     let res = await axios.get(url4 + country);
//     return res.data; // ✅ This lets `arr` receive the data
//   } catch (e) {
//     console.log("error", e);
//     return []; // optional: return empty array on error to avoid crash
//   }
// }

let url4 = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("#country").value.trim();
  let state = document.querySelector("#state").value.trim().toLowerCase();

  let arr = await getCollege(country);
  let filtered = arr.filter(col => col.name.toLowerCase().includes(state));
  show(filtered);
});

function show(arr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  if (arr.length === 0) {
    list.innerText = "No universities matched your state.";
    return;
  }
  for (let col of arr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getCollege(country) {
  try {
    let res = await axios.get(url4 + country);
    return res.data;
  } catch (e) {
    console.log("error", e);
    return [];
  }
}


