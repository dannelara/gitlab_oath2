import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  top: 0;
  width: 100vw;
  min-height: 75px;
  background-color: ${(props) => props.theme.colors.header};
  margin: 0;
  left: 0;
  text-align: center;
  z-index: 800;
  color: ${(props) => props.theme.colors.text};
`;

export const StyledP = styled.p`
  font-weight: bold;
  font-size: 17px;
  ${(props) =>
    props.small && {
      fontSize: "13px",
    }}
`;
