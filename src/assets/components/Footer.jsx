import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const copy = `Copyright © 2022 Resellme.`;
  const [footer] = useState([
    {
      footerTitle: "Libraries & Plugins",
      footerTitle2: "SDKs",
      footerTitle3: "WHMCS Plugin",
      footerTitle4: "WordPress Plugin ",
      id: 1,
    },
    {
      footerTitle: "Community",
      footerTitle2: "Facebook",
      footerTitle3: "Developer Forums",
      footerTitle4: "Twitter ",
      id: 2,
    },
    {
      footerTitle: "More",
      footerTitle2: "Blog",
      footerTitle3: "Docs",
      footerTitle4: "About Us",
      footerTitle5: "Terms of Service",
      footerTitle6: "Privacy Policy",
      id: 3,
    },
  ]);
  return (
    <>
      <footer>
        <div className="container-fluid outerFooter">
          <div className="innerFooter d-flex justify-content-between">
            {footer.map((titles) => (
              <div className="row footerItem" key={titles.id}>
                <h3>{titles.footerTitle}</h3>
                <NavLink className='link'>{titles.footerTitle2}</NavLink>
                <NavLink>{titles.footerTitle3}</NavLink>
                <NavLink>{titles.footerTitle4}</NavLink>
                <NavLink>{titles.footerTitle5}</NavLink>
                <NavLink>{titles.footerTitle6}</NavLink>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center">{copy}</p>
      </footer>
    </>
  );
};

export default Footer;
