import React from "react";
import "../App.css";
import image from "../images/vividbloc.studio.png";
import image2 from "../images/Rectangle 5.png";
import image1 from "../images/Ellipse 2.png";
import image3 from "../images/8082a3b1cd27952bde704a9f040f82474b4c12cd 1.png";
import image4 from "../images/vividbloc studio (1).png";
import image5 from "../images/Rectangle 64.png";
import image6 from "../images/Rectangle 49.png";
import image7 from "../images/Rectangle 47.png";
import image8 from "../images/Rectangle 46.png";
import image9 from "../images/Rectangle 48.png";
import image10 from "../images/Ellipse 5.png";
import image11 from "../images/skill-icons_linkedin.svg";
import image12 from "../images/line-md_twitter-x-alt.png";
import image13 from "../images/skill-icons_instagram.png";
import image14 from "../images/Rectangle 57.png";
export const Main = () => {
  return (
    <div className="main">
      <div className="First">
        <div className="First-left">
          <img src={image4} />
          <h1>Where Your Story Takes Center Stage</h1>
          <p>Changing the Conversation, One Frame at a Time</p>
          <h2>Discover Your Story</h2>
          <div className="my">
            <img src={image2} />
          </div>
        </div>
        <div className="First-center">
          <img src={image1} />
        </div>
        <div className="First-right">
          <img src={image3} />
          <div className="square">
            <img src={image14} />
          </div>
        </div>
      </div>
      <div className="Second">
        <div className="secondleft">
          <div className="about">
            <h6>ABOUT US</h6> <br />
            <img src={image2} />
          </div>

          <div className="whoare">
            <h1>Who We Are</h1>
            <p>
              Welcome to <span className="blog">ViVidBloc.studio,</span> a realm
              where creativity knows no bounds. We're not just a video
              production agency; we're your creative confidants. Our approach is
              rooted in a unique blend of storytelling and strategy, designed to
              reflect the world as it truly is. We call it .{" "}
              <span className="unified">'Unified Vision' </span> and it's what
              sets us apart.
            </p>
          </div>
        </div>
        <div className="secondright">
          <img src={image5} />{" "}
        </div>
      </div>
      <span className="heading">
        <h4>Our Craft</h4>
      </span>
      <div className="third">
        <div className="thirdleft">
          <img src={image5} />
          <div className="cont">
            <p>
              We don't just make videos; we craft narratives. From concept to
              final cut, we're
              <br />
              committed to adding that 'extra layer' to every project.
            </p>
          </div>
        </div>
        <div className="thirdright">
          <div className="images">
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
            <img src={image9} />
          </div>
        </div>
      </div>
      <div className="four">
        <div className="secondleft fourth">
          <div className="about fourabout">
            <h6>TESTIMONIALS</h6> <br />
            <img src={image2} />
          </div>

          <div className="whoare fourthdata">
            <h1>Voices of Our Tribe</h1>
            <p>
              Meet the brands and individuals who've transformed their stories
              with us.Real
              <br /> narratives, real impact
            </p>
          </div>
        </div>
      </div>
      <div className="fifth">
        <div className="fifthinner">
          <div className="fifthleft">
            <img src={image10} />
          </div>
          <div className="fifthright">
            <h5>Woah.</h5>
            <p>
              “The video is fantastic, and has been really well received by
              those I’ve shared it with. Our CEO described it is ‘sensational’
              and said it made his day.”
            </p>
            <div className="name">Jane Doe</div>
            <div className="comp">SomeCompany LLC.</div>
            <br />
            <div className="link">https://somecompanyllc.co</div>
          </div>
        </div>
      </div>
      <div className="six">
        <h2>Ready to Transform your Narrative</h2>
        <p>
          Let's craft your story together. Reach out for a personalized
          consultation.
        </p>
        <button className="btn">Connect with Us</button>
      </div>
      <div className=" last">
        <div className="lastleft">
          <img src={image} />
        </div>
        <div className="lastcenter">
          <ul>
            <li>About Us</li>
            <li>Our Craft</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="lastright">
          <img src={image11} />
          <img src={image12} />
          <img src={image13} />
        </div>
      </div>
    </div>
  );
};
export default Main;
