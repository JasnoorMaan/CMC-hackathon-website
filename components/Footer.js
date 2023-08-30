const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap bg-[#0c0c0c] justify-evenly p-4 text-white md:">
        <h1 className="text-4xl font-bold p-8">Hacking Health 1.0</h1>
        <div className="flex flex-col align-middle justify-center">
          <div className="text-white leading-8">
            <a href="/">About</a>
          </div>
          <div className="text-white leading-8">
            <a href="/">Schedule</a>
          </div>
          <div className="text-white leading-8">
            <a href="/">Rules</a>
          </div>
          <div className="text-white leading-8">
            <a href="/">Contact Us</a>
          </div>
        </div>

        <div className="m-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6622730186955!2d75.53326897530701!3d31.395874574271236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1692982659398!5m2!1sen!2sin"
            style={{ border: "0", borderRadius: "20px", padding: "1rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footerLast flex justify-around bg-[#0c0c0c] py-4 text-white">
        <div className="leftLast">
          <p>
            Copyright@{new Date().getFullYear()} All Rights Reserved Rtist NITJ
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
