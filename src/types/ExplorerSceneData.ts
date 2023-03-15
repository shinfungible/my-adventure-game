import { ThreeObjects } from "./ThreeObjects";
import { GameLogicType } from '../types/GameLogic';

class ExplorerSceneData {
  readonly gameLogicType: GameLogicType = 'explorer';
  id: string;
  title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}

export { ExplorerSceneData };