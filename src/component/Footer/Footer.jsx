import Koo from "/koo.jpg";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Telegram,
  Twitter,
} from "../../data";
import { DivContainer } from "./Footer.styled";

export const Footer = () => {
  return (
    <DivContainer>
      {Facebook}
      {Instagram}
      {Twitter}
      {GitHub}
      {Linkedin}
      {Telegram}
      <img src={Koo} alt="Koo" width={35} height={35} />
    </DivContainer>
  );
};
