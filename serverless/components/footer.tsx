import React from "react";
import Image from "./image";

export const Heart = () => (
  <svg className="icon icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" />
  </svg>
);

const Footer = ({ children }: { children: any }) => (
  <Image width="900" height="128">
    <style>{`
      footer {
        margin: 0;
        padding: 1em 0;
        color: #24292e;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        flex: 1 1 100%;
      }

      footer .container {
        display: flex;

        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        max-width: calc(100% - 32px);
        height: 64px;
        margin: auto;
        padding: 24px 12px;
      }

      p {
        color: #24292e;
        font-size: 1em;
      }

      footer svg {
        width: 1em;
        height: 1em;
        margin: -0.125em 0.125em;
      }

      footer .icon-heart {
        fill: #cb2431;
        display: inline-block;
        animation: heartbeat 3s ease-in-out infinite;
      }

      @keyframes heartbeat {
        0%,
        50%,
        100% {
          transform: scale(1);
        }
        5% {
          transform: scale(1.125);
        }
        10% {
          transform: scale(1.05);
        }
        15% {
          transform: scale(1.25);
        }
      }
    `}</style>
    <footer>
      <div className="container">
        <p>
          Built with <Heart /> by Nate Moore
        </p>
        <p className="license">
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  </Image>
);

export default Footer;
