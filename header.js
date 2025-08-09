const url1 = "https://icanhazdadjoke.com/";

async function getjoke() {
  try {
    const header = { headers: { Accept: "application/json" } }; // ✅ corrected key
    let res = await axios.get(url1, header);
    console.log(res.data);
  } catch (e) {
    console.log("joke not found");
  }
}
