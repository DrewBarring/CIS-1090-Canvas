import { makeNoise2D, makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */
function shade(x, y, t) {

    return [0, 2, 1];
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    ctx.beginPath();
    ctx.arc(40, 20 + Math.sin(t + 180) + 170, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'Black';
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.lineWidth = 10;



    // Wall
    ctx.fillStyle = "Yellow";
    ctx.fillRect(75, 140, 150, 110);

    // Door
    ctx.fillStyle = "Black";
    ctx.fillRect(130, 190, 40, 60);
    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

export default { name: "My Homework", shade, draw }