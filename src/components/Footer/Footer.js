import React from 'react';
import FooterCopyRight from './FooterCopyRight';
import Footersubscribe from './FooterSubscribe';
import FooterMain from './MainFooter';

function Footer() {
  return (
    <div className="footer">
      <Footersubscribe />
      <FooterMain />
      <FooterCopyRight />
    </div>
  );
}

export default Footer;