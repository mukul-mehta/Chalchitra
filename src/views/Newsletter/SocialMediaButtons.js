import React from "react";
import "./SocialMediaButtons.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

export default function SocialMediaButtons() {
  return (
    <div id="mySidenav" className="sidenav">
      <a>
        <FacebookShareButton
          url={window.location.href}
          quote={`Become tech savvy in just 5 minutes`}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={50} round />
        </FacebookShareButton>
      </a>
      <a id="twitter-share">
        <TwitterShareButton
          url={window.location.href}
          title={`Become tech savvy in just 5 minutes`}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={50} round />
        </TwitterShareButton>
      </a>
      <a id="linkedin-share">
        <LinkedinShareButton
          title={`Become tech savvy in just 5 minutes`}
          url={window.location.href}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={50} round />
        </LinkedinShareButton>
      </a>
    </div>
  );
}
