"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    populateDogbreed();
    setEventListeners();
  }

  function setEventListeners() {
    let subButton = qs("#submitButton");
    subButton.addEventListener("click", submit);
  }

  async function populateDogbreed() {
    let res = await fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json());
    let dogDropdown = qs(".dogDropdown");
    console.log(res);
    var resm = res.message;
    console.log(resm);
    for (var x in resm) {
      let xName = x.charAt(0).toUpperCase() + x.slice(1)
      if (resm[x].length == 0) {
        let opt = document.createElement("option");
        opt.setAttribute("value", x);
        opt.innerHTML = xName;
        dogDropdown.appendChild(opt);
      }
      else {
        for (let j = 0; j < resm[x].length; j++) {
          let jName = resm[x][j].charAt(0).toUpperCase() + resm[x][j].slice(1);
          let opt = document.createElement("option");
          opt.setAttribute("value", x);
          opt.setAttribute("subvalue", resm[x][j]);
          opt.innerHTML = jName + " " + xName;
          dogDropdown.appendChild(opt);
        }
      }
    }
  }

  async function submit() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json());

    let ddd = qs(".dogDropdown");
    console.log(ddd.selectedIndex);
    if (ddd.selectedIndex != 0) {
      if (ddd[ddd.selectedIndex].hasAttribute("subvalue")) {
        console.log("has subvalue");
        console.log(ddd.subvalue);
        res = await fetch("https://dog.ceo/api/breed/" + ddd.value + "/" + ddd.subvalue + "/images/random")
        .then(res => res.json());
      }
      else {
        console.log("does not have subValue");
        res = await fetch("https://dog.ceo/api/breed/" + ddd.value + "/images/random")
        .then(res => res.json());
      }
    }
    
    console.log(res);
    let dogimage = qs("#dogimage");
    dogimage.src = res.message;
  }

  function findSelected() {
    
  }

  function qs(selector) {
		return document.querySelector(selector);
	}

	function qsa(selector) {
		return document.querySelectorAll(selector);
	}

	function id(selector) {
		return document.getElementById(selector);
	}
})();