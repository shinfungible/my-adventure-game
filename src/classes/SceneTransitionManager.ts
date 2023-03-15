import { ISceneTransitionManager, SceneTransitionMap, SceneTransitionManagerProps } from '../interfaces/ISceneTransitionManager';

class SceneTransitionManager implements ISceneTransitionManager {
  transitions: SceneTransitionMap;

  constructor(props: SceneTransitionManagerProps) {
    this.transitions = props.transitions;
  }

  runTransition(transitionName: string, from: React.ReactNode, to: React.ReactNode, props: any): void {
    if (!this.transitions[transitionName]) {
      throw new Error(`Transition not found: ${transitionName}`);
    }

    const transition = this.transitions[transitionName];
    transition(from, to, props);
  }
}
export default SceneTransitionManager;