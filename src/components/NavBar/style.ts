import styled from "styled-components";
interface DynamicsProps {
  isFiexed: boolean;
  bgUrl?: string;
}

export const Container = styled.div<DynamicsProps>`
  position: relative;
`;
