function initScene(){
	WIDTH = 400
	HEIGHT = 300

	// Set some camera attributes.
	const VIEW_ANGLE = 45;
	const ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.01;
	const FAR = 100000;



	renderer = new THREE.WebGLRenderer();

	camera =
	    new THREE.PerspectiveCamera(
	        VIEW_ANGLE,
	        ASPECT,
	        NEAR,
	        FAR
	    );

	scene = new THREE.Scene();
	

	// Start the renderer.
	renderer.setSize(WIDTH, HEIGHT);

	document.body.appendChild( renderer.domElement );
	var element = renderer.domElement;
	



	var sphereMat = new THREE.MeshPhongMaterial({color:0xff0000});
	var SphereGeo = new THREE.SphereGeometry(30, 16,16);
	var sphere = new THREE.Mesh(SphereGeo, sphereMat);



	sphere.position.z = -300;

	var light = new THREE.PointLight();
	light.position.set( 0, 50, -100 );
	scene.add( light );

	scene.add(sphere);
	

	
	animationLoop();

}

function render(){

	renderer.render(scene, camera);
}

function animationLoop(){
	renderer.render(scene, camera);
	setTimeout(animationLoop, 30);
}

initScene();

