import { StyledHeader } from "./StyledHeader";

import { StyledP } from "./StyledHeader.js";

/**
 * Header component.
 * @returns {object} - nextjs component.
 */
export default function Header() {
  return (
    <StyledHeader>
      <StyledP>Welcome to my Oauth2 application</StyledP>
    </StyledHeader>
  );
}
