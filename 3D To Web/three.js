import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xbfe3dd );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight);
camera.position.set( 0, 1, 10 );

const loader = new GLTFLoader();
loader.load('shiba.glb', function(gltf) {scene.add(gltf.scene);})

const light1 = new THREE.PointLight( 0xffffff, 20, 100 );
light1.position.set( 50, 30, 50 );
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffffff, 10, 100 );
light2.position.set( -50, 30, 50 );
scene.add(light2);

const light3 = new THREE.PointLight( 0xffffff, 2, 100 );
light3.position.set( 0, 30, -5 );
scene.add(light3);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const controls = new OrbitControls( camera, canvas );


function animate() {

	requestAnimationFrame(animate);

	renderer.render( scene, camera );

}

animate()