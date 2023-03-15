import { GameLogicType } from '../types/GameLogic';

class NovelSceneData {
  readonly gameLogicType: GameLogicType = 'novel';
  id: string;
  title: string;
  text: string[];
  choices: { [key: string]: string };

  constructor(id: string, title: string, text: string[], choices: { [key: string]: string }) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.choices = choices;
  }
}

export { NovelSceneData };