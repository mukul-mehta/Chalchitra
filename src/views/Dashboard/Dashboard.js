import React from 'react';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from 'components/Card/CardHeader';
import Typography from 'material-ui/styles/typography';

const base_url = "http://localhost:5000"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Dashboard() {
  let data = {
    username : 'metamehta',
    first_name: 'Mukul',
    last_name: "Mehta",
    fb_handle : "mukul.amehta",
    twitter_handle: "metamehta_",
    instagram_handle: "_metamehta",
    occupation: "Student",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourites: {
      'movie' : 'The Big Short',
      'actor': 'Brad Pitt',
      'genre' : 'Comedy'
    },
    movie_list : [
      {
        "id" : 1,
        "imdb_ID" : "tt1596363",
        'title' : "The Big Short",
        "year" : 2015
      },
      {
        "id" : 2,
        "imdb_ID" : "tt0419058",
        'title' : "Phir Hera Pheri",
        "year" : 2006
      }
    ]
  };

  return (
    <div className='dashboard'>
      <div className='intro container'>
        <div className='data-panel'>
          <h1 className='title'>{data.first_name + " " + data.last_name}</h1>
          <h3 className='title'>{'@' + data.username}</h3>
          <br />
            <div className='bioPanel'>
              <h3 className='title'>{data.bio}</h3>
          </div> 
          <br />
          
          <Card style={{ "background-color": "#002233"}} variant="outlined" className = "infoCard">
            <CardContent>
              <div className="infoText">
              <h3 style={{color: "#ADFF2F"}}> {"{"} </h3>
              <h3 style={{color: "#388E8E"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"Favourite Movie" : ' + data.favourites.movie} </h3>
              <h3 style={{color: "#388E8E"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"Favourite Actor" : ' + data.favourites.actor} </h3>
              <h3 style={{color: "#388E8E"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"Favourite Genre" : ' + data.favourites.genre} </h3>
              <h3 style={{color: "#ADFF2F"}}> {"}"} </h3>
              </div>

            </CardContent>
          </Card>
          </div> 
      
        <div className='profile-panel'>
          <img height="360" width="360" src='https://avatars2.githubusercontent.com/u/43145555' alt='' />
          <br />
          <h3 style={{'margin-left' : '5rem'}}>{data.occupation}</h3>
          <section className='container share-links'>
            <div className='links'>
              <a href={"https://fb.com/" + data.fb_handle}><FontAwesomeIcon size="2x" icon={faFacebook}></FontAwesomeIcon></a>
              <a href={"https://twitter.com/" + data.fb_handle}><FontAwesomeIcon size="2x" icon={faTwitter}></FontAwesomeIcon></a>
              <a href={"https://instagram.com/" + data.fb_handle}><FontAwesomeIcon size="2x" icon={faInstagram}></FontAwesomeIcon></a>
          </div>
        </section>
        </div>
        </div>

        <br />
        <div className="cardList">
          <Card style={{ "background-color": "#002233"}} variant="outlined" className = "movieCard">
          <h2>Movie List</h2> <hr />
            <CardContent>
              <div className="infoText">
              <h3 > {"["} </h3>
                  {data.movie_list.map(function(value){
                    return <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={base_url + "/movie/" + value.imdb_ID}>{value.title}</a></h3>;
                  })}
              <h3> {"]"} </h3>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>  
  );
}