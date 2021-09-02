// document.addEventListener('DOMContentLoaded', () => {
//
//   // Unix timestamp (in seconds) to count down to
//   var twoDaysFromNow = (timeToEnd.getTime() / 1000);
//
//   // Set up FlipDown
//   var flipdown = new FlipDown(twoDaysFromNow)
//
//     // Start the countdown
//     .start()
//
//     // Do something when the countdown ends
//     .ifEnded(() => {
//       console.log('The countdown has ended!');
//     });
//
//   // Toggle theme
//   // var interval = setInterval(() => {
//   //   let body = document.body;
//   //   body.classList.toggle('light-theme');
//   //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
//   //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
//   // }, 5000);
//
//   let body = document.body;
//   body.classList.toggle('light-theme');
//   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
//
//   const listRoto = document.getElementsByClassName("rotor-group");
//   if (listRoto.length > 0) {
//     listRoto[0].style.visibility = 'hidden';
//     listRoto[0].style.width = '0';
//   }
//
// });
let isRun = false;
const buttonSet = document.getElementById("input-set");

let flipdown = new FlipDown(new Date().getTime()/1000,
    {
      theme: "light"
    })
    .start();
const listRoto = document.getElementsByClassName("rotor-group");
if (listRoto.length > 0) {
  listRoto[0].style.visibility = 'hidden';
  listRoto[0].style.width = '0';
}

buttonSet.onclick = function () {
  const hourVal = document.getElementById("input-hour").value;
  const minuteVal = document.getElementById("input-minute").value;

  // Set the date we're counting down to
  const timeToEnd = new Date();

  timeToEnd.setHours(hourVal, minuteVal, 0, 0);

  var twoDaysFromNow = (timeToEnd.getTime() / 1000);

  // document.getElementById("flipdown").remove();

  flipdown = new FlipDown(twoDaysFromNow,
      {
        theme: "light"
      })
      .start()
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });


    const listRoto = document.getElementsByClassName("rotor-group");
    if (listRoto.length > 0) {
      listRoto[0].style.visibility = 'hidden';
      listRoto[0].style.width = '0';
    }
    if (listRoto.length > 4) {
      for (let i = 4; i < listRoto.length; i++) {
        console.log(listRoto[i]);
        listRoto[i].remove();
      }
    }
  isRun = true;
}
