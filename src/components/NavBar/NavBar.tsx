import styled from "styled-components";
import navBg from "@/assets/images/nav_bg.png";
import logo from "@/assets/logo.png";
import { Avatar, Menu, MenuProps } from "antd";
interface NavBarProps {
  isFixed: boolean;
}
const Container = styled.div<{ $isFixed?: boolean; $bgUrl?: string }>`
  position: ${(props) => (props.$isFixed ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  height: 136px;
  background: #fff;
  background-image: url(${(props) => (props.$bgUrl ? props.$bgUrl : "none")});
`;

const items: MenuProps["items"] = [
  {
    label: "首页",
    key: "home",
  },
  {
    label: "学院概况",
    key: "xueyuangaikuang",
    children: [
      {
        label: "学院简介",
        key: "description",
      },
      {
        label: "学院新闻",
        key: "news",
      },
      {
        label: "学院动态",
        key: "dongtai",
      },
      {
        label: "学院荣誉",
        key: "honour",
      },
    ],
  },
];
export default function NavBar({ isFixed }: NavBarProps) {
  return (
    <Container $isFixed={isFixed} $bgUrl={navBg}>
      <div>
        <div className="container">
          <div className="logo" style={{ width: "60px", height: "60px" }}>
            <Avatar src={<img src={logo} alt="logo" />} />
          </div>
        </div>
        <Menu mode="horizontal" items={items} />
      </div>
    </Container>
  );
}
NavBar.defaultProps = {
  isFixed: true,
};
