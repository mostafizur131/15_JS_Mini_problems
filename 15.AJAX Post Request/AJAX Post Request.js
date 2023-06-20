/**
 * 15.AJAX Post Request:
a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".
b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.
 */

function ajaxPostRequest() {
  const url = "https://api.example.com/submit";
  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const configuration = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(url, configuration)
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
//ajaxPostRequest()
