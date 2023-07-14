
const generateHTML = (pagename) => {
    return `<h1> PADHAI KARLE </h1>
            <h1> Padhai > ${pagename}</div>`;
};

const generatestyle = () => {
    return `<style>
            body{
              background-image: url("bg3.jpg");
              background-fit:cover;
              background-repeat:no-repeat;
              background-position: center;
            }
            h1{
              background-color: linearGradient(Blue,White);
              font-family: sans-serif;
              text-align: center;
              position: relative;
              float:none;
              margin-top: 100px;
            }`;
};

let accessCount = localStorage.getItem("exampleAccessCount");

if (!accessCount) {
  accessCount = 0;
}

accessCount++;

localStorage.setItem("exampleAccessCount", accessCount);

alert(`You opened this website these many times -> ${accessCount}`);


let intervalId = null;
const timerDuration = 1800 ; // Duration in seconds 
let remainingTime = timerDuration;


function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000); // Update every second
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function updateTimer() {
  remainingTime--;
  

  if (remainingTime === 0) {
    switch(window.location.hostname){
      case "www.reddit.com":
        document.head.innerHTML = generatestyle();
      document.body.innerHTML = generateHTML("REDDIT");
      break;
      case "www.instagram.com":
        document.head.innerHTML = generatestyle();
      document.body.innerHTML = generateHTML("INSTAGRAM");
      break;
      case "www.twitter.com":
        document.head.innerHTML = generatestyle();
      document.body.innerHTML = generateHTML("INSTAGRAM");
      break;
    };
    pauseTimer();
  }

}
startTimer();
alert("You have 30 mins!");





