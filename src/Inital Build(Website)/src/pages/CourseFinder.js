import {
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./CourseFinder.module.css";

const CourseFinder = () => {
  return (
    <div className={styles.courseFinderDiv}>
      <div className={styles.aboutUsDiv}>
        <div className={styles.bGDiv} />
        <div className={styles.shapeDiv} />
        <FormControlLabel
          className={styles.vectorFormControlLabel}
          label=""
          labelPlacement="end"
          control={<Checkbox color="primary" />}
        />
        <div className={styles.footerDiv}>
          <div className={styles.bGDiv1} />
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
            <Button
              className={styles.timeButton}
              sx={{ width: 287 }}
              variant="contained"
              color="primary"
            >
              Monday - Friday 10:00am - 06:00pm
            </Button>
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
        <img className={styles.image22Icon} alt="" src="../image-22@2x.png" />
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.searchDiv}>
          <img className={styles.bGIcon} alt="" src="../bg.svg" />
          <div className={styles.lookingForDiv}>
            <div className={styles.prefereedJobDomain}>
              Prefereed Job Domain
            </div>
            <div className={styles.rectangleDiv1} />
            <div className={styles.jobDomainDiv}>Job Domain</div>
            <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
          </div>
          <div className={styles.lookingForDiv1}>
            <div className={styles.hobbiesDiv}>Hobbies</div>
            <TextField
              className={styles.rectangleTextField}
              sx={{ width: 375.76348876953125 }}
              color="primary"
              variant="standard"
              type="text"
              size="medium"
              margin="none"
            />
            <div className={styles.gamingDiv}>Gaming</div>
            <div className={styles.lookingForDiv2}>
              <div className={styles.prefereedJobDomain}>Spending Limit</div>
              <div className={styles.rectangleDiv1} />
              <div className={styles.div}>2000€ - 4000€</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../vector-11.svg"
              />
            </div>
          </div>
          <Button
            className={styles.btnButton}
            sx={{ width: 231.9931182861328 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <div className={styles.lookingForDiv3}>
            <div className={styles.cAOPointsDiv}>CAO Points</div>
            <div className={styles.rectangleDiv1} />
            <div className={styles.jobDomainDiv}>CAO Points</div>
            <img className={styles.vectorIcon} alt="" src="../vector-12.svg" />
          </div>
          <div className={styles.propertySizeDiv}>
            <div className={styles.fieldOfInterests}>Field of Interests</div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.managementDiv}>Management</div>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="../vector-2.svg"
              />
              <div className={styles.frameDiv} />
            </div>
          </div>
          <div className={styles.propertyLocationDiv}>
            <div className={styles.cityDiv}>City</div>
            <FormControl
              className={styles.groupFormControl}
              sx={{ width: 375.76348876953125 }}
              variant="standard"
            >
              <InputLabel color="primary">Dublin</InputLabel>
              <Select color="primary" size="medium" label="Dublin" />
              <FormHelperText />
            </FormControl>
          </div>
          <div className={styles.completeTheDetailsBelow}>
            Complete the details below
          </div>
        </div>
        <TextField
          className={styles.textTextField}
          sx={{ width: 863.9326782226562 }}
          color="primary"
          variant="filled"
          type="text"
          size="medium"
          margin="none"
        />
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.menuDiv}>
            <div className={styles.rectangleDiv6} />
            <div className={styles.contactUsDiv}>Contact Us</div>
            <div className={styles.pagesDiv}>Pages</div>
            <div className={styles.agentsDiv}>Agents</div>
            <div className={styles.propertyDiv}>Property</div>
            <div className={styles.aboutUsDiv2}>About Us</div>
            <div className={styles.homeDiv}>Home</div>
          </div>
          <div className={styles.logoDiv2}>
            <TextField
              className={styles.ghorBariTextField}
              sx={{ width: 186.71072387695312 }}
              color="primary"
              variant="filled"
              type="text"
              label="Ghor Bari"
              size="medium"
              margin="none"
            />
            <img className={styles.frameIcon} alt="" />
          </div>
          <img className={styles.loginIcon} alt="" src="../login3.svg" />
        </div>
      </div>
      <div className={styles.navDiv}>
        <div className={styles.logoMenuDiv}>
          <div className={styles.bGDiv2} />
          <div className={styles.menuDiv1}>
            <img
              className={styles.offCanvasIcon}
              alt=""
              src="../off-canvas.svg"
            />
            <div className={styles.contactUsDiv1}>Contact Us</div>
            <div className={styles.accomodationsDiv}>Accomodations</div>
            <div className={styles.aboutUsDiv3}>About Us</div>
            <div className={styles.homeDiv1}>Home</div>
          </div>
        </div>
        <div className={styles.infoLoginDiv}>
          <div className={styles.bGDiv3} />
          <Button
            className={styles.loginSignupButton}
            sx={{ width: 133 }}
            variant="contained"
            color="primary"
          >
            Login/Signup
          </Button>
          <Button
            className={styles.emailButton}
            sx={{ width: 142 }}
            variant="contained"
            color="primary"
          >
            01010101010
          </Button>
          <Button
            className={styles.callButton}
            sx={{ width: 262 }}
            variant="contained"
            color="primary"
          >
            unisimulation@mytudublin.ie
          </Button>
        </div>
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <div className={styles.nowThatWeHaveACareerMatc}>
        Now that we have a career match for you, let’s start looking for
        specific courses using our state-of -the-art Recommender System
      </div>
    </div>
  );
};

export default CourseFinder;
