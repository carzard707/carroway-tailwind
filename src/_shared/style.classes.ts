
export const HomeStyleClassGroup = {
    homePageWrapper: "flex-col gap-[20px] p-[20px] w-full h-full max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] overflow-auto",
    row: "flex gap-2 items-center flex-wrap",
    column: "flex-col gap-2",
    rowSpaceBetween: "flex gap-2 justify-between w-full flex-wrap",
    rowEnd: "flex gap-2 justify-end w-full flex-wrap",
    buttonNormal: "border py-[7px] px-[15px] rounded-lg text-[13px] border-black h-[36px]",
    buttonPurple: "border py-[7px] px-[15px] rounded-lg text-[13px] h-[36px] bg-gradient-to-b from-[#A259FF] to-[#613599]",
    textGradientTopDown: "text-[20px] bg-gradient-to-b from-[#A259FF] to-[#613599] bg-clip-text text-transparent font-semibold",
    basicText: "text-[14px]",
    text600: "text-[16px] font-medium",
    // gridCol2: "grid grid-cols-2 gap-5",
    gridCol2: "grid grid-cols-2 gap-5 max-[1355px]:grid-cols-4 max-[1243px]:grid-cols-3 max-[981px]:grid-cols-2 max-[534px]:grid-cols-1",
  
    columnContainer: "bg-gray-100 w-full border border-[1px] border-custom-gray rounded-lg",
    columnContainerHeaderFooter: "bg-gray-100 w-full rounded-lg flex my-auto p-[10px]",
    lightHeader: "text-gray-500 text-xs font-semibold",
    w3h3: "w-3 h-3",
    w33h20: "w-[33px] h-[20px]",
    w30h30: "w-[30px] h-[30px]",
    hrStyles: "!my-5 h-[1px] w-full bg-gradient-to-b from-[#A259FF] to-[#613599]",
    ml5mr5: "!ml-5 !mr-5",
    mb5: "!mb-5",
    mt5: "!mt-5",
  };

  export const HeaderStyleClassGroup = {
    headerContainer:
      "flex justify-between items-center max-h-20 min-h-20 border-b border-gray-400 w-screen",
    logo: "w-12 h-12 !mx-[20px]",
    searchContainer:
      "flex justify-between items-center w-full max-w-lg h-10 rounded-lg border border-gray-400 bg-gray-100 px-5 max-[750px]:hidden",
    searchInputWrapper: "flex items-center gap-2.5",
    searchIcon: "w-4 h-4",
    searchInput:
      "border-none bg-transparent outline-none w-full text-base font-inter",
    shortcutHint: "text-sm text-gray-400 font-inter",
    spacer: "w-12 h-12 max-[750px]:hidden",
    menuButtonWrapper: "w-9 h-12 !mx-[20px] !mt-[20px] hidden max-[750px]:block",
    menuLine: "w-full h-[2px] rounded-lg bg-black",
    menuLineSpacing: "!my-[10px]",
  };

  export const SidebarStyleClassGroup = {
    container: `flex flex-col bg-gray-50 max-h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-full p-4 overflow-auto transition-all duration-300 border-r border-gray-300 max-[750px]:hidden`,
    navItem: "flex justify-between items-center gap-2 w-full",
    navContent:
      "flex items-center w-full gap-3 p-3 hover:border hover:border-purple-500 cursor-pointer rounded-md",
    navImage: "w-4 h-4",
    toggleButton: "w-3 h-5 transform transition-transform duration-300 cursor-pointer",
    featuredSection: "flex flex-col gap-5 mt-4",
    featuredHeader: "text-gray-500 text-xs font-semibold",
    featuredItem: "flex justify-between items-center p-2",
    featuredItemImage: "w-8 h-4",
    divider: "border-gray-300",
    savedSection: "flex justify-between items-center",
    savedTitle: "text-gray-500 text-xs font-semibold",
    addIcon: "w-3 h-3",
    savedItemsContainer: "flex gap-5",
    gradientLine: "h-36 w-[1px]",
    savedItemWrapper: "flex flex-col gap-4 w-[80%] mx-5",
    savedItem: "flex justify-between items-center",
    optionsIcon: "",
    viewAllBoards: "font-medium",
    settingsSection: "flex flex-col",
    accountSection: "flex items-center gap-3",
    accountImage: "w-10 h-10 bg-purple-500 rounded-full",
    accountText: "font-medium",
  };