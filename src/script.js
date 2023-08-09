import './style.css'
// import * as THREE from 'three'
import {setup} from "./setup" 
//Setup.js is where the basic necessary threejs objects are created

import "./subtraction.js"


//////////////////

function main() {

// "Global" Variables

var {scene,camera,renderer} = setup;

// RENDER LOOP

function render(time)
{   
    
    renderer.render(scene,camera);
    requestAnimationFrame ( render );
}

requestAnimationFrame ( render );

}

main();




