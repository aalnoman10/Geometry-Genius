// get value and return area each card
function getInputValue(base, height, who) {
    const areaBase = document.getElementById(base);
    const areaHeight = document.getElementById(height);

    const areaBaseValue = parseFloat(areaBase.value);
    const areaHeightValue = parseFloat(areaHeight.value);

    const areaBaseValueString = areaBase.value + '';
    const areaHeightValueString = areaHeight.value + '';

    areaBase.value = '';
    areaHeight.value = '';

    if (areaBaseValue <= 0 || areaHeightValue <= 0 || areaBaseValueString === '' || areaHeightValueString === '') {
        alert("enter any valid digit");
    } else if (who === "triangle" || who === "rhombus" || who === "pentagon") {
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

// add item order list with click button
function createNewElement(areaTitle, areaValue) {
    const areaTitleName = document.getElementById(areaTitle).innerText;
    const listContainer = document.getElementById("list-container");

    if (areaValue != undefined) {
        listContainer.innerHTML = listContainer.innerHTML + `
    <li>
        <div class="item">
            <p>`+ areaTitleName + `</p>
            <p>`+ areaValue + `cm<sup>2</sup></p>
            <p><button class="btn btn-primary">Convert to m<sup>2</sup></button></p>
        </div>
    </li>
     `
    }
}