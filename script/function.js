function getInputValue(base, height, who) {
    const areaBase = document.getElementById(base);
    const areaHeight = document.getElementById(height);

    const areaBaseValue = parseFloat(areaBase.value);
    const areaHeightValue = parseFloat(areaHeight.value);

    if (who === "triangle" || who === "rhombus" || who === "pentagon") {
        const area = 0.5 * areaBaseValue * areaHeightValue;
        return area;
    } else if (who === "rectangle" || who === "parallelogram") {
        const area = areaBaseValue * areaHeightValue;
        return area;
    } else if (who === "ellipse") {
        const area = 3.1416 * areaBaseValue * areaHeightValue;
        return area;
    }
}

//  Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
    const areaTriangle = getInputValue("triangle-base", "triangle-height", "triangle")
    console.log(areaTriangle);
});

//  Rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    const areaRectangle = getInputValue("rectangle-weight", "rectangle-length", "rectangle")
    console.log(areaRectangle);
});

//  Parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const areaTriangle = getInputValue("parallelogram-base", "parallelogram-height", "parallelogram")
    console.log(areaTriangle);
});

//  Rhombus 
document.getElementById("btn-rhombus").addEventListener("click", function () {
    const areaTriangle = getInputValue("rhombus-d1", "rhombus-d2", "rhombus")
    console.log(areaTriangle);
});

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    const areaTriangle = getInputValue("pentagon-base", "pentagon-p", "pentagon")
    console.log(areaTriangle);
});

//  Ellipse 
document.getElementById("btn-ellipse").addEventListener("click", function () {
    const areaTriangle = getInputValue("ellipse-a", "ellipse-b", "ellipse")
    console.log(areaTriangle);
});
