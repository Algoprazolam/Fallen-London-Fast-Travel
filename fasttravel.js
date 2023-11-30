console.log("hallo");


function findroot() {
  console.log("starting findroot function");
  let getroot = document.getElementById("root");
getroot.style.color = "red";
console.log(getroot);
console.log("findroot function ended");
};


console.log("calling the findroot function");
findroot();
 






setTimeout(() => {
  console.log("calling changetext function")
  changeText()
}, "1000");

  
  function changeText() {
    console.log("starting changetext function");
    const travelbutton = window.parent.document.querySelector(".travel-button--infobar");
    console.log(travelbutton);
    travelbutton.innerText = "Miauw";
    console.log("changetext function ended ");
  };
  
  

//window.addEventListener('DOMContentLoaded', onLoad)
//const onLoad = () => {}


console.log("done");






// changeText();

// function changeText() {
//   travelbutton.innerHTML = "found";
// };
