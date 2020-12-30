import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background: linear-gradient(
    180deg,
    #24272b 0.02%,
    rgba(64, 66, 68, 0.83728) 20.83%,
    rgba(199, 195, 188, 0.0625) 73.96%,
    rgba(210, 205, 198, 0.97) 99.98%,
    rgba(207, 202, 195, 0) 99.99%
  );
`;

export const FormWrap = styled.div`
  height: 70%;
  width: 60%;
  display: flex;
  text-align: center;
  justify-content: space-between;

  position: sticky;
  top: 100px;
  left: 300px;

  @media (max-width: 840px) {
    flex-direction: column;
    top: 35px;
    left: 10em;
  }
`;

export const Disp = styled.p`
  color: #24272b;
  font-size: 1rem;
  white-space: nowrap;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #0033aa;
  font-weight: 700;
  font-size: 32px;

  @media (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  border: 20px solid transparent;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 840px) {
    height: 50%;
  }
`;

export const Form = styled.form`
  background: #acace6;
  max-width: 50 0px;

  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 3em 1.5em;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 840px) {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #0c020f;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-top: 8px;
  font-size: 1.5rem;
  color: #0c020f;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #0c020f;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;

  &:active,
  &:hover {
    transform: scale(1.1, 1.2);
  }

  &:disabled {
    transform: none;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #0c020f;
  font-size: 14px;
`;
