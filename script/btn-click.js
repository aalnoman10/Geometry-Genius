//  Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
    const areaTriangle = getInputValue("triangle-base", "triangle-height", "triangle")
    createNewElement("triangle-title", areaTriangle)
});

//  Rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    const areaRectangle = getInputValue("rectangle-weight", "rectangle-length", "rectangle")
    createNewElement("rectangle-title", areaRectangle)
});

//  Parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const areaParallelogram = getInputValue("parallelogram-base", "parallelogram-height", "parallelogram")
    createNewElement("parallelogram-title", areaParallelogram)

});

//  Rhombus 
document.getElementById("btn-rhombus").addEventListener("click", function () {
    const areaRhombus = getInputValue("rhombus-d1", "rhombus-d2", "rhombus")
    createNewElement("rhombus-title", areaRhombus)

});

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    const areaPentagon = getInputValue("pentagon-base", "pentagon-p", "pentagon")
    createNewElement("pentagon-title", areaPentagon)

});

//  Ellipse 
document.getElementById("btn-ellipse").addEventListener("click", function () {
    const areaEllipse = getInputValue("ellipse-a", "ellipse-b", "ellipse")
    createNewElement("ellipse-title", areaEllipse)
});

//  new window click button
document.getElementById("blog-page").addEventListener("click", function () {
    window.location = "https://visionary-axolotl-314c81.netlify.app/"
})