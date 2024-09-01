//@ts-ignore
import Logo from "../assets/images/logo.png";
//@ts-ignore
import Search from "../assets/svg/search.svg";
import React from "react";
import { HeaderStyleClassGroup } from "../style.classes";



export const Header: React.FC = () => {
  return (
    <div className={HeaderStyleClassGroup.headerContainer}>
      <img src={Logo} alt="Logo" className={HeaderStyleClassGroup.logo} />
      <div className={HeaderStyleClassGroup.searchContainer}>
        <div className={HeaderStyleClassGroup.searchInputWrapper}>
          <img src={Search} alt="Search" className={HeaderStyleClassGroup.searchIcon} />
          <input
            type="text"
            placeholder="Search Creative OS"
            className={HeaderStyleClassGroup.searchInput}
          />
        </div>
        <span className={HeaderStyleClassGroup.shortcutHint}>⌘+K</span>
      </div>
      <div className={HeaderStyleClassGroup.spacer} />
      <div className={HeaderStyleClassGroup.menuButtonWrapper}>
        <div className={HeaderStyleClassGroup.menuLine} />
        <div className={`${HeaderStyleClassGroup.menuLine} ${HeaderStyleClassGroup.menuLineSpacing}`} />
        <div className={HeaderStyleClassGroup.menuLine} />
      </div>
    </div>
  );
};

export default Header;
