function fill(subject, label, num) {
  var elem = document.getElementById(subject);
  var label = document.getElementById(label);
  var id = setInterval(frame, 35, label, num);
  var Cwidth = 6;
// console.log(element, label, Twidth);
function frame (label, Twidth) {
  if (Cwidth >= Twidth) {
  clearInterval(id);
  }
  else {
  Cwidth++;
  elem.style.width = Cwidth + '%';
  label.innerHTML = Cwidth  + '%';
  }
}
}
// Cwidth = Current_Width
// Twidth = Targetted_Width
