/*
 7.JS Common Events:
Implement a webpage with the following functionality:

a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
*/

function showCoordinates() {
  document.addEventListener("click", function (event) {
    let xCoordinate = event.clientX;
    let yCoordinate = event.clientY;
    window.alert(
      `X Coordinate : ${xCoordinate} and Y Coordinate : ${yCoordinate}`
    );
  });
}
//showCoordinates();

/*
b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
*/
function showPressedKeyCode(event) {
  const showCode = document.querySelector("#showKeyPressCode");
  let key = event.code;
  showCode.innerHTML = "You have pressed on " + key;
}

/*
c. When the user moves the mouse over an image, change the image source to another image of your choice.

 */

function changeImage() {
  const img = document.querySelector("#changeImg");
  img.addEventListener("mouseover", function () {
    img.src = "./img/img2.jpg";
  });
  img.addEventListener("mouseout", function () {
    img.src = "./img/img1.jpg";
  });
}

//changeImage();
