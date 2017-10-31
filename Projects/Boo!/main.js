function sayBoo() {
  var Boo = new Audio("Boo.3gp");
  Boo.play();
}

$("#easy").on("click", sayBoo);