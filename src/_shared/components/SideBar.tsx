//@ts-ignore
import Inspiration from "../assets/svg/sidenav/inspiration.svg";
//@ts-ignore
import Templates from "../assets/svg/sidenav/templates.svg";
//@ts-ignore
import Collections from "../assets/svg/sidenav/collection.svg";
//@ts-ignore
import Brands from "../assets/svg/sidenav/brands.svg";
//@ts-ignore
import Chevron from "../assets/svg/sidenav/chevron.svg";
//@ts-ignore
import Add from "../assets/svg/sidenav/add.svg";
//@ts-ignore
import Dots from "../assets/svg/sidenav/dots.svg";
//@ts-ignore
import Lock from "../assets/images/lock-tag.png";
import { useState } from "react";
import { SidebarStyleClassGroup } from "../style.classes";

interface NavItem {
  navName: string;
  navImageUrl: string;
}



const SideBar: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(true);

  const sideNavNames: NavItem[] = [
    { navName: "Inspiration", navImageUrl: Inspiration },
    { navName: "Templates", navImageUrl: Templates },
    { navName: "Collections", navImageUrl: Collections },
    { navName: "Brands", navImageUrl: Brands },
  ];

  const featuredNav: NavItem[] = [
    { navName: "Hidden gems", navImageUrl: Lock },
    { navName: "Evergreen ads", navImageUrl: Lock },
    { navName: "Testing lab", navImageUrl: Lock },
  ];

  return (
    <div
      className={`${SidebarStyleClassGroup.container} ${
        opened ? "max-w-[250px]" : "max-w-[50px]"
      }`}
    >
      {sideNavNames.map((nav, index) => (
        <div key={index} className={SidebarStyleClassGroup.navItem}>
          {opened && (
            <div className={SidebarStyleClassGroup.navContent}>
              <img src={nav.navImageUrl} alt={nav.navName} className={SidebarStyleClassGroup.navImage} />
              <span className="font-semibold">{nav.navName}</span>
            </div>
          )}
          {index === 0 && (
            <img
              src={Chevron}
              alt="Toggle"
              className={`${SidebarStyleClassGroup.toggleButton} ${
                opened ? "rotate-0" : "rotate-180"
              }`}
              onClick={() => setOpened(!opened)}
            />
          )}
        </div>
      ))}

      {opened && (
        <div className={SidebarStyleClassGroup.featuredSection}>
          <hr className={SidebarStyleClassGroup.divider} />
          <span className={SidebarStyleClassGroup.featuredHeader}>FEATURED</span>
          <div className="flex flex-col gap-0 mx-5">
            {featuredNav.map((nav, index) => (
              <div key={index} className={SidebarStyleClassGroup.featuredItem}>
                <span className="font-semibold">{nav.navName}</span>
                <img src={nav.navImageUrl} alt={nav.navName} className={SidebarStyleClassGroup.featuredItemImage} />
              </div>
            ))}
          </div>
          <hr className={SidebarStyleClassGroup.divider} />
          <div className={SidebarStyleClassGroup.savedSection}>
            <span className={SidebarStyleClassGroup.savedTitle}>SAVED</span>
            <img src={Add} alt="Add" className={SidebarStyleClassGroup.addIcon} />
          </div>
          <div className={SidebarStyleClassGroup.savedItemsContainer}>
            <div
              className={SidebarStyleClassGroup.gradientLine}
              style={{
                background: "linear-gradient(90deg, #A259FF 0%, #613599 100%)",
              }}
            />
            <div className={SidebarStyleClassGroup.savedItemWrapper}>
              {Array(5)
                .fill("Board name")
                .map((name, index) => (
                  <div key={index} className={SidebarStyleClassGroup.savedItem}>
                    <span className="font-medium">{name}</span>
                    <img src={Dots} alt="Options" />
                  </div>
                ))}
            </div>
          </div>
          <span className={SidebarStyleClassGroup.viewAllBoards}>View all boards</span>
          <hr className={SidebarStyleClassGroup.divider} />
          <div className={SidebarStyleClassGroup.settingsSection}>
            <span className="font-medium">Settings</span>
            <span className="font-medium">Help & Feedback</span>
            <span className="font-medium">Join the CreativeOS Slack</span>
          </div>
          <hr className={SidebarStyleClassGroup.divider} />
          <div className={SidebarStyleClassGroup.accountSection}>
            <div className={SidebarStyleClassGroup.accountImage} />
            <span className={SidebarStyleClassGroup.accountText}>My Account</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
