import "./ContactUs.css"
function ContactUs() {

    return (
      <div className="contact-us">
          <h1 className="title">
            Contact Us
          </h1>
          {/* <p>
          Dr. Anqi Qiu’s Laboratory for Medical Image Data Sciences is under Department of Biomedical Engineering.
          </p> */}

          <div className="row">
            <div className="column-info">
              <p> 
                <b>
                Mailing Address
                </b>
              </p>
              <p>YRDx-AI Laboratory</p>
              <p>Email: <b>yrdx.ai@gmail.com</b></p>
            </div>

            {/* <div className="column-info">
              <p> 
                <b>
                Office Address
                </b>
              </p>
              <p>E1 #08-14</p>
              <p>1 Engineering Drive 2</p>
              <p>Singapore 117576</p>
              <p>Tel:  (65) 6516 7002</p>
              <p>Email: <b>bieqa@nus.edu.sg</b></p>
            </div> */}
          </div>
          {/* <div className="column-info">
            <p> 
              <b>
              Office Address
              </b>
            </p>
            <p>E1 #08-14</p>
            <p>1 Engineering Drive 2</p>
            <p>Singapore 117576</p>
            <p>Tel:  (65) 6516 7002</p>
            <p>Email: <b>bieqa@nus.edu.sg</b></p>
          </div> */}

         
      </div>
    )
  }
  
  export default ContactUs