import React, { useState, useEffect } from "react";
import SocialMediaButtons from "./SocialMediaButtons";
import SubscribeInput from "./SubscribeInput";
import renderHTML from "react-render-html";

import config from "../../config";
import integrate from "../../integrate";

import LoaderSVG from "assets/img/loader.svg";

import "./NewsletterPage.scss";

const newsletterEndpoint = config.endpoints.newsletter.getLatest;

export default function Newsletter() {
  const [html, SetHtml] = useState(
    "<div style='margin-top: 30vh;margin-left: 15vh;'><img style='height:16vh;' src='" +
      LoaderSVG +
      "' /></div>"
  );

  useEffect(() => {
    const fetchData = async () => {
      let res = await integrate.getData(newsletterEndpoint, {});
      if (res.data == undefined) window.location.reload();
      if (res.data.resource.newsletter_content == undefined)
        window.location.reload();
      SetHtml(res.data.resource.newsletter_content);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="newsletter">
          {renderHTML(html)}
          <SocialMediaButtons />
        </div>
        <SubscribeInput />
      </div>
    </div>
  );
}
