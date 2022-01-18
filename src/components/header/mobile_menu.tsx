import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="visible lg:invisible xl:invisible 2xl:invisible">
      <MenuOutlined onClick={showDrawer} style={{ fontSize: 25 }} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div>Menu content 1</div>
        <div>Menu content 2</div>
        <div>Menu content 3</div>
        <div>Menu content 4</div>
        <div>Menu content 5</div>
      </Drawer>
    </div>
  );
};

export default App;
