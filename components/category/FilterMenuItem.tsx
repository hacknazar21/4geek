import React, { useState } from "react";

function FilterMenuItem({
  className,
  title = null,
  children,
  isMobile = false,
}) {
  const classes = ["filter-menu-item", className];
  const [currentTab, setCurrentTab] = useState<number>(-1);
  function changeTabHandler(id: number) {
    currentTab === id ? setCurrentTab(-1) : setCurrentTab(id);
  }
  if (!isMobile)
    return (
      <div className={classes.join(" ")}>
        {!!title && <h3 className="filter-menu-item__title">{title}</h3>}
        <div className="filter-menu-item__actions">
          {React.Children.map(children, (child, id) => (
            <div className="filter-menu-item__action">
              {React.cloneElement(child, {
                id,
                changeTabHandler,
                isOpen: id === currentTab,
              })}
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <>
      {React.Children.map(children, (child, id) => (
        <>
          {React.cloneElement(child, {
            id,
            changeTabHandler,
            isOpen: id === currentTab,
          })}
        </>
      ))}
    </>
  );
}

export default FilterMenuItem;
