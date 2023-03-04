window.onload = function () {
    const canvas = document.getElementById("graph"),
    ctx = canvas.getContext("2d"),
    start = new URLSearchParams(window.location.search).get("start");

    var current = Number(start),
    canvasHeight = Number(canvas.getAttribute("height")),
    i = 10;

    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(0, canvasHeight-current);

    console.log(current);

    while (current != 1) {
        if (current % 2) {
            current *= 3;
            current += 1;
        } else {
            current = Number(current / 2);
        }

        while (true) {
            console.log(canvasHeight+" "+current);
            if (canvasHeight-current < 0) {
                canvas.setAttribute("height", String(canvasHeight+100));
                canvasHeight = Number(canvas.getAttribute("height"));
            } else {
                break;
            }
        }

        i+=10;
        
        console.log(current);
        console.log(canvasHeight);
        ctx.lineTo(i, canvasHeight-current);
        ctx.stroke();
    }
}