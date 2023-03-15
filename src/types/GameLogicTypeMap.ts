import { TitleSceneData } from "./TitleSceneData";
import { NovelSceneData } from "./NovelSceneData";
import { ExplorerSceneData } from "./ExplorerSceneData";

/**
 * ゲームロジックタイプとシーンデータ型を関連付けるマッピング。
 *
 * @remarks
 * 新しく GameLogicType と SceneData 型を追加する場合は、このマッピングに追加すること。
 * 例えば、新しいゲームロジックタイプ "quiz" があり、それに対応するシーンデータ型 "QuizSceneData" がある場合、
 * 以下のようにマッピングに追加する:
 *
 * ```
 * type GameLogicTypeMap = {
 *   title: TitleSceneData;
 *   novel: NovelSceneData;
 *   explorer: ExplorerSceneData;
 *   quiz: QuizSceneData; // 追加したゲームロジックタイプとシーンデータ型
 * };
 * ```
 */
type GameLogicTypeMap = {
  title: TitleSceneData;
  novel: NovelSceneData;
  explorer: ExplorerSceneData;
};

export { GameLogicTypeMap };
