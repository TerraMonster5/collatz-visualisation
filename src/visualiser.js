window.onload = function () {
    const canvas = document.getElementById("graph"),
    canvasHeight = Number(canvas.offsetHeight),
    ctx = canvas.getContext("2d"),
    start = new URLSearchParams(window.location.search).get("start");
    var current = Number(start),
    i = 10;

    ctx.beginPath();
    ctx.moveTo(0, canvasHeight-(current*10));

    console.log(current);

    while (current != 1) {
        if (current % 2) {
            current *= 3;
            current += 1;
        }
        else {
            current = Number(current / 2);
        }

        i+=10;

        console.log(current);
        ctx.lineTo(i, canvasHeight-(current*10));
        ctx.stroke();
    }
}