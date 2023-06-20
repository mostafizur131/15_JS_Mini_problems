/**
 * a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
 */

function ajaxGetRequest() {
  const url = "https://api.example.com/data";
  const configuration = { method: "GET" };

  fetch(url, configuration)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//ajaxGetRequest()
