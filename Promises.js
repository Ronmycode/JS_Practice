//################################################
// Example one: Asking for a Uber ride
//################################################
// CREATE A PROMISE
const arrived = true;
const ride = new Promise((resolve, reject) => {
  if (arrived) {
    resolve("driver is here 🚗");
  } else {
    reject("Driver droped the ride!! 😢");
  }
});

// CONSUME THE PROMISE

ride
  .then((message) => {
    console.log("Phone notification! " + message);
  })
  .catch((error) => {
    console.log("Phone notification! " + error);
  });
