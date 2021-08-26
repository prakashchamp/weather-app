import React from "react";
import "./tabNav.scss";

export const TabNav = (props: any) => {
  const { callBack } = props;
  const [selTab, setselTab] = React.useState("Day");
  const handleNavSelect = (tabName: string) => {
    setselTab(tabName);
    callBack(tabName);
  };
  const navItem = ["Day", "History", "Forecast"];
  return (
    <div className="tab-nav-container">
      <nav>
        <ul className="tab-nav">
          {navItem.map((item) => {
            return (
              <li
                key={item}
                className={selTab === item ? "tab-active" : "tab"}
                onClick={() => handleNavSelect(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
