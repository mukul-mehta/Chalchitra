import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import config from "../../config";
import integrate from "../../integrate";
import renderHTML from "react-render-html";
import "./ReadingPage.scss";


export default function ReadingPage(props) {

  let post = {
    title : "__init__",
    author: "Mukul Mehta",
    date: "12 May 2020",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
  console.log(props.match.params.id)

  return (
    <div>
      <div className="reading-page">
        <h1 className="post-title">{post.title}</h1>
        <h3 className="post-author">{post.author}</h3>
        <h3 className="post-date">{post.date}</h3>
        <div className="text">{renderHTML(post.content)}</div>
      </div>
    </div>
  );
}
