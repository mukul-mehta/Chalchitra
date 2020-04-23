import React, { Fragment, useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Footer from "../../components/Footer/OldFooter";

import "./Archive.scss";
import MediumArticlesList from "./MediumArticlesList.js";
import axios from "axios";

const basecdn = "https://ambitcdn.sgp1.digitaloceanspaces.com/storyImages/";

// const URL = 'https://cms.iit-techambit.in/api/node/article?fields[node--article]=uid,title,created,body&include=uid,field_image,field_image.image,field_image.image.file--file&fields[field_image]=image&fields[file--file]=uri,url'
// const URL = 'https://cms.iit-techambit.in/api/node/article?include=field_image,field_image.image,field_image.image.file--file&fields[field_image]=image&fields[file--file]=uri,url'
const URL =
"https://cms.iit-techambit.in/api/node/article?fields[node--article]=uid,title,created,body,field_image&include=field_image,field_image.image,field_image.image.file--file&fields[field_image]=image&fields[file--file]=uri,url&include=uid";
const headers = {
  headers: {
    Accept: "application/vnd.api+json"
  }
};

const number_month_mapping = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

function get_date(date_from_api) {
  let article_timestamp_arr = date_from_api.split("-");
  let year = article_timestamp_arr[0]
  let article_date = article_timestamp_arr[2].split("T")[0];
  let article_month_number = article_timestamp_arr[1];
  return article_date + " " + number_month_mapping[article_month_number] + ", " + year;
}

function get_min_read(content) {
  let words = content.split(" ");
  let num_of_words = words.length;
  let reading_time = parseInt(num_of_words / 200);
  return reading_time % 10;
}

function get_author_name(included, author_id) {
  let name = included.filter(item => item.id == author_id);
  return name[0]["attributes"]["name"];
}


async function get_image(img_link) {
  let res, img;
  res = await axios.get(img_link);
  if (res.data.data != undefined && res.data.data != null)
    img = res.data.data.attributes.uri.url;
  else 
    img = ''
  return img;
}
export default function Archive() {
  /*
  image
  title
  author
  date
  min_read
  */
  
  const [storiesList, setStoriesList] = useState([]);
 
  useEffect(() => {
   axios
      .get(URL, headers)
      .then(res => {
        let data = res.data.data;
        let included = res.data.included;
        // temp remove it
        console.log('what is the exact ', data)
        data = data.sort((a,b) => new Date(b.attributes.created) - new Date(a.attributes.created))
        data.forEach(item => {
          // replace data[2] with item when all images are added
          get_image(item.relationships.field_image.links.related["href"]).then(img => {
            setStoriesList(storiesList => [...storiesList, {
              id: item.id,
              img: 'https://cms.iit-techambit.in'+img,
              title: item.attributes.title,
              desc: item.attributes.body.summary,
              author: get_author_name(included, item.relationships.uid.data.id),
              date: get_date(item.attributes.created),
              min: get_min_read(item.attributes.body.value),
              content: item.attributes.body.value
            }])
          })
        })

        
      })
      .catch(err => {
        console.log("Archive.js err is ", err);
      });

    }, []);

  return (
    <Fragment>
      <div className="archive">
        {storiesList.map(item => {
          return (
            <ArticleCard
              id={item.id}
              title={item.title}
              desc={item.desc}
              link={item.link}
              date={item.date}
              min={item.min}
              img={item.img}
              author={item.author}
              content={item.content}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
