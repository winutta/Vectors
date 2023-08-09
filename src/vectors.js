import * as THREE from 'three'
// import {setup} from "./setup" 

// var {scene,camera,renderer} = setup;



//These will be some exercises to get familiar with vectors in threejs.


// Creating vector Objects.

const vector2D = new THREE.Vector2(1,2); 
//a 2 dimensional vector with x,y values of 1,2 respectively.

//https://threejs.org/docs/#api/en/math/Vector2

const vector3D = new THREE.Vector3(2,3,5); 
//a 3 dimensional vector with x,y,z values of 2,3,5 respectively.

// https://threejs.org/docs/#api/en/math/Vector3

const vector4D = new THREE.Vector4(3,4,7,2);
//a 4 dimensional vector with x,y,z,w values of 3,4,7,2 respectively.

// https://threejs.org/docs/#api/en/math/Vector4



// Vectors are just a list of numbers, the dimension is how many numbers in the list.

// Vectors are usually thought of as describing a length (magnitude) and a direction. 

// Length is related to pythagorean theorum. 
// Length Formula: Square all elements and add them, take the square root of the resulting sum.





//In Practice

const A = new THREE.Vector3(1,2,3);

//I can get the length.

let A_length = A.length(); // this is a number

const A_direction = A.clone().normalize(); // this is a vector


// I used clone to get a new Vector3 with the same values as A
// I did this so I would leave A alone in case I need it again.
// I then set the length to 1 by using normalize.
// Normalize divides the elements of the vector by the vector's length.



/////////////
//Vector operations
/////////////

const B = new THREE.Vector3(4,5,6);

// Vectors of the same dimension can be added, subtracted, multiplied, and divided by each other.
// Vectors of different dimensions cannot.

// Addition, subtraction, multiplication, and division work operate on the elements of the vectors.

// There is also the dot product and cross product operations that take two vectors as input.




/////////////
// Subtraction
/////////////


// I can do this in place or in a new vector..

// I find it usualy makes sense to use a result vector or to clone one of the vectors.

const result = new THREE.Vector3();
result.subVectors(A,B); 

const a_minus_b = A.clone().sub(B);

//both are valid, and leave A, and B unchanged. 

// If I now do 
A.sub(B); 
// A's values have changed!
// they started as (1,2,3) and now have become (1-4,2-5,3-6) = (-3,-3,-3);

/////////////
// Addition
/////////////

A.add(B) // changes A.
result.addVectors(A,B) //changes result

// Multiplication

A.multiply(B);
result.multiplyVectors(A,B);

/////////////
// Dividsion
/////////////

A.divide(B);
//strangely no divideVectors function.


//Also can add,subtract,multiply, divide by a scalar.
//this is the same as doing the operation with a vector with all component values as that scalar.
A.addScalar(2);
A.subScalar(2);
A.multiplyScalar(2);
A.divideScalar(2);

/////////////
// setting values
/////////////


A.set(1,2,3);
A.setX(1.);
A.setY(2);
A.setZ(3);

A.copy(B); //sets A's values to match B's values







