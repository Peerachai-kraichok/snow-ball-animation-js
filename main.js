(() => {
   function setup() {
    const canvas = document.getElementById('snow-ball-canvas');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    return {
        canvas,
        canvasContext: canvas.getContext('2d'),
        numberOfSnowBalls: 250
    }
   }

   function createBall(canvas, canvasContext, x, y, radius, speedX, speedY) {
    var ball = {
        x: x || 20,
        y: y || 20,
        radius: radius || 20,
        speedX: speedX || 2,
        speedY: speedY || 4
    };

    function start() {
        setInterval(function() {
            update(canvas, ball);
            render(canvasContext, ball);
        }, 1000/60);
    }

    function update(canvas, ball) {
        canvas.width = canvas.width;

        ball.x += ball.speedX;
        ball.y += ball.speedY;
    }

    function render(canvasContext, ball) {
        canvasContext.fillStyle = '#2634dd';
        canvasContext.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        canvasContext.fill();
    }

    start();
   }
   
   function createRectangle(canvas , context, x = 10, y = 10, width = 10, height = 10, bgColor = 'black', strokeColor = 'black') {
    function render() {
        context.fillRect(x, y, width, height);
        context.fillStyle = bgColor;
        context.strokeColor = strokeColor;
    }

    render();
   }

   function createLine(canvas, context, startX = 0, startY = 0, endX = 0, endY = 0, strokeColor = 'red') { 
    function render() {
        context.beginPath();
        context.moveTo(startX, endX);
        context.lineTo(startY, endY);
        context.strokeStyle = strokeColor;
        context.stroke();
        context.closePath();
    }

    render();
   }

   function run() {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(10, 10, 100, 100);

    // canvasContext.strokeStyle = 'red';
    // canvasContext.strokeRect(110, 110, 200, 200);

    // canvasContext.clearRect(35, 35, 50, 50);

    // canvasContext.beginPath();
    // canvasContext.moveTo(100, 10); // x axis
    // canvasContext.lineTo(10, 100); // y axis
    // canvasContext.strokeStyle = 'black';
    // canvasContext.stroke();
    // canvasContext.closePath();

    // canvasContext.beginPath();
    
    // canvasContext.fillStyle = 'red';
    // canvasContext.arc(150, 150, 20, 0, 360);
    // canvasContext.stroke();
    // canvasContext.fill();
    // canvasContext.closePath();

    // canvasContext.beginPath();
    // canvasContext.strokeStyle = '#dd0343';
    // canvasContext.lineWidth = 10;
    // canvasContext.lineCap = 'round';
    // canvasContext.moveTo(10, 50);
    // canvasContext.lineTo(100, 60);
    // canvasContext.stroke();

    // canvasContext.beginPath();
    // canvasContext.strokeStyle = '#06f3d2';
    // canvasContext.lineWidth = 10;
    // canvasContext.lineCap = 'butt';
    // canvasContext.moveTo(150, 50);
    // canvasContext.lineTo(150, 200);
    // canvasContext.stroke();

    // canvasContext.beginPath();
    // canvasContext.font = '50px Open Sans sans-serif';
    // canvasContext.fillStyle = '#f36';
    // canvasContext.lineWidth = 2;
    // canvasContext.strokeText('huisuke', 400, 400)
    // // canvasContext.textAlign = 'center'
    // canvasContext.fillText('Hello HTML5 Canvas', 50, 50);


    // setInterval(() => {
        // createBall(canvas, canvasContext);
    createRectangle(canvas, canvasContext);
    createLine(canvas, canvasContext, 0, 0, 10, 50);
    // },1000)
    
    }
   

   run();
})();