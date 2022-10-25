import styles from "./LandingPage2.module.css";

const LandingPage2 = () => {
  return (
    <div className={styles.landingPage2}>
      <img
        className={styles.maxresdefault1Icon}
        alt=""
        src="../maxresdefault-1@2x.png"
      />
      <div className={styles.aboutUsDiv}>
        <div className={styles.shapeDiv} />
        <div className={styles.ourInterestProfillerTestIs}>
          Our Interest Profiller test is designed for students who are unsure of
          what kind of career they want in the future, and guide them into
          choosing a particular career.
        </div>
        <b className={styles.letsStartWithAInterestPr}>
          Let’s start with a Interest Profiller Test
        </b>
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        <div className={styles.footerDiv}>
          <div className={styles.bGDiv} />
          <div className={styles.allRightReserveByForkThe}>
            All Right Reserve By Fork The Data
          </div>
          <div className={styles.rectangleDiv} />
          <div className={styles.importantLinksDiv}>
            <div className={styles.ourServicesPrivacyConta}>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Our Services</span>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Privacy</span>
              </p>
              <p className={styles.ourServicesP}>
                <span>{` `}</span>
                <span className={styles.span}></span>
                <span className={styles.span}> Contacts</span>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Meet Our Team</span>
              </p>
              <p className={styles.helpDesk}>
                <span className={styles.span}></span>
                <span> Help Desk</span>
              </p>
            </div>
            <div className={styles.ourServicesPrivacyConta1}>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Our Services</span>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Privacy</span>
              </p>
              <p className={styles.ourServicesP}>
                <span>{` `}</span>
                <span className={styles.span}></span>
                <span className={styles.span}> Contacts</span>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <span> Meet Our Team</span>
              </p>
              <p className={styles.helpDesk}>
                <span className={styles.span}></span>
                <span> Help Desk</span>
              </p>
            </div>
            <div className={styles.importantLinksDiv1}>Important Links</div>
          </div>
          <div className={styles.logoDiv}>
            <div className={styles.timeDiv}>
              <div className={styles.mondayFriday1000am060}>
                Monday - Friday 10:00am - 06:00pm
              </div>
              <div className={styles.businessHourDiv}>Business Hour</div>
            </div>
            <div className={styles.aboutUsDiv1}>
              <div className={styles.thisIsASampleDemoPlease}>
                This is a sample demo. Please donot look into it in detail
              </div>
              <div className={styles.logoDiv1}>
                <div className={styles.uniLifeSimulationDiv}>
                  UniLifeSimulation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navDiv}>
        <div className={styles.logoMenuDiv}>
          <div className={styles.bGDiv1} />
          <div className={styles.menuDiv}>
            <img
              className={styles.offCanvasIcon}
              alt=""
              src="../off-canvas.svg"
            />
            <div className={styles.contactUsDiv}>Contact Us</div>
            <div className={styles.accomodationsDiv}>Accomodations</div>
            <div className={styles.aboutUsDiv2}>About Us</div>
            <div className={styles.homeDiv}>Home</div>
          </div>
        </div>
        <div className={styles.infoLoginDiv}>
          <div className={styles.bGDiv2} />
          <div className={styles.loginSignupDiv}>
            <img className={styles.loginIcon} alt="" src="../login.svg" />
            <img className={styles.user41} alt="" src="../user-4-1.svg" />
            <div className={styles.loginSignupDiv1}>Login/Signup</div>
          </div>
          <div className={styles.emailDiv}>
            <div className={styles.div}>01010101010</div>
            <img className={styles.call1Icon} alt="" src="../call-1.svg" />
          </div>
          <div className={styles.callDiv}>
            <div className={styles.unisimulationmytudublinieDiv}>
              <p className={styles.ourServicesP}>unisimulation@mytudublin.ie</p>
            </div>
            <img
              className={styles.paperPlane11}
              alt=""
              src="../paperplane-1-1.svg"
            />
          </div>
        </div>
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <div className={styles.welcomeToUniLifeSimulation}>
        Welcome to UniLifeSimulation. We aim to provide a one-stop portal for
        you to explore your dream course using our State-of-the-art AI
        Recommender System. At the end of this journey, you will have a variety
        of course choices and information about your suitable courses
      </div>
    </div>
  );
};

export default LandingPage2;
