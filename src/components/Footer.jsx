import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
       

        <h2>Neeraj Mishra </h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCQNUKExFQsfZI1R49dTGbzg" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/neeraj_nrk/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/neeraj0422" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;