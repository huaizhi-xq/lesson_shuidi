import React, { Component } from 'react'
import * as THREE from 'three' // 组件
// THREE.js 组件
import React3 from 'react-three-renderer'
// three.js 更简单
export default class GameContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.cameraPositon = new THREE.Vector3(0, 0, 5) //三维空间
    this.state = {
      // 运动  几何体  x y z 
      cubeRotation: new THREE.Euler()  //mvvm
    }
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        )
      })
    }
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight
    // console.log(width, height)
    return (
      // 3D渲染组件
      <React3
        mainCamera="camera"  //摄像头  仿照拍摄的过程写的 相机
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        >
          {/* 场景 */}
        <scene>
          {/* 视角摄像机 */}
          <perspectiveCamera 
            name="camera"
            fov={75} //支架
            aspect={width/height}  //方向
            near={0.1} //近距离
            far={1000} //远距离
            position={this.cameraPositon} //角度
          />
          {/* 网眼 */}
          <mesh
            rotation={this.state.cubeRotation}
            > 
            {/* 形状 */}
            <boxGeometry
            width={1}
            height={1}
            depth={1}>
            </boxGeometry>
            {/* 材料 */}
            <meshBasicMaterial color={0x00ff00}/>
          </mesh>
        </scene>
      </React3>
    )
  }
}
