import { SceneData } from './SceneData';

type ExtendedSceneData = SceneData & {
  reactNode: React.ReactNode;
};

export { ExtendedSceneData };