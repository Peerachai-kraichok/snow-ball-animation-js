(() => {
    function generateRandom(min, max) {
        return Math.floor((Math.random() * (max - min +1)) + min);
    }

    function setup() {
        const canvas = document.getElementById("snow-ball-canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext('2d');
        const numberOfBalls = 25;

        const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'pink'];

        return {
            canvas,
            context,
            numberOfBalls,
            colors
        };
    }
    
    function createBalls(canvas, numberOfBalls, colors) {
        const balls = [...Array(numberOfBalls)].map((ball) => {
            return {
                x: generateRandom(10, canvas.width),
                y: generateRandom(10, canvas.height),
                radius: generateRandom(2, 10),
                speedX: generateRandom(-5, 5),
                speedY: generateRandom(-5, 5),
                color: colors[generateRandom(0, colors.length - 1)]
            }
        })

        return balls;
    }

    function createBall(canvas, colors) {
        return {
            x :generateRandom(0, canvas.width),
            y :generateRandom(0, canvas.height),
            radius :generateRandom(2, 10),
            speedX: generateRandom(-5, 5),
            speedY: generateRandom(-2, 5),
            color: colors[generateRandom(0, colors.length - 1)]
        }
    }

    function createManyBall(canvas, numberOfBalls = 1, colors = ['white']) {
        return [...Array(numberOfBalls)].map(ball => createBall(canvas, colors));
    }

    function createDrawBall(context) { 
        return ball => {
            context.beginPath();
            context.fillStyle = ball.color;
            context.arc(ball.x, ball.y, ball.radius, 0, 360);
            context.fill();
            context.closePath();
        }
    }

    function updateDrawBall(canvas) {
        return ball => {
            ball.x += ball.speedX;
            ball.y += ball.speedY;

            if (ball.x < 0 ) ball.x = canvas.width;
            if (ball.x > canvas.width) ball.x = 0;
            if (ball.y < 0) ball.y = canvas.height;
            if (ball.y > canvas.height) ball.y = 0;
        }
    }

    function run() {
        const { canvas, context, numberOfBalls, colors } = setup();

        // @Version_1
        // Create Balls.
        const balls = createManyBall(canvas, numberOfBalls, colors);
        // Create draw balls.
        const drawBall = createDrawBall(context);
        // Update draw balls.
        const movedBall = updateDrawBall(canvas);
        
        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(drawBall);
            balls.forEach(movedBall);
        }, 50);

        //// @Version_2
        // const balls = createBalls(canvas, numberOfBalls, colors);

        // setInterval(() => {
        //     balls.forEach(ball => {
        //         context.beginPath();
        //         context.fillStyle = ball.color;
        //         context.arc(ball.x, ball.y, ball.radius, 0, 360);
        //         context.fill();
        //         context.closePath();
        //     })

        //     balls.forEach(ball => {
        //         ball.x += ball.speedX;
        //         ball.y += ball.speedY;
        
        //         if (ball.x < 0 ) ball.x = canvas.width;
        //         if (ball.x > canvas.width) ball.x = 0;
        //         if (ball.y < 0) ball.y = canvas.height;
        //         if (ball.y > canvas.height) ball.y = 0;
        //     })
        // }, 50);
    }

    run();
})();