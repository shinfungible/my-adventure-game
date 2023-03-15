import * as THREE from 'three';
import { IThreeManager } from '../interfaces/IThreeManager';

class ThreeManager implements IThreeManager {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;

  constructor() {
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.scene = new THREE.Scene();
  }

  init(container: HTMLElement): void {
    this.scene.background = new THREE.Color(0xBC7CFF);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xFFDC82 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.animate();
  }

  getThreeObjects(): { renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera, scene: THREE.Scene } {
    return {
      renderer: this.renderer,
      camera: this.camera,
      scene: this.scene
    };
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());

    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreeManager;