import styled from "styled-components";
import navBg from "@/assets/images/nav_bg.png";
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
export default function NavBar({ isFixed }: NavBarProps) {
  return (
    <Container $isFixed={isFixed} $bgUrl={navBg}>
      导航栏
    </Container>
  );
}
NavBar.defaultProps = {
  isFixed: true,
};
