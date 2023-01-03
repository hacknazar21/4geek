import React from "react";

function FilterMenuItem({ className, title, children }) {
  const classes = ["filter-menu-item", className];
  return (
    <div className={classes.join(" ")}>
      <h3 className="filter-menu-item__title">{title}</h3>
      <div className="filter-menu-item__actions">
        {React.Children.map(children, (child) => (
          <div className="filter-menu-item__action">{child}</div>
        ))}
      </div>
    </div>
  );
}

export default FilterMenuItem;
