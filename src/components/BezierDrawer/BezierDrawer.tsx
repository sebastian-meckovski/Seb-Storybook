import React, { useEffect, useRef, useState } from 'react';


export interface BezierPropTypes {
	onCoordUpdate: (coords: { x: number; y: number }[]) => void;
	size: number;
}

export const BezierDrawer: (props: BezierPropTypes) => JSX.Element = ({ onCoordUpdate, size }: BezierPropTypes) => {
	const canvasRef = useRef(null);

	const canvasSize = size;
	const radius = 10;
	const threshold = radius * 3;

	const [coords, setCoords] = useState([
		{ x: canvasSize * 0.1, y: canvasSize * 0.2 },
		{ x: canvasSize * 0.3, y: canvasSize * 0.5 },
		{ x: canvasSize * 0.4, y: canvasSize * 0.6 },
	]);

	useEffect(() => {
		onCoordUpdate && onCoordUpdate(coords);
	}, [coords]);

	useEffect(() => {
		var canvas: any = canvasRef.current;
		var ctx = canvas.getContext('2d');
		var width = (canvas.width = canvasSize);
		var height = (canvas.height = canvasSize);

		var myArrayX = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9];
		var myArrayY = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.6, 0.7, 0.8, 0.9];
		var intersections: any[] = [];

		myArrayX.forEach((x) => {
			myArrayY.forEach((y) => {
				intersections.push({ x: width * x, y: height * y });
			});
		});

		interface circle {
			x: number
			y: number
		}

		var circle1: circle = {
			x: width * 0.1,
			y: height * 0.2,
		};
		var circle2: circle = {
			x: width * 0.3,
			y: height * 0.5,
		};
		var circle3: circle = {
			x: width * 0.4,
			y: height * 0.6,
		};

		function draw() {
			ctx.clearRect(0, 0, width, height);
			ctx.lineWidth = 7;

			ctx.beginPath();
			ctx.arc(circle1.x, circle1.y, radius, 0, Math.PI * 2, false);
			ctx.fill();

			ctx.beginPath();
			ctx.arc(circle2.x, circle2.y, radius, 0, Math.PI * 2, false);
			ctx.fill();

			ctx.beginPath();
			ctx.arc(circle3.x, circle3.y, radius, 0, Math.PI * 2, false);
			ctx.fill();

			ctx.beginPath();

			ctx.moveTo(60, 0);
			ctx.lineTo(circle1.x, circle1.y);
			ctx.lineTo(circle2.x, circle2.y);
			ctx.lineTo(circle3.x, circle3.y);

			ctx.stroke();
			drawVerticalLines();
		}

		function drawVerticalLines() {
			var myArray = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

			myArray.forEach((x) => {
				ctx.lineWidth = 2;

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

		function circlePointCollision(x: number, y: number, circle: circle) {
			return Number(distanceXY(x, y, circle.x, circle.y)) < radius + 20;
		}

		interface distanceXY {
			x0: number
			y0: number
			x1: number
			y1: number
		}

		function distanceXY(x0: number, y0: number, x1: number, y1: number): any {
			var dx = x1 - x0,
				dy = y1 - y0;
			var result = Math.sqrt(dx * dx + dy * dy)
			return result
		}

		canvas.addEventListener('mousedown', function (e: any) {
			if (circlePointCollision(e.offsetX, e.offsetY, circle1)) {
				canvas.addEventListener('mousemove', onMouseMove);
				canvas.addEventListener('mouseup', onMouseUp);
			}
			if (circlePointCollision(e.offsetX, e.offsetY, circle2)) {
				canvas.addEventListener('mousemove', onMouseMove2);
				canvas.addEventListener('mouseup', onMouseUp);
			}
			if (circlePointCollision(e.offsetX, e.offsetY, circle3)) {
				canvas.addEventListener('mousemove', onMouseMove3);
				canvas.addEventListener('mouseup', onMouseUp);
			}
		});

		function setCoordinates() {
			setCoords([
				{ x: circle1.x, y: circle1.y },
				{ x: circle2.x, y: circle2.y },
				{ x: circle3.x, y: circle3.y },
			]);
		}

		function onMouseMove(e: any) {
			intersections.forEach((item) => {
				if (Number(distanceXY(e.offsetX, e.offsetY, item.x, item.y)) < threshold && (item.x !== circle2.x || item.y !== circle2.y) && (item.x !== circle3.x || item.y !== circle3.y)) {
					circle1.x = item.x;
					circle1.y = item.y;
				}
			});
			setCoordinates();
			draw();
		}

		function onMouseMove2(e: any) {
			intersections.forEach((item) => {
				if (Number(distanceXY(e.offsetX, e.offsetY, item.x, item.y)) < threshold && (item.x !== circle1.x || item.y !== circle1.y) && (item.x !== circle3.x || item.y !== circle3.y)) {
					circle2.x = item.x;
					circle2.y = item.y;
				}
			});
			setCoordinates();
			draw();
		}
		function onMouseMove3(e: any) {
			intersections.forEach((item) => {
				if (Number(distanceXY(e.offsetX, e.offsetY, item.x, item.y)) < threshold && (item.x !== circle1.x || item.y !== circle1.y) && (item.x !== circle2.x || item.y !== circle2.y)) {
					circle3.x = item.x;
					circle3.y = item.y;
				}
			});
			setCoordinates();
			draw();
		}

		function onMouseUp() {
			canvas.removeEventListener('mousemove', onMouseMove);
			canvas.removeEventListener('mousemove', onMouseMove2);
			canvas.removeEventListener('mousemove', onMouseMove3);
			canvas.removeEventListener('mouseup', onMouseUp);
		}
		draw();
		drawVerticalLines();
	}, []);

	return (
		<>
			<canvas ref={canvasRef} id={'bezierDrawer'} />
		</>
	);
};
