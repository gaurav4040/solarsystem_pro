"use client"


import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Pane } from "tweakpane";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";

interface Moon {
  name: string;
  a: number;
  e: number;
  b: number;
  speed: number;
  material: THREE.MeshStandardMaterial|THREE.MeshBasicMaterial;
  inclination: number;
  retrograde: boolean;
  radius: number;
  position: number;
  rotationSpeed: number;
}

interface Planet {
  
  name: string;
  a: number;
  e: number;
  b: number;
  speed: number;
  material:THREE.MeshStandardMaterial|THREE.MeshBasicMaterial;
  inclination: number;
  retrograde: boolean;
  radius: number;
  position: number;
  rotationSpeed: number;
  moons: never[]|Moon[];
  // extra fields for runtime
  mesh?: THREE.Mesh;
  angle?: number;
}

export default  function Home() {
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
 
  useEffect(()=>{
    if (!canvasRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const pane = new Pane();

    const scene = new THREE.Scene();
    const pCamera = new THREE.PerspectiveCamera(35,width/height,0.1,100000);
    const renderer = new THREE.WebGLRenderer({
      canvas:canvasRef.current?canvasRef.current:undefined,
      antialias:true
    });
    pCamera.position.z=1000;
    pCamera.position.y=5;
    
   const ambientLight = new THREE.AmbientLight(0xffffff,2);
   const pointLight1 = new THREE.PointLight(0xffffff, 20);
   const pointLight2 = new THREE.PointLight(0xffffff, 20);
   const pointLight3 = new THREE.PointLight(0xffffff, 20);
   const pointLight4 = new THREE.PointLight(0xffffff, 20);
   const pointLight5 = new THREE.PointLight(0xffffff, 20);
   const pointLight6 = new THREE.PointLight(0xffffff, 20);
   const pointLight7 = new THREE.PointLight(0xffffff, 20);
   const pointLight8 = new THREE.PointLight(0xffffff, 20);


    pointLight1.position.set(8, 8, 8);
    pointLight2.position.set(-8, 8, 8);
    pointLight3.position.set(8, -8, 8);
    pointLight4.position.set(8, 8, -8);
    pointLight5.position.set(8, -8, -8);
    pointLight6.position.set(-8, -8, 8);
    pointLight7.position.set(-8, 8, -8);
    pointLight8.position.set(-8, -8, -8);
   

const textureLoader = new THREE.TextureLoader();
//*Sun
   const sunTexture = textureLoader.load('/textures/sun/sun.jpg');

//*mercury
   const mercuryTexture = textureLoader.load('/textures/mercury/mercurymap.jpg');
   const mercuryBumpTexture = textureLoader.load('/textures/mercury/mercurybump.jpg');
//*venus
   const venusTexture = textureLoader.load('/textures/venus/venusmap.jpg');
   const venusBumpTexture = textureLoader.load('/textures/venus/venusbump.jpg');
//* Earth
   const earthTexture = textureLoader.load('/textures/earth/earthmap1k.jpg');
   const earthBumpTexture = textureLoader.load('/textures/earth/earthbump1k.jpg');
//*mars
   const marsTexture = textureLoader.load('/textures/mars/marsmap1k.jpg');
   const marsNormalTexture = textureLoader.load('/textures/mars/mars_1k_normal.jpg');
   const marsBumpTexture = textureLoader.load('/textures/mars/marsbump1k.jpg');
//*jupiter
   const jupiterTexture = textureLoader.load('/textures/jupiter/jupitermap.jpg');
   const jupiterAoTexture = textureLoader.load('/textures/jupiter/jupiter2_1k.jpg');
   const jupiterNormalTexture = textureLoader.load('/textures/jupiter/RS3_Jupiter.webp');
//*saturn
   const saturnTexture = textureLoader.load('/textures/saturn/saturnmap.jpg');
//*uranus
   const uranusTexture = textureLoader.load('/textures/uranus/uranusmap.jpg');
//*neptune
   const neptuneTexture = textureLoader.load('/textures/neptune/neptunemap.jpg');
//*pluto
   const plutoTexture = textureLoader.load('/textures/pluto/plutomap1k.jpg');
   const plutoBumpTexture = textureLoader.load('/textures/pluto/plutobump1k.jpg');
   
//*MOON TEXTURE
const moonMoonTexture = textureLoader.load('/textures/earth/MOON/moonmap1k.jpg')
const moonMoonBumpTexture = textureLoader.load('/textures/earth/MOON/moonbump1k.jpg')
const phobosMoonTexture = textureLoader.load('/textures/mars/MOON/phobos.jpg')
const phobosMoonBumpTexture = textureLoader.load('/textures/mars/MOON/phobosbump.jpg')
const deimosMoonTexture = textureLoader.load('/textures/mars/MOON/deimos.jpg')
const deimosMoonBumpTexture = textureLoader.load('/textures/mars/MOON/deimosbump.jpg')
// const ioMoonTexture = textureLoader.load('/textures/io/MOON/')
// const europaMoonTexture = textureLoader.load('/textures/europa/MOON/')
// const ganymedeMoonTexture = textureLoader.load('/textures/ganymede/MOON/')
// const callistoMoonTexture = textureLoader.load('/textures/callisto/MOON/')
// const titanMoonTexture = textureLoader.load('/textures/titan/MOON/')
// const rheaMoonTexture = textureLoader.load('/textures/rhea/MOON/')
// const iapetusMoonTexture = textureLoader.load('/textures/iapetus/MOON/')
// const enceladusMoonTexture = textureLoader.load('/textures/enceladus/MOON/')
// const mirandaMoonTexture = textureLoader.load('/textures/miranda/MOON/')
// const arielMoonTexture = textureLoader.load('/textures/ariel/MOON/')
// const umbrielMoonTexture = textureLoader.load('/textures/umbriel/MOON/')
// const titaniaMoonTexture = textureLoader.load('/textures/titania/MOON/')
// const oberonMoonTexture = textureLoader.load('/textures/oberon/MOON/')
// const tritonMoonTexture = textureLoader.load('/textures/triton/MOON/')
// const proteusMoonTexture = textureLoader.load('/textures/proteus/MOON/')
// const nereidMoonTexture = textureLoader.load('/textures/nereid/MOON/')
// const charonMoonTexture = textureLoader.load('/textures/charon/MOON/')
// const nixMoonTexture = textureLoader.load('/textures/nix/MOON/')
// const hydraMoonTexture = textureLoader.load('/textures/hydra/MOON/')
// const kerberosMoonTexture = textureLoader.load('/textures/kerberos/MOON/')
// const styxMoonTexture = textureLoader.load('/textures/styx/MOON/')

//*sun
 const sunMaterial = new THREE.MeshBasicMaterial({color:'orange'});
    sunMaterial.map=sunTexture;
//*mercury
 const mercuryMaterial = new THREE.MeshStandardMaterial({map:mercuryTexture,bumpMap:mercuryBumpTexture});
//*venus
 const venusMaterial = new THREE.MeshStandardMaterial({map:venusTexture,bumpMap:venusBumpTexture});
//*earth
 const earthMaterial = new THREE.MeshStandardMaterial({map:earthTexture,bumpMap:earthBumpTexture});
    earthMaterial.aoMap = earthBumpTexture;
    earthMaterial.aoMapIntensity = 0.9;
//*mars
 const marsMaterial = new THREE.MeshStandardMaterial({map:marsTexture,bumpMap:marsBumpTexture,normalMap:marsNormalTexture});
 
//*jupiter
 const jupiterMaterial = new THREE.MeshStandardMaterial({map:jupiterTexture,aoMap:jupiterAoTexture,normalMap:jupiterNormalTexture});
//*saturn
 const saturnMaterial = new THREE.MeshStandardMaterial({map:saturnTexture,aoMap:saturnTexture,normalMap:saturnTexture});
//*uranus
 const uranusMaterial = new THREE.MeshStandardMaterial({map:uranusTexture,aoMap:uranusTexture});
//*neptune
 const neptuneMaterial = new THREE.MeshStandardMaterial({map:neptuneTexture});
//*pluto
 const plutoMaterial = new THREE.MeshStandardMaterial({map:plutoTexture,bumpMap:plutoBumpTexture});
    
    
 
    
    
//*EarthMoon
 const earthMoonMaterial = new THREE.MeshStandardMaterial({map:moonMoonTexture,bumpMap:moonMoonBumpTexture});

//*MarsMoon
 const phobosMaterial = new THREE.MeshStandardMaterial({map:phobosMoonTexture,bumpMap:phobosMoonBumpTexture});
 const deimosMaterial = new THREE.MeshStandardMaterial({map:deimosMoonTexture,bumpMap:deimosMoonBumpTexture});

//*JupiterMoon
 const ioMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const europaMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const ganymedeMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const callistoMaterial = new THREE.MeshBasicMaterial({color:'white'});


//*SaturnMoon
 const titanMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const rheaMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const iapetusMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const enceladusMaterial = new THREE.MeshBasicMaterial({color:'white'});



//*UranusMoon
 const mirandaMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const arielMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const umbrielMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const titaniaMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const oberonMaterial = new THREE.MeshBasicMaterial({color:'white'});



//*NeptuneMoon
 const tritonMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const proteusMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const nereidMaterial = new THREE.MeshBasicMaterial({color:'white'});



//*PlutoMoon
 const charonMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const nixMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const hydraMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const kerberosMaterial = new THREE.MeshBasicMaterial({color:'white'});
 const styxMaterial = new THREE.MeshBasicMaterial({color:'white'});



  


    const sunMesh = new THREE.Mesh((new THREE.SphereGeometry(40,66,66)),sunMaterial);
    

    const planets:Planet[] = [
      {
        name: "mercury",
        a: 3.8,
        e: 0.206,
        b: 3.8 * Math.sqrt(1 - 0.206 * 0.206),
        speed: 0.24,
        material: mercuryMaterial,
        inclination: 7,
        retrograde: false,
        radius: 0.38,
        position: 3.8,
        rotationSpeed: 0.017,
        moons: []
      },
      {
        name: "venus",
        a: 7.2,
        e: 0.007,
        b: 7.2 * Math.sqrt(1 - 0.007 * 0.007),
        speed: 0.06,
        material: venusMaterial,
        inclination: 3.4,
        retrograde: true,
        radius: 0.95,
        position: 7.2,
        rotationSpeed: -0.004,
        moons: []
      },
      {
        name: "earth",
        a: 10,
        e: 0.0167,
        b: 10 * Math.sqrt(1 - 0.0167 * 0.0167),
        speed: 0.1,
        material: earthMaterial,
        inclination: 0,
        retrograde: false,
        radius: 1,
        position: 10,
        rotationSpeed: 1.0,
        moons: [
          {
            name: "moon",
            a: 2,
            e: 0.055,
            b: 2 * Math.sqrt(1 - 0.055 * 0.055),
            speed: 1.4,
            material: earthMoonMaterial,
            inclination: 5.1,
            retrograde: false,
            radius: 0.27,
            position: 2,
            rotationSpeed: 0.037
          }
        ]
      },
      {
        name: "mars",
        a: 15.2,
        e: 0.093,
        b: 15.2 * Math.sqrt(1 - 0.093 * 0.093),
        speed: 0.08,
        material: marsMaterial,
        inclination: 1.85,
        retrograde: false,
        radius: 0.53,
        position: 15.2,
        rotationSpeed: 0.97,
        moons: [
          {
            name: "phobos",
            a: 1.5,
            e: 0.015,
            b: 1.5 * Math.sqrt(1 - 0.015 * 0.015),
            speed: 2.0,
            material: phobosMaterial,
            inclination: 1.1,
            retrograde: false,
            radius: 0.01,
            position: 1.5,
            rotationSpeed: 1.0
          },
          {
            name: "deimos",
            a: 2.3,
            e: 0.0002,
            b: 2.3 * Math.sqrt(1 - 0.0002 * 0.0002),
            speed: 1.2,
            material: deimosMaterial,
            inclination: 0.9,
            retrograde: false,
            radius: 0.006,
            position: 2.3,
            rotationSpeed: 1.0
          }
        ]
      },
      {
        name: "jupiter",
        a: 52,
        e: 0.049,
        b: 52 * Math.sqrt(1 - 0.049 * 0.049),
        speed: 0.02,
        material: jupiterMaterial,
        inclination: 1.3,
        retrograde: false,
        radius: 11.2,
        position: 52,
        rotationSpeed: 2.44,
        moons: [
          {
            name: "io",
            a: 3,
            e: 0.004,
            b: 3 * Math.sqrt(1 - 0.004 * 0.004),
            speed: 2.0,
            material: ioMaterial,
            inclination: 0.05,
            retrograde: false,
            radius: 0.29,
            position: 3,
            rotationSpeed: 1.0
          },
          {
            name: "europa",
            a: 4,
            e: 0.009,
            b: 4 * Math.sqrt(1 - 0.009 * 0.009),
            speed: 1.8,
            material: europaMaterial,
            inclination: 0.47,
            retrograde: false,
            radius: 0.24,
            position: 4,
            rotationSpeed: 1.0
          },
          {
            name: "ganymede",
            a: 5,
            e: 0.001,
            b: 5 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 1.5,
            material: ganymedeMaterial,
            inclination: 0.2,
            retrograde: false,
            radius: 0.41,
            position: 5,
            rotationSpeed: 1.0
          },
          {
            name: "callisto",
            a: 6,
            e: 0.007,
            b: 6 * Math.sqrt(1 - 0.007 * 0.007),
            speed: 1.2,
            material: callistoMaterial,
            inclination: 0.2,
            retrograde: false,
            radius: 0.38,
            position: 6,
            rotationSpeed: 1.0
          }
        ]
      },
      {
        name: "saturn",
        a: 95,
        e: 0.056,
        b: 95 * Math.sqrt(1 - 0.056 * 0.056),
        speed: 0.01,
        material: saturnMaterial,
        inclination: 2.5,
        retrograde: false,
        radius: 9.45,
        position: 95,
        rotationSpeed: 2.3,
        moons: [
          {
            name: "titan",
            a: 8,
            e: 0.028,
            b: 8 * Math.sqrt(1 - 0.028 * 0.028),
            speed: 0.8,
            material: titanMaterial,
            inclination: 0.3,
            retrograde: false,
            radius: 0.4,
            position: 8,
            rotationSpeed: 1.0
          },
          {
            name: "enceladus",
            a: 4,
            e: 0.004,
            b: 4 * Math.sqrt(1 - 0.004 * 0.004),
            speed: 1.3,
            material: enceladusMaterial,
            inclination: 0.01,
            retrograde: false,
            radius: 0.1,
            position: 4,
            rotationSpeed: 1.0
          },
          {
            name: "iapetus",
            a: 15,
            e: 0.028,
            b: 15 * Math.sqrt(1 - 0.028 * 0.028),
            speed: 0.5,
            material: iapetusMaterial,
            inclination: 7.5,
            retrograde: false,
            radius: 0.23,
            position: 15,
            rotationSpeed: 1.0
          },
          {
            name: "rhea",
            a: 7,
            e: 0.001,
            b: 7 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 1.0,
            material: rheaMaterial,
            inclination: 0.35,
            retrograde: false,
            radius: 0.19,
            position: 7,
            rotationSpeed: 1.0
          }
        ]
      },
      {
        name: "uranus",
        a: 192,
        e: 0.046,
        b: 192 * Math.sqrt(1 - 0.046 * 0.046),
        speed: 0.007,
        material: uranusMaterial,
        inclination: 0.8,
        retrograde: true,
        radius: 4,
        position: 192,
        rotationSpeed: -1.39,
        moons: [
          {
            name: "titania",
            a: 8,
            e: 0.001,
            b: 8 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 0.7,
            material: titaniaMaterial,
            inclination: 0.3,
            retrograde: false,
            radius: 0.24,
            position: 8,
            rotationSpeed: 1.0
          },
          {
            name: "oberon",
            a: 9,
            e: 0.001,
            b: 9 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 0.6,
            material: oberonMaterial,
            inclination: 0.1,
            retrograde: false,
            radius: 0.23,
            position: 9,
            rotationSpeed: 1.0
          },
          {
            name: "umbriel",
            a: 6,
            e: 0.003,
            b: 6 * Math.sqrt(1 - 0.003 * 0.003),
            speed: 0.9,
            material: umbrielMaterial,
            inclination: 0.4,
            retrograde: false,
            radius: 0.12,
            position: 6,
            rotationSpeed: 1.0
          },
          {
            name: "ariel",
            a: 5,
            e: 0.001,
            b: 5 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 1.0,
            material: arielMaterial,
            inclination: 0.1,
            retrograde: false,
            radius: 0.12,
            position: 5,
            rotationSpeed: 1.0
          },
          {
            name: "miranda",
            a: 4,
            e: 0.001,
            b: 4 * Math.sqrt(1 - 0.001 * 0.001),
            speed: 1.2,
            material: mirandaMaterial,
            inclination: 4.3,
            retrograde: false,
            radius: 0.08,
            position: 4,
            rotationSpeed: 1.0
          }
        ]
      },
      {
        name: "neptune",
        a: 300,
        e: 0.009,
        b: 300 * Math.sqrt(1 - 0.009 * 0.009),
        speed: 0.005,
        material: neptuneMaterial,
        inclination: 1.8,
        retrograde: false,
        radius: 3.9,
        position: 300,
        rotationSpeed: 1.5,
        moons: [
          {
            name: "triton",
            a: 8,
            e: 0.000016,
            b: 8 * Math.sqrt(1 - 0.000016 * 0.000016),
            speed: 0.9,
            material: tritonMaterial,
            inclination: 156.9,
            retrograde: true,
            radius: 0.27,
            position: 8,
            rotationSpeed: 1.0
          },
          {
            name: "nereid",
            a: 12,
            e: 0.75,
            b: 12 * Math.sqrt(1 - 0.75 * 0.75),
            speed: 0.3,
            material: nereidMaterial,
            inclination: 7.2,
            retrograde: false,
            radius: 0.06,
            position: 12,
            rotationSpeed: 1.0
          },
          {
            name: "proteus",
            a: 5,
            e: 0.0005,
            b: 5 * Math.sqrt(1 - 0.0005 * 0.0005),
            speed: 1.1,
            material: proteusMaterial,
            inclination: 0.5,
            retrograde: false,
            radius: 0.07,
            position: 5,
            rotationSpeed: 1.0
          }
        ]
      },
      {
        name: "pluto",
        a: 395,
        e: 0.25,
        b: 395 * Math.sqrt(1 - 0.25 * 0.25),
        speed: 0.004,
        material: plutoMaterial,
        inclination: 17.2,
        retrograde: true,
        radius: 0.18,
        position: 395,
        rotationSpeed: -0.16,
        moons: [
          {
            name: "charon",
            a: 4,
            e: 0.0002,
            b: 4 * Math.sqrt(1 - 0.0002 * 0.0002),
            speed: 0.8,
            material: charonMaterial,
            inclination: 0.1,
            retrograde: false,
            radius: 0.09,
            position: 4,
            rotationSpeed: 1.0
          },
          {
            name: "nix",
            a: 6,
            e: 0.002,
            b: 6 * Math.sqrt(1 - 0.002 * 0.002),
            speed: 0.6,
            material: nixMaterial,
            inclination: 0.2,
            retrograde: false,
            radius: 0.03,
            position: 6,
            rotationSpeed: 1.0
          },
          {
            name: "styx",
            a: 7,
            e: 0.005,
            b: 7 * Math.sqrt(1 - 0.005 * 0.005),
            speed: 0.5,
            material: styxMaterial,
            inclination: 0.3,
            retrograde: false,
            radius: 0.02,
            position: 7,
            rotationSpeed: 1.0
          }
        ]
      }
  ];

    const meshArray =  planets.map((planet:Planet)=>{
      console.log(planet);
      const planetMesh = new THREE.Mesh(
          new THREE.SphereGeometry(planet.radius, 66,66),
          planet.material
        );
        planet.mesh=planetMesh

        planetMesh.rotation.z = THREE.MathUtils.degToRad(planet.inclination)

      // planetMesh.scale.setScalar(planet.radius);

        // planetMesh.position.x=planet.position;  
  
        if(planet.moons.length>0){
            const moonPivot = new THREE.Group();
            planetMesh.add(moonPivot);
            
            planet.moons.forEach((moon:Moon)=>{
              const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(moon.radius, 66,66),
              moon.material);
              //  moonMesh.scale.setScalar(moon.radius)
              moonPivot.add(moonMesh);
              if(planet.name=="jupiter"||planet.name=="saturn"){       
                moonMesh.position.x=planet.radius+moon.position;
              }else{
                moonMesh.position.x=moon.position;
              }
             moonMesh.rotation.z= THREE.MathUtils.degToRad(moon.inclination);
             
            });
          }
          scene.add(planetMesh)
          return planetMesh
  })

  function createAsteroidBelt(innerRadius: number, outerRadius: number, count: number) {
    const belt = new THREE.Group();
    const geometry = new THREE.SphereGeometry(1.8, 3, 3); // small rocks
    const material = new THREE.MeshStandardMaterial({ color: 0x888888,map:phobosMoonTexture,bumpMap:phobosMoonBumpTexture });
  
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
  
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = (Math.random() - 0.5) * 0.8; // little vertical scatter
  
      const asteroid = new THREE.Mesh(geometry, material);
      asteroid.position.set(x, y, z);
  
      // tiny random rotation so they don’t look identical
      asteroid.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  
      belt.add(asteroid);
    }
  
    return belt;
  }
  
  
  // Example: Add between Mars (~228M km) and Jupiter (~778M km)
  // Scale down radii for your system
  const asteroidBelt = createAsteroidBelt(400, 960, 9999);
  scene.add(asteroidBelt);
  
  function createPlanetRing(innerRadius: number, outerRadius: number, textureUrl: string,textureUrl2:string) {
    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
    const texture = new THREE.TextureLoader().load(textureUrl);
    const texture2 = new THREE.TextureLoader().load(textureUrl2);
    const material = new THREE.MeshStandardMaterial({
      map: texture2,
      normalMap:texture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
  
    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2; // XZ plane
    return ring;
  }
  
  // Saturn’s rings
  const saturnRing = createPlanetRing(planets[5].radius * 1.2, planets[5].radius * 2, "/textures/saturn/RING/saturnringcolor.jpg","/textures/saturn/RING/saturnringpattern.gif");
  meshArray[5].add(saturnRing);
  
  // Uranus’ rings (thinner, darker)
  const uranusRing = createPlanetRing(planets[6].radius * 1.1, planets[6].radius * 1.5, "/textures/uranus/RING/uranusringcolor.jpg","/textures/uranus/RING/uranusringtrans.gif");
  uranusRing.rotation.x = THREE.MathUtils.degToRad(planets[6].inclination); // tilt
  meshArray[6].add(uranusRing);
  
  
    scene.add(
      ambientLight,
      pointLight1,
      pointLight2,
      pointLight3,
      pointLight4,
      pointLight5,
      pointLight6,
      pointLight7,
      pointLight8,
      sunMesh,
      // asteroidBelt
    );
    
    renderer.setSize(width,height);
    window.addEventListener("resize",()=>{
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const aspectRatio = newWidth/newHeight;
      
      pCamera.aspect = aspectRatio;
      pCamera.updateProjectionMatrix();

      renderer.setSize(newWidth,newHeight);
    });

    const controls = new OrbitControls(pCamera,canvasRef.current);
    controls.enableDamping=true;
    controls.autoRotate=false;

    const clock = new THREE.Clock();
  
    function createEllipseOrbit(a: number, b: number, color = 0x888888,x=0,y=0) {
      const curve = new THREE.EllipseCurve(
        0, 0,       // center
        a, b,       // xRadius, yRadius
        0, 2 * Math.PI
      );
    
      const points = curve.getPoints(200);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color });
      const orbit = new THREE.LineLoop(geometry, material);
    
      // ✅ Rotate from XY plane → XZ plane
      orbit.rotation.x = Math.PI / 2;
    
      return orbit;
    }
    
    
    planets.forEach((planet,i) => {
      const orbit = createEllipseOrbit(planet.a*20 , planet.b*20 );
      
      planet.moons.forEach((moon)=>{
        const moonOrbit = createEllipseOrbit(moon.a*6 , moon.b*6 ,0x888888,planet.position,0);
        meshArray[i].add(moonOrbit);
      })

      // scaled up
      scene.add(orbit);
    });
    


    const renderLoop =()=>{
      
      const elapsedTime = clock.getElapsedTime()
      //*sun ANCHOR
      sunMesh.rotateY(-0.001)
      asteroidBelt.rotation.y += 0.002;

      meshArray.forEach((planet,index)=>{
        console.log('planet',planet);
        
        //*planet  ANCHOR
        const a = planets[index].a;                 
        const b = planets[index].b;
        const speed = planets[index].speed;
        planet.rotateY(-planets[index].rotationSpeed*0.01);
        planet.position.x= a + a*20*Math.sin(elapsedTime*speed);
        planet.position.z= b + b*20*Math.cos(elapsedTime*speed);

        planet.children.forEach((child)=>{child.children.forEach((moon,ind)=>{
          console.log('moon',moon);
          //*MOON ANCHOR
          const aMoon = planets[index].moons[ind].a;        // semi-major axis  // eccentricity
          const bMoon = planets[index].moons[ind].b;
          const speedMoon = planets[index].moons[ind].speed;
          moon.rotateY(-planets[index].moons[ind].rotationSpeed*0.01);  
          moon.position.x =aMoon*2 + aMoon * Math.sin(elapsedTime * speedMoon);
          moon.position.z =bMoon*6 + bMoon * Math.cos(elapsedTime * speedMoon);

        })});

        
      });


      controls.update();
      renderer.render(scene,pCamera);
      window.requestAnimationFrame(renderLoop);
    }
    renderLoop();
  },[]);


  return (
    <canvas ref={canvasRef}></canvas>  
  );
}
