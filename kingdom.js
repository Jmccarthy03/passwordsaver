function createKingdom() {
  const nameInput = document.getElementById("domname").value;
  document.getElementById("kname").innerHTML = nameInput;
  document.getElementById("domname").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("dname").style.display = "none";
}
