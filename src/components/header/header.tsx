import { useContext, useState, useEffect } from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { UserContext } from "@/global";

import MobileMenu from "./mobile_menu";

export function Header() {
  const { staticText } = useContext(UserContext);

  const imageStyle = {
    fontSize: 20,
  };
  const [hover, set_hover] = useState<Number>(4);

  return (
    <div
      className=""
      onMouseEnter={() => set_hover(10)}
      onMouseLeave={() => set_hover(4)}
    >
      <div
        style={{ background: "#295288" }}
        className={`h-${hover}  text-white`}
      >
        <div
          className={`flex justify-end pr-4 pt-2 space-x-5 ${
            hover === 4 ? "invisible" : "visible"
          }`}
        >
          <FacebookOutlined
            className="hover:bg-black font-2xl"
            style={imageStyle}
          />
          <InstagramOutlined
            className="hover:bg-black font-2xl"
            style={imageStyle}
          />
          <TwitterOutlined
            className="hover:bg-black font-2xl"
            style={imageStyle}
          />
          <LinkedinOutlined
            className="hover:bg-black font-2xl"
            style={imageStyle}
          />
        </div>
      </div>
      <div
        style={{ color: "#295288" }}
        className={`flex justify-end text-md space-x-10 m-10 font-semibold invisible  lg:visible xl:visible 2xl:visible sticky`}
      >
        <img
          alt="header-img"
          className="visible absolute left-10 h-8"
          src="https://www.grandstream.com/hs-fs/hubfs/raw_assets/public/Grandstream_Feb_2021/images/logo-grandstream-low-web.png?width=600&name=logo-grandstream-low-web.png"
        />
        <div className="flex cursor-pointer space-x-10 sticky">
          <div>{staticText.header.products}</div>
          <div>{staticText.header.solutions}</div>
          <div>{staticText.header.support}</div>
          <div>{staticText.header.events}</div>
          <div>{staticText.header.education}</div>
          <div>{staticText.header.company}</div>
          <div>{staticText.header.blog}</div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
