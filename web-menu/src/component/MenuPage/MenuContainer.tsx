import React, { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import allMenuList from "../../menu.json";
import allCategoryList from "../../menu-category.json";
import { Menu } from "../../models/menu";
import "./MenuContainer.css";

import Chef from "../../assets/Chef.png";
import Chilli from "../../assets/chilli.png";
import Salt from "../../assets/Salt.png";
import Sweet from "../../assets/sugar-cube.png";
import { GiConsoleController } from "react-icons/gi";

function MenuContainer() {
  const [stateMenu, setStateMenu] = useState<Menu[]>(allMenuList as Menu[]);
  const [stateMenuTags, setStateCategory] = useState<string[]>([]);

  const [chefButtonInvert, setChefButtonInvert] = useState<boolean>(false);
  const [sweetButtonInvert, setSweetButtonInvert] = useState<boolean>(false);
  const [spicyButtonInvert, setSpicyButtonInvert] = useState<boolean>(false);
  const [saltyButtonInvert, setSaltyButtonInvert] = useState<boolean>(false);

  function filterOnClick(category: string) {
    if (stateMenuTags.includes(category)) {
      setStateCategory(
        stateMenuTags.filter((savedCategories) => savedCategories != category)
      );
    } else {
      setStateCategory([...stateMenuTags, category]);
    }
  }

  function filteredMenu(): Menu[] {
    if (stateMenuTags.length == 0) {
      return allMenuList;
    } else {
      const filterMenu = allMenuList.filter((menu) => {
        const handler = stateMenuTags.every((filterMenuTags) => {
          return menu.tags.includes(filterMenuTags);
        });
        return handler;
      });
      console.log("Here is the menu ", filterMenu);
      return filterMenu;
    }
  }

  function renderMenu(): JSX.Element[] | JSX.Element {
    if (stateMenu.length) {
      return stateMenu.map((singleMenu) => {
        return <MenuCard key={singleMenu.id} propsMenu={singleMenu} />;
      });
    } else {
      return <div className="menuEmptyCard">Menu Not Found</div>;
    }
  }

  React.useEffect(() => {
    setStateMenu(filteredMenu());
    console.log("Current tags:", stateMenuTags);
  }, [stateMenuTags]);

  return (
    <div className="MenuContainer">
      <div className="filterMenu">
        <p>Filter by</p>
        <li>
          <button
            onClick={() => {
              filterOnClick("Chef");
              setChefButtonInvert(!chefButtonInvert);
            }}
            className={chefButtonInvert ? "white" : "black"}
          >
            <img src={Chef} />
            Chef's Choice
          </button>
          <button
            onClick={() => {
              filterOnClick("Spicy");
              setSpicyButtonInvert(!spicyButtonInvert);
            }}
            className={spicyButtonInvert ? "white" : "black"}
          >
            <img src={Chilli} />
            Spicy
          </button>
          <button
            onClick={() => {
              filterOnClick("Salty");
              setSaltyButtonInvert(!saltyButtonInvert);
            }}
            className={saltyButtonInvert ? "white" : "black"}
          >
            <img src={Salt} />
            Salty
          </button>
          <button
            onClick={() => {
              filterOnClick("Sweet");
              setSweetButtonInvert(!sweetButtonInvert);
            }}
            className={sweetButtonInvert ? "white" : "black"}
          >
            <img src={Sweet} />
            Sweet
          </button>
        </li>
      </div>
      <div className="cardContainer">{renderMenu()}</div>
    </div>
  );
}

export default MenuContainer;
