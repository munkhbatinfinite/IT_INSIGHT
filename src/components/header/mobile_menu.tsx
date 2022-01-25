import React, { useState, useContext } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { UserContext } from "@/global";
const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const { staticText } = useContext(UserContext);
  return (
    <div className="visible lg:invisible xl:invisible 2xl:invisible">
      <MenuOutlined onClick={showDrawer} style={{ fontSize: 25 }} />
      <Drawer
        title={<div style={{ color: "#295288" }}>Grand Stream</div>}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div
          className="gird cursor-pointer font-medium"
          style={{ color: "#295288" }}
        >
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.products}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.solutions}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.support}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.events}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.education}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.company}
          </div>
          <div className="h-12 p-4 hover:bg-slate-100">
            {staticText.header.blog}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
