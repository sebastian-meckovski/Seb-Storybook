// import './BezierDrawer.css';
import { useEffect, useRef } from 'react';

export const BezierDrawer = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		var canvas = canvasRef.current;
		var ctx = canvas.getContext('2d');
		var width = (canvas.width = window.innerWidth * 0.9);
		var height = (canvas.height = window.innerHeight * 0.9);

		var circle1 = {
			x: width * 0.1,
			y: height * 0.2,
			radius: 20,
		};

		var circle2 = {
			x: width * 0.3,
			y: height * 0.5,
			radius: 20,
		};

		function draw() {
			ctx.clearRect(0, 0, width, height);

			ctx.beginPath();
			ctx.arc(circle1.x, circle1.y, circle1.radius, 0, Math.PI * 2, false);
			ctx.fill();

			ctx.beginPath();
			ctx.arc(circle2.x, circle2.y, circle2.radius, 0, Math.PI * 2, false);
			ctx.fill();

			ctx.stroke();
			drawVerticalLines();
		}

		function drawVerticalLines() {
			var myArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

			myArray.forEach((x) => {
				ctx.beginPath();
				ctx.moveTo(width * x, 0);
				ctx.lineTo(width * x, height);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(0, height * x);
				ctx.lineTo(width, height * x);
				ctx.stroke();
			});
		}

		function circlePointCollision(x, y, circle) {
			return distanceXY(x, y, circle.x, circle.y) < circle.radius;
		}

		function distanceXY(x0, y0, x1, y1) {
			var dx = x1 - x0,
				dy = y1 - y0;
			return Math.sqrt(dx * dx + dy * dy);
		}

		document.addEventListener('mousedown', function (e) {
			if (circlePointCollision(e.x, e.y, circle1)) {
				document.addEventListener('mousemove', onMouseMove);
				document.addEventListener('mouseup', onMouseUp);
			}
		});

		function onMouseMove(e) {
			const threshold = circle1.radius;  

			var myArrayX = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9];
			var myArrayY = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9];
			var intersections = [];

			myArrayX.forEach((x) => {
				myArrayY.forEach((y) => {
					intersections.push({ x: width * x, y: height * y });
				});
			});

			intersections.forEach((item) => {
				if (distanceXY(e.pageX, e.pageY, item.x, item.y) < threshold) {
					circle1.x = item.x;
					circle1.y = item.y;
				}
			});
			
			draw();
		}

		function onMouseUp() {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		}
		draw();
		drawVerticalLines();
	}, []);

	return <canvas ref={canvasRef} id={'bezierDrawer'} />;
}
