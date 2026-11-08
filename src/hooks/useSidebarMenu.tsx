import { useState } from "react";

const useSidebarMenu = () => {
  const [isOpens, setIsOpens] = useState(false);

  const openMenu = () => {
    setIsOpens(true);
    document.body.classList.add("no-fade");
  };

  const closeMenu = () => {
    setIsOpens(false);
    document.body.classList.remove("no-fade");
  };

  return { isOpens, openMenu, closeMenu };
};

export default useSidebarMenu;
