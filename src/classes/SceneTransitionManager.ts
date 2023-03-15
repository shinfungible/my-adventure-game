import { ISceneTransitionManager, SceneTransitionMap } from '../interfaces/ISceneTransitionManager';
import { ExtendedSceneData } from '../types/ExtendedSceneData';

class SceneTransitionManager implements ISceneTransitionManager {
  transitions: SceneTransitionMap;

  constructor(transitions: SceneTransitionMap) {
    this.transitions = transitions;
  }

  async runTransitionById(
    currentSceneId: string,
    nextSceneId: string,
    currentScene: ExtendedSceneData,
    nextScene: ExtendedSceneData,
  ): Promise<void> {
    const transitionFunction = this.transitions[currentSceneId]?.[nextSceneId];

    if (!transitionFunction) {
      throw new Error(`Transition not found for ${currentSceneId} to ${nextSceneId}`);
    }

    transitionFunction(currentScene, nextScene, () => {});
  }
}

export default SceneTransitionManager;