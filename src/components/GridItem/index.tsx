import { GridItemType } from "../../@types/GridItem.types";
import * as C from "./styles";
import b7SVG from "../../svgs/b7.svg";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container showBg={item.permanentShown || item.shown} onClick={onClick}>
      {!item.permanentShown && !item.shown && (
        <C.Icon src={b7SVG} alt="game memory" opacity={0.1} />
      )}

      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt={items[item.item].name} />
      )}
    </C.Container>
  );
};
