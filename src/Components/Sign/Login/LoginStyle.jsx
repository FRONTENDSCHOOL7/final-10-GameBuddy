import styled from "styled-components";

export const Container = styled.div`
    background-color: #2c2f33;
    width: 100%;
    height: 100vh;
    text-align: center;
    position:relative;
    font-size:12px;
  `

export const LoginForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #767676;
  @media screen and (min-width: 768px) {
      width: 70%;
      height: 70%;
      max-width: 400px;
      max-height: 600px;
      padding: 50px 40px 30px;
      border: 1px solid #afafaf;
      box-shadow: 0px 0px 15px #ffffff70;
      border-radius: 25px;
    }
`

export const LogoImg = styled.img`
  width: 174px;
  height: 103px;
`

export const LogoTitle = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const PTag = styled.p`
  margin:16px 0 2px 0;
  text-align:left;
`

export const InputTag = styled.input`
  width: 100%;
  height: 40px;
  border: 0px;
  box-sizing: border-box;
  padding: 0 2%;
  font-size: 16px;
  background-color: #171717;
  color: #efefef;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 28px;
  border-radius: 44px;
  border: none;
  background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
  font-size: 18px;
  color: #ffffff;
`

export const SnsLoginGroup = styled.div`
  width: 230px;
  margin: 35px auto 0;
  display: flex;
  justify-content: space-between;
`

export const SnsLoginBtn = styled.img`
  width: 55px;
  height: 55px;
  border: none;
`

export const SignupLink = styled.p`
  margin-top: 24px;
  font-size: 15px;
`