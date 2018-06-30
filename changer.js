(function () {

    let bodyEl = document.querySelector('body');

    let elements = [];

    let hexColour = "";

    let mix = (arr) => {

        if (arr.length == 0) {
            arr.push(Math.round(Math.random() * 255));
            arr.push(Math.round(Math.random() * 255));
            arr.push(Math.round(Math.random() * 255));

            return elements;
        }
    }

    let makeHexColour = (arr) => {
        let hex1 = arr[0].toString(16);
        let hex2 = arr[1].toString(16);
        let hex3 = arr[2].toString(16);
        hexColour = `#${hex1}${hex2}${hex3}`;
    }

    function changeColour() {
        bodyEl.style.backgroundColor = hexColour;
    }

    console.log(mix(elements));
    console.log(makeHexColour(elements));

    bodyEl.addEventListener('load', changeColour());

})();
