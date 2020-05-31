document.querySelector("textarea").addEventListener("keyup", function() {
  const div = document.querySelector("#preview");

  if (this.value != "") {
    div.innerHTML = this.value;
  } else {
    div.innerHTML = "League Mono";
  }
})

$(document).ready(function() {
  $("#weight").on("input", function() {
    $("#preview").css("font-weight", $(this).val());
  });

  $("#width").on("input", function() {
    $("#preview").css("font-variation-settings", "'wdth'" + $(this).val());
  });
});