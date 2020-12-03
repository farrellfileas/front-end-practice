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
    var resm = res.message;
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
    if (ddd.selectedIndex != 0) {
      if (ddd[ddd.selectedIndex].hasAttribute("subvalue")) {
        res = await fetch("https://dog.ceo/api/breed/" + ddd.value + "/" + ddd[ddd.selectedIndex].getAttribute("subvalue") + "/images/random")
        .then(res => res.json());
      }
      else {
        res = await fetch("https://dog.ceo/api/breed/" + ddd.value + "/images/random")
        .then(res => res.json());
      }
    }
    let dogimage = qs("#dogimage");
    dogimage.src = res.message;
    let imageframe = qs("#seg5");
    imageframe.classList.remove("hidden");
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