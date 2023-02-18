//  Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
    const areaTriangle = getInputValue("triangle-base", "triangle-height", "triangle")
    console.log(areaTriangle);
    createNewElement("triangle-title", areaTriangle)
});

//  Rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    const areaRectangle = getInputValue("rectangle-weight", "rectangle-length", "rectangle")
    console.log(areaRectangle);
    createNewElement("rectangle-title", areaRectangle)
});

//  Parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const areaParallelogram = getInputValue("parallelogram-base", "parallelogram-height", "parallelogram")
    console.log(areaParallelogram);
    createNewElement("parallelogram-title", areaParallelogram)

});

//  Rhombus 
document.getElementById("btn-rhombus").addEventListener("click", function () {
    const areaRhombus = getInputValue("rhombus-d1", "rhombus-d2", "rhombus")
    console.log(areaRhombus);
    createNewElement("rhombus-title", areaRhombus)

});

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    const areaPentagon = getInputValue("pentagon-base", "pentagon-p", "pentagon")
    console.log(areaPentagon);
    createNewElement("pentagon-title", areaPentagon)

});

//  Ellipse 
document.getElementById("btn-ellipse").addEventListener("click", function () {
    const areaEllipse = getInputValue("ellipse-a", "ellipse-b", "ellipse")
    console.log(areaEllipse);
    createNewElement("ellipse-title", areaEllipse)
});
