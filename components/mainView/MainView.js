import { useState, useEffect } from "react";
import loadUser from "../../utils/loadUser";
import formateDate from "../../utils/formatDate";
import {
  StyledContainer,
  StyledContainerHeader,
  StyledImage,
  StyledInfoDiv,
  StyledP,
  StyledContentContainer,
  Activity,
  SubInfoDiv,
  Pdiv,
  StyledBotton,
  StyledLink,
} from "./StyledMainView.js";

/**
 * Main view where the all user data will be presented.
 * @param {object} token - the user token.
 * @returns {object} - nextjs component.
 */
export default function MainView({ token }) {
  const [user, setUser] = useState({});

  useEffect(async () => {
    setUser(await loadUser(token));
  }, [user.id]);

  return (
    <StyledContainer>
      <StyledContainerHeader>
        <StyledImage imageUrl={user.avatar_url}></StyledImage>
        <StyledInfoDiv>
          <StyledP small>{user.name}</StyledP>
          <StyledP small>{user.username}</StyledP>
          <StyledP small>{user.id}</StyledP>
          <StyledP small>{user.email}</StyledP>
          <>
            {user.last_activity_on ? (
              <StyledP small>
                Last gitLab activity: {user.last_activity_on}
              </StyledP>
            ) : (
              <StyledP>loading...</StyledP>
            )}
          </>
          <StyledBotton>
            <StyledLink href="/api/v1/signout">Sign out</StyledLink>
          </StyledBotton>
        </StyledInfoDiv>
      </StyledContainerHeader>
      <StyledContentContainer>
        <>
          <SubInfoDiv>
            <Pdiv>
              <StyledP>Action Name</StyledP>
            </Pdiv>
            <Pdiv>
              <StyledP>Created at</StyledP>
            </Pdiv>
            <Pdiv>
              <StyledP>Target Title</StyledP>
            </Pdiv>
            <Pdiv>
              <StyledP>Target Type</StyledP>
            </Pdiv>
          </SubInfoDiv>
          {user.activities ? (
            user.activities[0].map(function (item, i) {
              return (
                <Activity key={item.id}>
                  <Pdiv>
                    <StyledP small>{item.action_name} </StyledP>
                  </Pdiv>
                  <Pdiv>
                    <StyledP small>
                      {Object.keys(formateDate(new Date(item.created_at))).map(
                        (key, i) => {
                          return formateDate(new Date(item.created_at))[key];
                        }
                      )}
                    </StyledP>
                  </Pdiv>
                  <Pdiv>
                    <StyledP small>
                      {item.target_title
                        ? item.target_title.substring(0, 30)
                        : item.target_title}
                    </StyledP>
                  </Pdiv>

                  <Pdiv>
                    <StyledP small>{item.target_type} </StyledP>
                  </Pdiv>
                </Activity>
              );
            })
          ) : (
            <StyledP>loading...</StyledP>
          )}
        </>
      </StyledContentContainer>
    </StyledContainer>
  );
}
