document.querySelector("textarea").addEventListener("keyup", function () {
  const div = document.querySelector("#preview");

  if (this.value != "") {
    div.innerHTML = this.value;
  } else {
    div.innerHTML = "Start typing";
  }
})

function setWeight(value) {
  const div = document.querySelector("#preview");
  div.style.setProperty('font-weight', value);
}

function setWidth(value) {
  const div = document.querySelector("#preview");
  div.style.setProperty('font-variation-settings', "'wdth'" + value);
}

document.addEventListener("DOMContentLoaded", function () {
  setWeight();
  setWidth();
});