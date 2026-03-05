import { ButtonLink } from "../components/ButtonLink";
import { Layout } from "../components/Layout";
import { Row } from "../components/Row";

export function HomePage() {
  return (
    <Layout title="My Favorite Places">
      <p>Welcome to the app. Sign in or create an account to manage your saved places.</p>
      <Row>
        <ButtonLink to="/signin">Sign In</ButtonLink>
        <ButtonLink to="/signup">Create Account</ButtonLink>
      </Row>
    </Layout>
  );
}
