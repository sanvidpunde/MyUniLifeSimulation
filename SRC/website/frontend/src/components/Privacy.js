import React, { useEffect } from 'react';

const Privacy = () => {

  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Privacy Policy</div>
              <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container privacy">
            <div className="title text-left">Introduction:</div>
            <div className="grey-border"></div>
            <p className="mb-60">By releasing this privacy statement, UniLife has demonstrated its strong commitment to respecting the privacy of website visitors. It applies to any website that linked you to this page, including the official website of the college. Numerous colleges in Ireland may use personal information, also referred to as "personal data". Sometimes external links to other websites are not immediately apparent. On the UniLife domain, there might be some webpages over which the University has no editorial authority or direct control. These sites include, among other things, websites for student organizations. Even while UniLife encourages adherence to this web privacy statement at such sites, please study the privacy statements of individual websites or contact the individuals in charge of such websites to learn more about the policies and processes they adhere to.</p>
            <div className="title text-left">General Statement:</div>
            <div className="grey-border"></div>
            <p className="mb-60">Your right to privacy is fully respected by UniLifeSimulation, and we work hard to protect the privacy rights of anyone who shares information with us. In compliance with the General Data Protection Regulation (GDPR), which went into effect in May 2018, any personal information you give us for this project will be handled with the highest levels of security and confidentiality.</p>
            <div className="title text-left">Processing of Information:</div>
            <div className="grey-border"></div>
            <p>We may gather certain personally identifiable information/data from users and visitors to our websites. The most frequent information we gather comprises of users email and users full name which we collect during Sign Up. Collected passwords are stored in encrypted format.</p>
            <p>User's personally identifying information will only be collected from us if they willingly provide it to us. However, anyone can visit our website anonymously.</p>
            <p>User's always have the option to withhold personally identifiable information, although doing so can preclude them from taking part in the bulk of site-related activities.</p>
            <p className="mb-60">We use cookies to enable persistent session feature. This keeps logged in users authenticated even when they close our website, so they do not have to login again when they open our website.</p>
            <div className="title text-left">Security:</div>
            <div className="grey-border"></div>
            <p className="mb-60">We put in place the required physical and technical security measures, as well as awareness training, and we periodically evaluate these measures to safeguard the protection of the personal data that has been supplied to us.</p>
          </div>
      </div>
    </React.Fragment>
  );
}

export default Privacy;