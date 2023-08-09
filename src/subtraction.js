import * as THREE from 'three'
import {setup} from "./setup" 

var {scene,camera,renderer} = setup;

//Seeing Subtraction.

// I think of vector subtraction (A-B) as drawing an arrow that goes from B to A.

// Visualize this.

//Heres two spheres.

function sphere(x,y,z,color){

    const geometry = new THREE.SphereGeometry(1);
    // const color = new THREE.Color("blue");
    const material = new THREE.MeshBasicMaterial({color: color});
    const mesh = new THREE.Mesh(geometry,material);

    mesh.position.set(x,y,z);
    mesh.scale.set(0.1,0.1,0.1);
    return mesh;
}


const sphere_A = sphere(1,2,0, "blue");

const sphere_B = sphere(-1.124,0,1.54, "red");

scene.add(sphere_A);
scene.add(sphere_B);

const zero = new THREE.Vector3();
const up = new THREE.Vector3(0.,1.,0.);
const right = new THREE.Vector3(1.,0.,0.);
const back = new THREE.Vector3(0.,0.,1);

const Y_axis = new THREE.ArrowHelper( up, zero, 1, 0x00ff00 );
scene.add( Y_axis );

const X_axis = new THREE.ArrowHelper( right, zero, 1, 0xff0000 );
scene.add( X_axis );

const Z_axis = new THREE.ArrowHelper( back, zero, 1, 0x0000ff );
scene.add( Z_axis );




//////////////////
// Subtraction Challenge
/////////////////


// Challenge is to add an arrow to the scene that exactly points from sphere B (Red) towards sphere A (Blue).

// use the sphere_A and sphere_B position attributes (they are just vectors!)

sphere_A.position // This is a vector!
// you can get its values into another vector with copy like this

const example_vector = new THREE.Vector3();

example_vector.copy(sphere_A.position);

// use an arrow helper object

// https://threejs.org/docs/#api/en/helpers/ArrowHelper


const origin = new THREE.Vector3(1,1,1)
const direction = new THREE.Vector3(1,1,1).normalize(); 
let length = 1.;

//These are just default values. The yellow arrow will respond to adjusting these values.

// your task is to set the values of origin, direction, and length properly
// these are used below in creating the arrow

// Key detail, ArrowHelper requires direction to be unit length,
// so normalize must be called on direction before being passed to ArrowHelper 


///

// Your code goes here





///

const connecting_vector = new THREE.ArrowHelper( direction, origin, length, 0xffff00 );
scene.add( connecting_vector );
