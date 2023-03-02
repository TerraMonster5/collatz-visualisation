window.onload = function () {
    var start = new URLSearchParams(window.location.search).get("start"),
    current = Number(start),
    canvas = document.getElementById("graph"),
    canvasHeight = Number(canvas.style.height),
    ctx = canvas.getContext("2d"),
    i = 1;

    ctx.moveTo(canvasHeight,current);

    while (current != 1) {
        ctx.lineTo(canvasHeight-i, current);
        ctx.stroke();

        if (current % 2) {
            current *= 3;
            current += 1;
        }
        else {
            current = Number(current / 2);
        }

        console.log(current);

        i++;
    }
}