import styles from "./AcademicsPage.module.css";

const AcademicsPage = () => {
  return (
    <div className={styles.academicsPageDiv}>
      <div className={styles.aboutUsDiv}>
        <div className={styles.shapeDiv} />
        <img className={styles.vectorIcon} alt="" src="../vector10.svg" />
        <div className={styles.footerDiv}>
          <div className={styles.bGDiv} />
          <b className={styles.allRightReserveByForkThe}>
            All Right Reserve By Fork The Data
          </b>
          <div className={styles.rectangleDiv} />
          <div className={styles.importantLinksDiv}>
            <div className={styles.ourServicesPrivacyConta}>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Our Services</b>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Privacy</b>
              </p>
              <p className={styles.ourServicesP}>
                <b>{` `}</b>
                <span className={styles.span}></span>
                <b className={styles.span}> Contacts</b>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Meet Our Team</b>
              </p>
              <p className={styles.helpDesk}>
                <span className={styles.span}></span>
                <b> Help Desk</b>
              </p>
            </div>
            <div className={styles.ourServicesPrivacyConta1}>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Our Services</b>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Privacy</b>
              </p>
              <p className={styles.ourServicesP}>
                <b>{` `}</b>
                <span className={styles.span}></span>
                <b className={styles.span}> Contacts</b>
              </p>
              <p className={styles.ourServicesP}>
                <span className={styles.span}></span>
                <b> Meet Our Team</b>
              </p>
              <p className={styles.helpDesk}>
                <span className={styles.span}></span>
                <b> Help Desk</b>
              </p>
            </div>
            <b className={styles.importantLinksB}>Important Links</b>
          </div>
          <div className={styles.logoDiv}>
            <div className={styles.timeDiv}>
              <b className={styles.mondayFriday1000am060}>
                Monday - Friday 10:00am - 06:00pm
              </b>
              <b className={styles.businessHour}>Business Hour</b>
            </div>
            <div className={styles.aboutUsDiv1}>
              <b className={styles.thisIsASampleDemoPlease}>
                This is a sample demo. Please donot look into it in detail
              </b>
              <div className={styles.logoDiv1}>
                <b className={styles.uniLifeSimulationB}>UniLifeSimulation</b>
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
          <img className={styles.bGIcon} alt="" src="../bg1.svg" />
          <div className={styles.loginSignupDiv}>
            <img className={styles.loginIcon} alt="" src="../login.svg" />
            <img className={styles.user41} alt="" src="../user-4-17.svg" />
            <div className={styles.loginSignupDiv1}>Login/Signup</div>
          </div>
          <div className={styles.emailDiv}>
            <div className={styles.div}>01010101010</div>
            <img className={styles.call1Icon} alt="" src="../call-19.svg" />
          </div>
          <div className={styles.callDiv}>
            <div className={styles.unisimulationmytudublinieDiv}>
              <p className={styles.ourServicesP}>unisimulation@mytudublin.ie</p>
            </div>
            <img
              className={styles.paperPlane11}
              alt=""
              src="../paperplane-1-19.svg"
            />
          </div>
        </div>
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <img className={styles.ellipseIcon} alt="" />
      <div className={styles.image15Div} />
      <div className={styles.bannerDiv}>
        <div className={styles.bGDiv2} />
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="../mask-group2@2x.png"
        />
        <b className={styles.yourAcademicsB}>Academic Modules</b>
      </div>
      <div className={styles.takeALookAtSomeSampleAss}>
        Take a look at some sample assignments that you might get as part of
        your course. These are just to give you a clearer picture of what you
        can expect while undertaking this course.
      </div>
      <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
      <div className={styles.theAboveIsASampleAssignme}>
        <span
          className={styles.theAboveIs}
        >{`The above is a sample assignment from the Secure Systems `}</span>
        <span className={styles.developmentSpan}>Development</span>
        <span className={styles.theAboveIs}> module.</span>
      </div>
      <img className={styles.image21Icon} alt="" src="../image-211@2x.png" />
      <div className={styles.theAboveAssignmentIsFromT}>
        The above assignment is from the Scientific Research and Literature
        Module.
      </div>
    </div>
  );
};

export default AcademicsPage;
