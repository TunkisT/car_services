import FooterBlock1 from "./Footer-block-1";
import FooterBlock2 from "./Footer-block-2";
import FooterBlock3 from "./Footer-block-3";
const yr = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <FooterBlock1 />
            <FooterBlock2 />
            <FooterBlock3 />
          </div>
          <div className="footer-bottom">
            Copyright © { yr } | Hext
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;