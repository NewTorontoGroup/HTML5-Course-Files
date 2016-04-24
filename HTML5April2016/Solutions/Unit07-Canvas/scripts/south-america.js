window.addEventListener("load", drawPath, false);

function drawPath() {
  var canvas = document.getElementById("my-canvas");
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var backdrop = new Image();
    var flags = new Image();
    backdrop.src = 'Images/south-america.gif';
    flags.src = 'Images/flags.png';
    backdrop.onload = function () {
      context.drawImage(backdrop, 0, 0);
    }
    flags.onload = function () {
      context.drawImage(flags, 283, 88, 18, 13, 100, 250, 18, 13);
      context.fillText("Chile", 100, 250);
      context.drawImage(flags, 255, 4, 18, 13, 130, 300, 18, 13);
      context.fillText("Argentina", 130, 300);
      context.drawImage(flags, 171, 60, 18, 13, 200, 170, 18, 13);
      context.fillText("Brazil", 200, 170);
      context.drawImage(flags, 59, 452, 18, 13, 170, 250, 18, 13);
      context.fillText("Paraguay", 170, 250);
      context.drawImage(flags, 59, 564, 18, 13, 185, 310, 18, 13);
      context.fillText("Uruguay", 185, 310);
      context.drawImage(flags, 59, 200, 18, 13, 135, 210, 18, 13);
      context.fillText("Bolivia", 135, 210);
      context.drawImage(flags, 31, 424, 18, 13, 75, 170, 18, 13);
      context.fillText("Peru", 75, 170);
    }
  }
}