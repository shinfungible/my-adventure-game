import { ExtendedSceneData } from "../types/ExtendedSceneData";

type SceneTransitionFunction = (
  currentScene: ExtendedSceneData,
  nextScene: ExtendedSceneData,
  onTransitionComplete: () => void
) => void;

type SceneTransitionMap = {
  [key: string]: {
    [key: string]: SceneTransitionFunction;
  };
};

interface ISceneTransitionManager {
  runTransitionById: (
    currentSceneId: string,
    nextSceneId: string,
    currentScene: ExtendedSceneData,
    nextScene: ExtendedSceneData,
  ) => Promise<void>;
}

export { SceneTransitionFunction, SceneTransitionMap, ISceneTransitionManager };