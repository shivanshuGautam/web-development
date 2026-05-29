async function DoCalculation() {
  try {
    const API_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous";

    const response = await fetch(API_URL);

    const data = await response.json();

    testingData(data);
  } catch (e) {
    alert(e.message);
  } finally {
    console.log("Process Complete");
  }
}

function testingData(Data) {
  //   try {
  //     console.log(data);
  //   } catch (e) {
  //     throw e;
  //   }
  throw new Error("Something Happens");
}



<!-- examole1 -->
 try {
  // Code that may cause an error
  let result = nonExistentFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Always runs
  console.log("Execution finished.");
}


<!-- example2 -->
 function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error("Error:", err.message);
} finally {
  console.log("Division attempt completed.");
}