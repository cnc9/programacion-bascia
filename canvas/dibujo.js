var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

console.log(lienzo);
lienzo.beginPath ();
lienzo.strokeStyle = "violet";
lienzo.moveTo (50,10);
lienzo.lineTo (250,2) ;
lienzo.stroke ();
lienzo.closePath();

console.log(lienzo);
lienzo.beginPath ();
lienzo.strokeStyle = "red";
lienzo.moveTo (150,80);
lienzo.lineTo (70 ,290) ;
lienzo.stroke ();
lienzo.closePath();