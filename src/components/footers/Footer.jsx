import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
      <footer className='footer'>
        <ContentWrapper>
          <ul className='menuItems'>
            <li className='menuItem'>Terms Of Use</li>
            <li className='menuItem'>Privacy-Policy</li>
            <li className='menuItem'>About</li>
            <li className='menuItem'>Blog</li>
            <li className='menuItem'>FAQ</li>
          </ul>
          <div className='infoText'>
            <p>
              Dive into the world of entertainment with us! Whether you&apos;re
              a movie buff, a TV show fanatic, or simply looking for something
              new to watch, you&apos;ve come to the right place. Explore our
              vast library of movies and TV shows, covering all genres and
              release dates.
            </p>
            <br />
            Get the inside scoop:
            <ul>
              <li>
                Discover detailed information about your favorite shows and
                films: Read synopses, cast and crew lists, reviews, ratings, and
                more.
              </li>
              <li>
                Stay up-to-date with the latest releases: Browse upcoming movies
                and TV shows, and be notified when they&apos;re available to
                watch.
              </li>
              <li>
                Find hidden gems: Use our advanced search filters to explore our
                library by genre, release date, actors, directors, and more.
              </li>
            </ul>
            <br />
            <p>
              <b>Start your entertainment journey today!</b> Explore our
              website, search for your next watch, and get lost in the world of
              movies and TV shows.
            </p>
          </div>
          <div className='socialIcons'>
            <span className='icon'>
              <FaFacebookF />
            </span>
            <span className='icon'>
              <FaInstagram />
            </span>
            <span className='icon'>
              <FaTwitter />
            </span>
            <span className='icon'>
              <FaLinkedin />
            </span>
          </div>
        </ContentWrapper>
      </footer>
    )
};

export default Footer;