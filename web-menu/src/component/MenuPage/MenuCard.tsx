import { Menu } from "../../models/menu";
import placeholderMenu from "../../assets/Menu-Placeholder.jpg";
import "./MenuCard.css";

import Chef from "../../assets/Chef.png";
import Chilli from "../../assets/chilli.png";
import Salt from "../../assets/Salt.png";
import Sweet from "../../assets/sugar-cube.png";
interface menuCardProp {
  propsMenu: Menu;
}
function MenuCard({ propsMenu }: menuCardProp) {
  return (
    <div className="menuCard">
      <div className="photoContainer">
        <img src={placeholderMenu} />
      </div>
      <div className="description">
        <h2>{propsMenu.name}</h2>
        <p>{propsMenu.comment}</p>
        <div className="metadata">
          <div className="tags">{propsMenu.tags.map(renderCategory)}</div>
          <div className="price">{`IDR ` + propsMenu.price + ` k`}</div>
        </div>
      </div>
    </div>
  );
}

function renderCategory(category: string) {
  switch (category) {
    case "Chef":
      return <img src={Chef} />;
      break;
    case "Sweet":
      return <img src={Sweet} />;
      break;
    case "Spicy":
      return <img src={Chilli} />;
      break;
    case "Salty":
      return <img src={Salt} />;
      break;
  }
}
export default MenuCard;
