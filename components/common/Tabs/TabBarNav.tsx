import React from "react";

function TabBarNav({ navLabel, classNames = [], onChangeActiveTab }) {
  const classes = [...classNames, "tabs__button"];
  if (!!navLabel)
    return (
      <button
        onClick={() => {
          onChangeActiveTab(navLabel);
        }}
        className={classes.join(" ")}
      >
        {navLabel}
      </button>
    );
  else return <></>;
}

export default TabBarNav;
