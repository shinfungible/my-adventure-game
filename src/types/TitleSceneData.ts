import { GameLogicType } from '../types/GameLogic';

class TitleSceneData {
  readonly gameLogicType: GameLogicType = 'title';
  id: string;
  title: string;

  constructor(id: string, title: string, menuItems: string[]) {
    this.id = id;
    this.title = title;
  }
}

export { TitleSceneData };