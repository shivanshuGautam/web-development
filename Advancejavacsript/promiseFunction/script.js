 async function getData(value) {
  return new Promise((resolve, regected) => {
    setTimeout(() => {
      if (value === 3) {
        regected("Query Not Found");
      } else {
        console.log("Data Sent", value);
        resolve("Query Solved");
      }
    }, 2000);
  });
}

// promsicallback
// getData(1)
//   .then(() => getData(2))
//   .then(() => getData(3))
//   .then(() => getData(4))
//   .then(() => getData(5))
//   .catch((rej) => console.log(rej));


// Asynecallback

await getData(1)
await getData(2)
await getData(3)
await getData(4)
await getData(5)
await getData(6)
