import styled from "styled-components";
import Link from "next/link";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 2px solid #eaeaea;
  padding: 1em;
`;

export const StyledContainerHeader = styled.div`
  width: 100%;
  height: 100px;
  display: felx;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid RGB(181, 177, 177);
`;

export const StyledContentContainer = styled.div`
  margin-top: 1em;
  min-height: 100%;
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledP = styled.p`
  font-weight: bold;
  font-size: 17px;
  ${(props) =>
    props.small && {
      fontSize: "13px",
    }}
`;

export const StyledBotton = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: 1em;
  background-color: ${(props) => props.theme.colors.header};
  color: white;
  padding: 0.5em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  borde-radius: 0.5em;
`;
