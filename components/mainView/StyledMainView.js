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
  justify-content: start;
  border-bottom: 1px solid RGB(181, 177, 177);
`;

export const StyledContentContainer = styled.div`
  margin-top: 1em;
  min-height: 100%;
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Activity = styled.div`
  width: 90%;
  height: 50px;
  display: felx;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eaeaea;
`;

export const StyledImage = styled.div`
  ${(props) =>
    props.imageUrl && {
      backgroundImage: `url(${props.imageUrl})`,
      height: "80px",
      width: "80px",
    }}
  border-radius: 10px;
  margin-right: 10px;
`;

export const StyledInfoDiv = styled.div`
  width: 90%;
  height: 100px;
  display: felx;
  align-items: center;
  justify-content: space-between;
`;

export const StyledP = styled.p`
  font-weight: bold;
  font-size: 17px;
  ${(props) =>
    props.small && {
      fontSize: "13px",
    }}
`;

export const SubInfoDiv = styled.div`
  width: 90%;
  height: 50px;
  display: felx;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eaeaea;
`;

export const Pdiv = styled.div`
  margin-top: 0.5em;
  height: 50px;
  width: 20%;
  text-align: center;
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
