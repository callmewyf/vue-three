<template>
  <div>
    <div id="glFullscreen">
      <canvas id="example"></canvas>
    </div>
    <div id="dat">

    </div>
    <div id="info">
      <div id="feedback"></div>
    </div>
  </div>
</template>

<script>
  // 导入threejs
  import * as THREE from 'three';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
  import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
  import { MtlObjBridge } from 'three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

  export default {
    data() {
      return {

      }
    },
    mounted() {
      const OBJLoader2Example = function ( elementToBindTo ) {
        this.renderer = null;
        this.canvas = elementToBindTo;
        this.aspectRatio = 1;
        this.recalcAspectRatio();

        this.scene = null;
        this.cameraDefaults = {
          posCamera: new THREE.Vector3( 0.0, 175.0, 500.0 ),
          posCameraTarget: new THREE.Vector3( 0, 0, 0 ),
          near: 0.1,
          far: 10000,
          fov: 45
        };
        this.camera = null;
        this.cameraTarget = this.cameraDefaults.posCameraTarget;

        this.controls = null;
      };

      OBJLoader2Example.prototype = {

        constructor: OBJLoader2Example,

        initGL: function () {
          this.renderer = new THREE.WebGLRenderer( {
            canvas: this.canvas,
            antialias: true,
            autoClear: true
          } );
          this.renderer.setClearColor( 0xd3df56 );

          this.scene = new THREE.Scene();

          this.camera = new THREE.PerspectiveCamera( this.cameraDefaults.fov, this.aspectRatio, this.cameraDefaults.near, this.cameraDefaults.far );
          this.resetCamera();
          this.controls = new TrackballControls( this.camera, this.renderer.domElement );

          let ambientLight = new THREE.AmbientLight( 0x404040 );
          let directionalLight1 = new THREE.DirectionalLight( 0xffffff );
          let directionalLight2 = new THREE.DirectionalLight( 0xffffff );

          directionalLight1.position.set( - 100, - 50, 100 );
          directionalLight2.position.set( 100, 50, - 100 );

          this.scene.add( directionalLight1 );
          this.scene.add( directionalLight2 );
          this.scene.add( ambientLight );

          let helper = new THREE.GridHelper( 1200, 60, 0xFF4444, 0x404040 );
          this.scene.add( helper );
        },

        initContent: function () {
          let modelName = 'female02';
          this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );


          let scope = this;
          let objLoader2 = new OBJLoader2();
          let callbackOnLoad = function ( object3d ) {
            scope.scene.add( object3d );
            console.log( 'Loading complete: ' + modelName );
            scope._reportProgress( { detail: { text: '' } } );
          };

          let onLoadMtl = function ( mtlParseResult ) {
            objLoader2.setModelName( modelName );
            objLoader2.setLogging( true, true );
            objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
            objLoader2.load( '/static/models/dixing/data.obj', callbackOnLoad, null, null, null );
          };
          let mtlLoader = new MTLLoader();
          mtlLoader.load( '/static/models/dixing/data.mtl', onLoadMtl );
        },
        initContent2: function () {
          let modelName = 'female02';
          this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );


          let scope = this;
          let objLoader2 = new OBJLoader2();
          let callbackOnLoad = function ( object3d ) {
            scope.scene.add( object3d );
            console.log( 'Loading complete: ' + modelName );
            scope._reportProgress( { detail: { text: '' } } );
          };

          let onLoadMtl = function ( mtlParseResult ) {
            objLoader2.setModelName( modelName );
            objLoader2.setLogging( true, true );
            objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
            objLoader2.load( '/static/models/dam/data.obj', callbackOnLoad, null, null, null );
          };
          let mtlLoader = new MTLLoader();
          mtlLoader.load( '/static/models/dixing/data.mtl', onLoadMtl );
        },
        initContent3: function () {
          let modelName = 'female02';
          this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );


          let scope = this;
          let objLoader2 = new OBJLoader2();
          let callbackOnLoad = function ( object3d ) {
            scope.scene.add( object3d );
            console.log( 'Loading complete: ' + modelName );
            scope._reportProgress( { detail: { text: '' } } );
          };

          let onLoadMtl = function ( mtlParseResult ) {
            objLoader2.setModelName( modelName );
            objLoader2.setLogging( true, true );
            objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
            objLoader2.load( '/static/models/ground/data.obj', callbackOnLoad, null, null, null );
          };
          let mtlLoader = new MTLLoader();
          mtlLoader.load( '/static/models/ground/data.mtl', onLoadMtl );
        },

        _reportProgress: function ( event ) {
          let output = '';
          if ( event.detail !== null && event.detail !== undefined && event.detail.text ) {

            output = event.detail.text;

          }
          console.log( 'Progress: ' + output );
          document.getElementById( 'feedback' ).innerHTML = output;
        },
        initControl: function() {
          var controls = new OrbitControls(this.camera, this.renderer.domElement);
          // 使用阻尼,指定是否有惯性
          controls.enableDamping = true;
          // 动态阻尼系数 就是鼠标拖拽旋转灵敏度，阻尼越小越灵敏
          controls.dampingFactor = 0.25;
          // 是否可以缩放
          controls.enableZoom = true;
          //是否自动旋转
          controls.autoRotate = false;
          //设置相机距离原点的最近距离
          controls.minDistance = 10;
          //设置相机距离原点的最远距离
          controls.maxDistance = 6000;
          //是否开启右键拖拽
          controls.enablePan = true;
          this.controls = controls;
        },
        resizeDisplayGL: function () {
          this.controls.handleResize();

          this.recalcAspectRatio();
          this.renderer.setSize( this.canvas.offsetWidth, this.canvas.offsetHeight, false );

          this.updateCamera();
        },

        recalcAspectRatio: function () {
          this.aspectRatio = (this.canvas.offsetHeight === 0) ? 1 : this.canvas.offsetWidth / this.canvas.offsetHeight;
        },

        resetCamera: function () {
          this.camera.position.copy( this.cameraDefaults.posCamera );
          this.cameraTarget.copy( this.cameraDefaults.posCameraTarget );

          this.updateCamera();
        },

        updateCamera: function () {
          this.camera.aspect = this.aspectRatio;
          this.camera.lookAt( this.cameraTarget );
          this.camera.updateProjectionMatrix();
        },

        render: function () {
          if ( !this.renderer.autoClear ) this.renderer.clear();
          this.controls.update();
          this.renderer.render( this.scene, this.camera );
        }
      };
      // 实例化
      let app = new OBJLoader2Example(document.getElementById('example'));
      let resizeWindow = function () {
        app.resizeDisplayGL();
      };
      let render = function () {
        requestAnimationFrame(render);
        app.render();
      };
      window.addEventListener( 'resize', resizeWindow, false );
      console.log( 'Starting initialisation phase...' );
      app.initGL();
      app.resizeDisplayGL();
      app.initContent();
      app.initControl();
      app.initContent2();
      app.initContent3();
      render();
    },
  }
</script>

<style>
  #glFullscreen {
    width: 100%;
    height: 100vh;
    min-width: 640px;
    min-height: 360px;
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  #example {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000;
  }
  #feedback {
    color: darkorange;
  }
  #dat {
    user-select: none;
    position: absolute;
    left: 0;
    top: 0;
    z-Index: 200;
  }
</style>
