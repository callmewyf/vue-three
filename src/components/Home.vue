<template>
    <div id="home">
		<div id="container"></div>
		<div id="menu">
			<button id="table" @click="transform( targets.table, 2000 )">TABLE</button>
			<button id="sphere" @click="transform( targets.sphere, 2000 )">SPHERE</button>
			<button id="helix" @click="transform( targets.helix, 2000 )">HELIX</button>
			<button id="grid" @click="transform( targets.grid, 2000 )">GRID</button>
		</div>
    </div>
</template>

<script>
import * as THREE from 'three/build/three.module.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default {
    data() {
        return {
            table: [
				'static/images/1.png', 1, 1,
				'static/images/1.png', 18, 1,
				'static/images/1.png', 1, 2,
				'static/images/1.png', 2, 2,
				'static/images/1.png', 13, 2,
				'static/images/1.png', 14, 2,
				'static/images/1.png', 15, 2,
				'static/images/1.png', 16, 2,
				'static/images/1.png', 17, 2,
				'static/images/1.png', 18, 2,
				'static/images/1.png', 1, 3,
				'static/images/1.png', 2, 3,
				'static/images/1.png', 13, 3,
				'static/images/1.png', 14, 3,
				'static/images/1.png', 15, 3,
				'static/images/1.png', 16, 3,
				'static/images/1.png', 17, 3,
				'static/images/1.png', 18, 3,
				'static/images/1.png', 1, 4,
				'static/images/1.png', 2, 4,
				'static/images/1.png', 3, 4,
				'static/images/1.png', 4, 4,
				'static/images/1.png', 5, 4,
				'static/images/1.png', 6, 4,
				'static/images/1.png', 7, 4,
				'static/images/1.png', 8, 4,
				'static/images/1.png', 9, 4,
				'static/images/1.png', 10, 4,
				'static/images/1.png', 11, 4,
				'static/images/1.png', 12, 4,
				'static/images/1.png', 13, 4,
				'static/images/1.png', 14, 4,
				'static/images/1.png', 15, 4,
				'static/images/1.png', 16, 4,
				'static/images/1.png', 17, 4,
				'static/images/1.png', 18, 4,
				'static/images/1.png', 1, 5,
				'static/images/1.png', 2, 5,
				'static/images/1.png', 3, 5,
				'static/images/1.png', 4, 5,
				'static/images/1.png', 5, 5,
				'static/images/1.png', 6, 5,
				'static/images/1.png', 7, 5,
				'static/images/1.png', 8, 5,
				'static/images/1.png', 9, 5,
				'static/images/1.png', 10, 5,
				'static/images/1.png', 11, 5,
				'static/images/1.png', 12, 5,
				'static/images/1.png', 13, 5,
				'static/images/1.png', 14, 5,
				'static/images/1.png', 15, 5,
				'static/images/1.png', 16, 5,
				'static/images/1.png', 17, 5,
				'static/images/1.png', 18, 5,
				'static/images/1.png', 1, 6,
				'static/images/1.png', 2, 6,
				'static/images/1.png', 4, 9,
				'static/images/1.png', 5, 9,
				'static/images/1.png', 6, 9,
				'static/images/1.png', 7, 9,
				'static/images/1.png', 8, 9,
				'static/images/1.png', 9, 9,
				'static/images/1.png', 10, 9,
				'static/images/1.png', 11, 9,
				'static/images/1.png', 12, 9,
				'static/images/1.png', 13, 9,
				'static/images/1.png', 14, 9,
				'static/images/1.png', 15, 9,
				'static/images/1.png', 16, 9,
				'static/images/1.png', 17, 9,
				'static/images/1.png', 18, 9,
				'static/images/1.png', 4, 6,
				'static/images/1.png', 5, 6,
				'static/images/1.png', 6, 6,
				'static/images/1.png', 7, 6,
				'static/images/1.png', 8, 6,
				'static/images/1.png', 9, 6,
				'static/images/1.png', 10, 6,
				'static/images/1.png', 11, 6,
				'static/images/1.png', 12, 6,
				'static/images/1.png', 13, 6,
				'static/images/1.png', 14, 6,
				'static/images/1.png', 15, 6,
				'static/images/1.png', 16, 6,
				'static/images/1.png', 17, 6,
				'static/images/1.png', 18, 6,
				'static/images/1.png', 1, 7,
				'static/images/1.png', 2, 7,
				'static/images/1.png', 4, 10,
				'static/images/1.png', 5, 10,
				'static/images/1.png', 6, 10,
				'static/images/1.png', 7, 10,
				'static/images/1.png', 8, 10,
				'static/images/1.png', 9, 10,
				'static/images/1.png', 10, 10,
				'static/images/1.png', 11, 10,
				'static/images/1.png', 12, 10,
				'static/images/1.png', 13, 10,
				'static/images/1.png', 14, 10,
				'static/images/1.png', 15, 10,
				'static/images/1.png', 16, 10,
				'static/images/1.png', 17, 10,
				'static/images/1.png', 18, 10,
				'static/images/1.png', 4, 7,
				'static/images/1.png', 5, 7,
				'static/images/1.png', 6, 7,
				'static/images/1.png', 7, 7,
				'static/images/1.png', 8, 7,
				'static/images/1.png', 9, 7,
				'static/images/1.png', 10, 7,
				'static/images/1.png', 11, 7,
				'static/images/1.png', 12, 7,
				'static/images/1.png', 13, 7,
				'static/images/1.png', 14, 7,
				'static/images/1.png', 15, 7,
				'static/images/1.png', 16, 7,
				'static/images/1.png', 17, 7,
				'static/images/1.png', 18, 7
			],
            camera: {},
            scene: {},
            renderer: {},
            controls: {},
            objects: [],
            targets: {
                table: [],
                sphere: [],
                helix: [],
                grid: []
            }
        }
    },
    methods: {
        init() {
            this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
            this.camera.position.z = 3000;

            this.scene = new THREE.Scene();

            // table
            for ( var i = 0; i < this.table.length; i += 3 ) {
                var element = document.createElement( 'div' );
                element.className = 'element';

                var image = document.createElement( 'div' );
                image.className = 'image';
                image.innerHTML = '<img src="' + this.table[i] + '" />';
                element.appendChild( image );

                var object = new CSS3DObject( element );
                object.position.x = Math.random() * 4000 - 2000;
                object.position.y = Math.random() * 4000 - 2000;
                object.position.z = Math.random() * 4000 - 2000;
                this.scene.add( object );

                this.objects.push( object );

                var object = new THREE.Object3D();
                object.position.x = ( this.table[ i + 1 ] * 140 ) - 1330;
                object.position.y = - ( this.table[ i + 2 ] * 180 ) + 990;

                this.targets.table.push( object );

            }

            // sphere
            var vector = new THREE.Vector3();
            for ( var i = 0, l = this.objects.length; i < l; i ++ ) {
                var phi = Math.acos( - 1 + ( 2 * i ) / l );
                var theta = Math.sqrt( l * Math.PI ) * phi;

                var object = new THREE.Object3D();
                object.position.setFromSphericalCoords( 800, phi, theta );
                vector.copy( object.position ).multiplyScalar( 2 );
                object.lookAt( vector );

                this.targets.sphere.push( object );
            }

            // helix
            var vector = new THREE.Vector3();
            for ( var i = 0, l = this.objects.length; i < l; i ++ ) {
                var theta = i * 0.175 + Math.PI;
                var y = - ( i * 8 ) + 450;

                var object = new THREE.Object3D();
                object.position.setFromCylindricalCoords( 900, theta, y );
                vector.x = object.position.x * 2;
                vector.y = object.position.y;
                vector.z = object.position.z * 2;
                object.lookAt( vector );

                this.targets.helix.push( object );
            }

            // grid
            for ( var i = 0; i < this.objects.length; i ++ ) {
                var object = new THREE.Object3D();
                object.position.x = ( ( i % 5 ) * 400 ) - 800;
                object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
                object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

                this.targets.grid.push( object );

            }

            //
            this.renderer = new CSS3DRenderer();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById( 'container' ).appendChild( this.renderer.domElement );

            //
            this.controls = new TrackballControls( this.camera, this.renderer.domElement );
            this.controls.minDistance = 500;
            this.controls.maxDistance = 6000;
            this.controls.addEventListener( 'change', this.render );

            // var _this = this;

            // var button1 = document.getElementById( 'table' );
            // button1.addEventListener( 'click', function () {
            //     _this.transform( _this.targets.table, 2000 );
            // }, false );

            // var button2 = document.getElementById( 'sphere' );
            // button2.addEventListener( 'click', function () {
            //     _this.transform( _this.targets.sphere, 2000 );
            // }, false );

            // var button3 = document.getElementById( 'helix' );
            // button3.addEventListener( 'click', function () {
            //     _this.transform( _this.targets.helix, 2000 );
            // }, false );

            // var button4 = document.getElementById( 'grid' );
            // button4.addEventListener( 'click', function () {
            //     _this.transform( _this.targets.grid, 2000 );
            // }, false );

            this.transform( this.targets.table, 2000 );

            //
            window.addEventListener( 'resize', this.onWindowResize, false );
        },
        transform( targets, duration ) {
            TWEEN.removeAll();

            for ( var i = 0; i < this.objects.length; i ++ ) {
                var object = this.objects[ i ];
                var target = targets[ i ];

                new TWEEN.Tween( object.position )
                    .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();
                new TWEEN.Tween( object.rotation )
                    .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
                    .easing( TWEEN.Easing.Exponential.InOut )
                    .start();
            }

            new TWEEN.Tween( this )
                .to( {}, duration * 2 )
                .onUpdate( this.render )
                .start();
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.render();
        },
        animate() {
            requestAnimationFrame( this.animate );

            TWEEN.update();

            this.controls.update();
        },
        render() {
            this.renderer.render( this.scene, this.camera );
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.init();
            this.animate();
        })
    }
}
</script>

<style scoped>
#home {
	margin: 0;
	background-color: #000;
	color: #fff;
	font-family: Monospace;
	font-size: 13px;
	line-height: 24px;
	overscroll-behavior: none;
}

a {
	color: #ff0;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

button {
	cursor: pointer;
	text-transform: uppercase;
}

canvas {
	display: block;
}

#info {
	position: absolute;
	top: 0px;
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	text-align: center;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
	z-index: 1; /* TODO Solve this in HTML */
}

a, button, input, select {
	pointer-events: auto;
}

.dg.ac {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	z-index: 2 !important; /* TODO Solve this in HTML */
}

#overlay {
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0,0,0,0.7);
}

#overlay button {
    background: #ffffff;
    border: 0;
    color: #000000;
    padding: 16px 20px;
    text-transform: uppercase;
    cursor: pointer;
}

#notSupported {
	width: 50%;
	margin: auto;
	background-color: #f00;
	margin-top: 20px;
	padding: 10px;
}

#menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
}

.element {
    width: 120px;
    height: 160px;
    box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
    border: 1px solid rgba(127,255,255,0.25);
    font-family: Helvetica, sans-serif;
    text-align: center;
    line-height: normal;
    cursor: default;
}

.element:hover {
    box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
    border: 1px solid rgba(127,255,255,0.75);
}

.element .image {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 12px;
    color: rgba(127,255,255,0.75);
}

button {
    color: rgba(127,255,255,0.75);
    background: transparent;
    outline: 1px solid rgba(127,255,255,0.75);
    border: 0px;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(0,255,255,0.5);
}

button:active {
    color: #000000;
    background-color: rgba(0,255,255,0.75);
}
</style>