var shape;
    const shapes = {
    circle: {
        name: "Circle", 
        valueLabel:"RADIUS",
        perimeterFormula: "2πr",
        areaFormula: "πr²",
        variable:"r",
        calculateArea: (radius) => Math.PI * radius * radius,
        calculatePerimeter: (radius) => 2 * Math.PI * radius
    },
    square: {
        name: "Square",
        valueLabel:"SIDE",
        perimeterFormula: "4*s",
        areaFormula: "s*s",
        variable:"s",
        calculateArea: (side) => side * side,
        calculatePerimeter: (side) => 4 * side
    },
    triangle: {
        name: "Triangle",
        valueLabel:"SIDE",
        perimeterFormula: "3*s",
        areaFormula: "0.433*s*s",
        variable:"s",
        calculateArea: (side) => (side * side) / 2,
        calculatePerimeter: (side) => 3 * side
    }
};
    function displayNext(shapeName) {
    shape = shapeName;
    document.getElementById("circle").childNodes[0].style.display="none";
    document.getElementById("square").childNodes[0].style.display="none";
    document.getElementById("triangle").childNodes[0].style.display="none";
    document.getElementById(shape).childNodes[0].style.display="inline-block";
    document.getElementById("nextbutton").setAttribute("style", "display: block");
}
function openCalculate() {
    calculateSection=document.getElementsByClassName("calculate")[0];
    let element = document.getElementsByClassName("shape")[0];
    element.setAttribute("style", "display: none");
    calculateSection.setAttribute("style", "display: flex");
    shape!='circle' ? shape=='square' ? statement="2.Enter Side" : statement="2.Enter Side (Base & Height)" : statement="2.Enter Radius";
     document.getElementById("container-value").innerHTML=statement;
}
function calculate(){
value = Number(document.getElementById("value").value);
if(value==0){
  window.alert("Enter a value");
  return;
}
 area = shapes[shape].calculateArea(value).toFixed(2);
 perimeter = shapes[shape].calculatePerimeter(value).toFixed(2);
document.getElementsByClassName("calculate")[0].setAttribute("style", "display: none");
document.getElementsByClassName("result")[0].setAttribute("style", "display: flex");
document.getElementById('resultShape').id = shape;
document.getElementById("shapeName").innerHTML = shapes[shape].name;
document.getElementById("content").innerHTML=shapes[shape].valueLabel;
document.getElementById("variable").innerHTML=shapes[shape].variable ;
document.getElementById("val").innerHTML=value +" cm";
document.getElementById("areaFormula").innerHTML = shapes[shape].areaFormula;
document.getElementById("perimeterFormula").innerHTML = shapes[shape].perimeterFormula;
document.getElementById("area").innerHTML = area + " sq cm";
document.getElementById("perimeter").innerHTML = perimeter+ " cm";
}