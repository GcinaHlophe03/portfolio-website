import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/gcinanontobeko"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/GcinaHlophe03"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        id="profile-link"
        href="www.linkedin.com/in/gcina-hlophe-bb8962242"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Linkedin Profile"
      >
        {' '}
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};

export default SocialLinks;
