import React from 'react';
import cn from 'classnames';

import styles from './AcceptancePage1.module.scss';

export default function AcceptancePage1(props) {
  return (
    <div className={cn(styles.root, 'acceptance-page1')}>
      <div
        className={styles.wrapper5}
        style={{ '--src': `url(${require('assets/523ba500656a4bc435ac54434531e030.png')})` }}
      />
      <div className={styles.wrapper4} />

      <div className={styles.col}>
        <h1 className={styles.hero_title}>Acceptance Rate for Recommended Course</h1>

        <div className={styles.row}>
          <h4 className={styles.highlights4}>TU059</h4>
          <div className={styles.row__item}>
            <div className={styles.rect6} />
          </div>
          <h4 className={styles.highlights3}>Msc Data Science</h4>
        </div>
      </div>

      <div className={styles.rect4} />

      <div className={styles.wrapper2}>
        <div className={styles.row1}>
          <h4 className={styles.highlights31}>Home</h4>
          <div className={styles.row1__spacer} />
          <h4 className={styles.highlights2}>About Us</h4>
          <div className={styles.row1__spacer1} />
          <h4 className={styles.highlights21}>Accomodations</h4>
          <div className={styles.row1__spacer2} />
          <h4 className={styles.highlights22}>Contact Us</h4>
          <div className={styles.row1__spacer} />

          <div className={styles.wrapper3}>
            <div className={styles.col1}>
              <div className={styles.rect3} />
              <div className={styles.rect31} />
              <div className={styles.rect31} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.col2}>
          <div className={styles.row2}>
            <div className={styles.row2__item}>
              <div className={styles.col3}>
                <div className={styles.wrapper1}>
                  <h1 className={styles.title}>UniLifeSimulation</h1>
                </div>

                <h4 className={styles.highlights}>This is a sample demo. Please donot look into it in detail</h4>
                <h3 className={styles.subtitle}>Business Hour</h3>
                <h4 className={styles.highlights1}>Monday - Friday 10:00am - 06:00pm</h4>
              </div>
            </div>
            <div className={styles.row2__spacer} />
            <div className={styles.row2__item1}>
              <div className={styles.col4}>
                <h2 className={styles.medium_title}>Important Links</h2>

                <div className={styles.row3}>
                  <h4 className={styles.highlights11_box}>
                    <div className={styles.highlights11}>
                      <span className={styles.highlights11_span0}></span>
                      <span className={styles.highlights11_span1}>
                        {' '}
                         Our Services\r
                        <br />
                      </span>
                      <span className={styles.highlights11_span2}></span>
                      <span className={styles.highlights11_span3}>
                        {' '}
                         Privacy\r
                        <br />{' '}
                      </span>
                      <span className={styles.highlights11_span4}></span>
                      <span className={styles.highlights11_span5}>
                        {' '}
                        Contacts
                        <br />
                      </span>
                      <span className={styles.highlights11_span6}></span>
                      <span className={styles.highlights11_span7}>
                        {' '}
                         Meet Our Team\r
                        <br />
                      </span>
                      <span className={styles.highlights11_span8}></span>
                      <span className={styles.highlights11_span9}>  Help Desk</span>
                    </div>
                  </h4>
                  <div className={styles.row3__spacer} />
                  <h4 className={styles.highlights11_box}>
                    <div className={styles.highlights11}>
                      <span className={styles.highlights11_span0}></span>
                      <span className={styles.highlights11_span1}>
                        {' '}
                         Our Services\r
                        <br />
                      </span>
                      <span className={styles.highlights11_span2}></span>
                      <span className={styles.highlights11_span3}>
                        {' '}
                         Privacy\r
                        <br />{' '}
                      </span>
                      <span className={styles.highlights11_span4}></span>
                      <span className={styles.highlights11_span5}>
                        {' '}
                        Contacts
                        <br />
                      </span>
                      <span className={styles.highlights11_span6}></span>
                      <span className={styles.highlights11_span7}>
                        {' '}
                         Meet Our Team\r
                        <br />
                      </span>
                      <span className={styles.highlights11_span8}></span>
                      <span className={styles.highlights11_span9}>  Help Desk\r</span>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.col5}>
            <hr className={styles.line1} size={1} />
            <h4 className={styles.highlights5}>All Right Reserve By Fork The Data</h4>
          </div>
        </div>
      </div>

      <img className={styles.image3} src={require('assets/5b7da947290e5c6f83a193dd34fadf9c.png')} alt="alt text" />

      <div className={styles.col6}>
        <h1 className={styles.hero_title1}>Based on your score and interests, you’re likely to get accepted at </h1>
        <h1 className={styles.hero_title2}>Technological University Dublin (TU Dublin)</h1>
        <div className={styles.col6__item}>
          <img className={styles.image6} src={require('assets/7837ad03744b33bd12637c368c8fd3d5.png')} alt="alt text" />
        </div>
      </div>

      <div className={styles.box}>
        <h3 className={styles.subtitle1}>
          Click here to go to previous page
          <br />
        </h3>
      </div>
    </div>
  );
}

AcceptancePage1.inStorybook = true;
