interface IThreeManager {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;

  init(container: HTMLElement): void;
  animate(): void;
}

export { IThreeManager };