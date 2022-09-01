

import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CameraControls } from './orbitControl'
import { Table } from './table'
import { Sphere } from './sphere'
import { Helix } from './helix'
import { Grid } from './grid'



//which is it?

extend({ OrbitControls });


export default function App() {


  const [ifTable, setTable] = useState(true);
  const [ifSphere, setSphere] = useState(false);
  const [ifHelix, setHelix] = useState(false);
  const [ifGrid, setGrid] = useState(false);

  if (ifTable === true) {
    return (
      <div id="canvas-container" >

        <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 60] }}>
          <CameraControls />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Table />
          {/*<Sphere />*/}
          {/*<Helix />*/}
          {/*<Grid />*/}

        </Canvas>,
        <div id='menu'>
          <button className="Button_inner" id="table" onClick={() => { setTable(true); setSphere(false); setHelix(false); setGrid(false) }}>TABLE</button>
          <button className="Button_inner" id="sphere" onClick={() => { setSphere(true); setTable(false); setHelix(false); setGrid(false) }}>SPHERE</button>
          <button className="Button_inner" id="helix" onClick={() => { setTable(false); setSphere(false); setHelix(true); setGrid(false) }}>HELIX</button>
          <button className="Button_inner" id="grid" onClick={() => { setTable(false); setSphere(false); setHelix(false); setGrid(true) }}>GRID</button>
        </div>
      </div>
    )
  }

  if (ifSphere === true) {
    return (
      <div id="canvas-container" >

        <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 60] }}>
          <CameraControls />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/*<Table />*/}
          <Sphere />
          {/*<Helix />*/}
          {/*<Grid />*/}

        </Canvas>,
        <div id='menu'>
          <button className="Button_inner" id="table" onClick={() => { setTable(true); setSphere(false); setHelix(false); setGrid(false) }}>TABLE</button>
          <button className="Button_inner" id="sphere" onClick={() => { setSphere(true); setTable(false); setHelix(false); setGrid(false) }}>SPHERE</button>
          <button className="Button_inner" id="helix" onClick={() => { setTable(false); setSphere(false); setHelix(true); setGrid(false) }}>HELIX</button>
          <button className="Button_inner" id="grid" onClick={() => { setTable(false); setSphere(false); setHelix(false); setGrid(true) }}>GRID</button>
        </div>
      </div>
    )

  }

  if (ifHelix === true) {
    return (
      <div id="canvas-container" >

        <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 60] }}>
          <CameraControls />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/*<Table />*/}
          {/*<Sphere />*/}
          <Helix />
          {/*<Grid />*/}

        </Canvas>,
        <div id='menu'>
          <button className="Button_inner" id="table" onClick={() => { setTable(true); setSphere(false); setHelix(false); setGrid(false) }}>TABLE</button>
          <button className="Button_inner" id="sphere" onClick={() => { setSphere(true); setTable(false); setHelix(false); setGrid(false) }}>SPHERE</button>
          <button className="Button_inner" id="helix" onClick={() => { setTable(false); setSphere(false); setHelix(true); setGrid(false) }}>HELIX</button>
          <button className="Button_inner" id="grid" onClick={() => { setTable(false); setSphere(false); setHelix(false); setGrid(true) }}>GRID</button>
        </div>
      </div>
    )

  }

  if (ifGrid === true) {
    return (
      <div id="canvas-container" >

        <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 60] }}>
          <CameraControls />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/*<Table />*/}
          {/*<Sphere />*/}
          {/*<Helix />*/}
          <Grid />

        </Canvas>,
        <div id='menu'>
          <button className="Button_inner" id="table" onClick={() => { setTable(true); setSphere(false); setHelix(false); setGrid(false) }}>TABLE</button>
          <button className="Button_inner" id="sphere" onClick={() => { setSphere(true); setTable(false); setHelix(false); setGrid(false) }}>SPHERE</button>
          <button className="Button_inner" id="helix" onClick={() => { setTable(false); setSphere(false); setHelix(true); setGrid(false) }}>HELIX</button>
          <button className="Button_inner" id="grid" onClick={() => { setTable(false); setSphere(false); setHelix(false); setGrid(true) }}>GRID</button>
        </div>
      </div>
    )

  }

}



ReactDOM.render(<App />, document.getElementById('root'))
