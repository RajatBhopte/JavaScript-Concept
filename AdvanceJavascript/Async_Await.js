// we are learning async await in this file
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Rajat", LastName: "Bhopte" });
    }, 2000);
  });
}

async function getuserdata() {
  try {
    console.log("Fetching User Data ... ");
    const userdata = await fetchData();
    console.log("user data :", userdata);
  } catch (error) {
    console.log("Error fetching data");
  }
}

getuserdata();



