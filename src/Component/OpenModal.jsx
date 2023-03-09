import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import RightIcon from "./icons/Right-icon";

const dataSelect = [
  {
    id: 1,
    text: "Chemicals & Petrochemicals",
    to: "/chemicals-petrochemicals/",
  },
  {
    id: 2,
    text: "Industrial",
    to: "/industrial/",
  },
  {
    id: 3,
    text: "Liquefied Natural Gas (LNG)",
    to: "/liquefied-natural-gas-lng/",
  },
  {
    id: 4,
    text: "Mining",
    to: "/mining/",
  },
  {
    id: 5,
    text: "Contact",
    to: "/contact/",
  },
];
const App = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="open-modal">
      <Space>
        <Button type="primary" onClick={showDrawer}>
          <MenuFoldOutlined />
        </Button>
      </Space>
      <Drawer
        title={
          <Link onClick={onClose} to="/">
            <img src="/img/log.png" alt="Image" />
          </Link>
        }
        // footer={<FooterOpen />}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        // closeIcon={<CloseOutlined />}
        key={placement}
        width={380}
        extra={
          <Space>
            <Button onClick={onClose}>
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <div>
          {dataSelect.map((item) => (
            <div className="homeSelect-right__container" key={item.id}>
              <Link
                onClick={onClose}
                className="homeSelect-right__container-link"
                to={item.to}
              >
                <p>{item.text}</p>
                <span>
                  <RightIcon />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
export default App;
