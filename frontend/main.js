//let url = "https://2d195695-12b1-42a7-93c3-724afe4273b7.mock.pstmn.io/user/all";

//fetch(url) // Make an API call and get the response
//  .then((response) => response.json()) //  convert the response into JS dict using JSON parser.
//  .then((response) => console.log(response));
// .then((response) => response.json()) //  convert the response into JS dict using JSON parser.
// .then((response) => console.log(response));

// a list of objects

// (response) => {                   //
//   response.forEach((element) => {       // iterate over the list of users and print the first_name on the console.
//     console.log(`Hello, ${element.first_name}! Welcome to Devtoolkit #2`);
//   });
// }

let url = "https://6245e150-9d6a-434e-aa41-06ed7830f372.mock.pstmn.io/user/all";

fetch(url)
  .then((response) => {
    return response.json(); // parses the response
  })
  .then((response) => {
    // console.log(response);  // print that information in console
    // iterate through the list and print only the names.
    for (i = 0; i < 2; i++) {
      console.log("Hello, " + response[i].first_name);
    }
  });
