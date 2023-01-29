import React, { useState } from "react";
import { Link } from "react-scroll";

function SideNav() {
  const a = [1, 2, 3, 4, 5, 6];
  const [selected, setSelected] = useState(1);
  return (
    <div className="sidenav">
      {a.map((item, i) => {
        return (
          <div className="sidenav-item" key={item}>
            <Link
              // href={`#${item}`}
              style={{ cursor: "pointer" }}
              activeClass="link-active"
              activeStyle={{
                color: "#cb51f3",
              }}
              to={`${item}`}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >{`0${item}`}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideNav;
