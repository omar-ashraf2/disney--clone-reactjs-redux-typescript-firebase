import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CtA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/23, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CtA>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const CtA = styled.div`
  margin: 0 auto 2vw;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  margin-bottom: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 22px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
  line-height: 1.5;
  font-size: 14px;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
