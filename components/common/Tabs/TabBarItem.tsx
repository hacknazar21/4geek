import React, { useEffect } from "react";
import { useRouter } from "next/router";

function TabBarItem({
  children,
  label,
  activeTab = 0,
  className = "",
  ...attrs
}) {
  const router = useRouter();
  useEffect(() => {}, [router]);
  const classes = ["tab", activeTab === label ? "active" : "", className];
  return (
    <div className={classes.join(" ")} {...attrs}>
      {children}
    </div>
  );
}

export default TabBarItem;
