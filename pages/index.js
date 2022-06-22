import { withIronSessionSsr } from "iron-session/next";
import Head from "next/head";
import {
  StyledContainer,
  StyledMain,
} from "../components/homeStyles/StyledIndex";
import Login from "../components/login/Login";
import MainView from "../components/mainView/MainView";

/**
 * Home component.
 * @param {object} props - Properties.
 * @returns {object} - nextjs component.
 */
export default function Home(props) {
  return (
    <StyledContainer>
      <Head>
        <title>Assignment Oath</title>
        <meta
          name="Assignment Wt1 Oauth"
          content="Application for Oauth protocol"
        />
      </Head>
      <StyledMain>
        {props.token ? <MainView token={props.token} /> : <Login />}
      </StyledMain>
    </StyledContainer>
  );
}

/**
 * Function to authenticate request on every page request.
 * @param {request} context - The request context;
 * @returns {object} props.
 */
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let token = req.session.token;

    // Make sure there's a token in the session, else set it to null.
    token = token ? token : null;

    return {
      props: {
        token: token,
      },
    };
  },
  // Cookie options to read the cookie.
  {
    cookieName: "token",
    password: process.env.cokie_pswd,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
