import {
  StyledContainer,
  StyledContainerHeader,
  StyledContentContainer,
  StyledLink,
  StyledBotton,
} from "./StyledLogin.js";

/**
 * Login component.
 * @returns {object} - nextjs component.
 */
export default function Login() {
  return (
    <StyledContainer>
      <StyledContainerHeader>
        <h1>To use the application, please sign in with your GitLab account</h1>
      </StyledContainerHeader>
      <StyledContentContainer>
        <StyledBotton type="button">
          <StyledLink href={"/api/v1/login"}>
            Sign in with your GitLab account
          </StyledLink>
        </StyledBotton>
      </StyledContentContainer>
    </StyledContainer>
  );
}
