import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer d-flex align-items-center justify-content-center" style = {{backgroundColor:'#2D3261', height:'3rem'}}>
      <h6 className="text-center" style = {{color:'#fff'}}>
        {" "}
        Designed and Developed with ❤ by{" "}
        <a href="https://react-portfolio-ruddy.vercel.app/" className="link">Godsheritage</a>
      </h6>
    </div>
  );
};

export default Footer;
