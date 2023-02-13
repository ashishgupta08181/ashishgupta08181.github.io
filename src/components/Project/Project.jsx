import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "./Project.module.css";
import Capture from '../../assets/capture.jpg';
// import Capture1 from '../../assets/Capture1.png';
import capture2 from '../../assets/capture2.jpg';
// import Capture3 from "../Skill/image/Capture3.PNG"



const Projects = () => {
  return (
      <section className={styles.project} id="Projects" >
        <div className={styles.content}>
          <div className={styles.title}>
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className={styles.boxes}>
            {/* first project */}
            <div className={styles.box}>
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={Capture}
                  alt=""
                />
              </div>
              <div className={styles.topic}>DNA India</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}>
                <p>
                    
                DNA India Covers all the latest and breaking news.

              
              </p></div>
              <p>
                Teckstack: HTML | JavaScript |  CSS
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/AMARDEEP115/DNA-India-Clone"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className={styles.box} id="box">
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={capture2}
                  alt=""
                />
              </div>
              <div className={styles.topic}>Beauty Bebo</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}>
                <p>
                Beauty Bebo is a website for shopping for Beauty and Cosmetic Products
                
              </p></div>
              <p>
                Teckstack: JavaScript | React | CSS | HTML
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/arun-developers/rapid-competition-275"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://the-awesome-piryanshu88-site.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
          </div>
      
      {/* below group */}
            
        </div>
      </section>
  
  );
};

export default Projects;