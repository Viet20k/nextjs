import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import "./index.scss";

export default function Background() {
  return (
    <div className="background">
      <Avatar
        size={64}
        icon={<UserOutlined />}
        style={{ backgroundColor: "#87d068", lineHeight: "45px" }}
      />
    </div>
  );
}
