import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  social: { twitter, facebook, linkedin, github, medium, instagram, soundcloud },
}) => {
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const instagramPart = instagram ? <SocialIcons.Instagram userName={instagram} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  const soundcloudPart = soundcloud ? <SocialIcons.Soundcloud userName={soundcloud} /> : null;

  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
      <div>
        {twitterPart}
        {facebookPart}
        {instagramPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
        {soundcloudPart}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
    soundcloud: PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    twitter: null,
    facebook: null,
    instagram: null,
    linkedin: null,
    github: null,
    medium: null,
    soundcloud: null,
  },
};

export default TeamMember;
