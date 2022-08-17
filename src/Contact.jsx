import React from "react";
import contactImg from './images/drop-right.jpg';

const Contact = () => {
  return (
    <>
      <div className="page-title-area page-title-five">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="page-title-item">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <i className="icofont-simple-right"></i>
                        </li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="location-area">
        <div className="container">
            <div className="row location-wrap">
                <div className="col-sm-6 col-lg-4">
                    <div className="location-item">
                        <i className="icofont-location-pin"></i>
                        <h3>Location</h3>
                        <p>Narayana Super Speciality Hospital, Gurugram, Haryana</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="location-item">
                        <i className="icofont-ui-message"></i>
                        <h3>Email</h3>
                        <ul>
                            <li>mriduldas83@gmail.com</li>
                            <li>mriduldas83@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                    <div className="location-item">
                        <i className="icofont-ui-call"></i>
                        <h3>Phone</h3>
                        <ul>
                            <li>+91 88744 47836</li>
                            <li>+91 88744 47836</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="drop-area pt-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7 p-0">
                    <div className="drop-item drop-img">
                        <div className="drop-left">
                            <h2>Drop your message for any info or question.</h2>
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" required="" data-error="Please enter your name" placeholder="Name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required="" data-error="Please enter your email" placeholder="Email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required="" data-error="Please enter your number" className="form-control" placeholder="Phone" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required="" data-error="Please enter your subject" placeholder="Subject" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="5" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12">
                                        <button type="submit" className="drop-btn disabled" style={{ pointerEvents: 'all', cursor: 'pointer'}}>
                                            Send
                                        </button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 p-0">
                    <div className="speciality-item speciality-right speciality-right-two speciality-right-three">
                        <img src={contactImg} alt="Contact" />
                        <div className="speciality-emergency">
                            <div className="speciality-icon">
                                <i className="icofont-ui-call"></i>
                            </div>
                            <h3>Emergency Call</h3>
                            <p>+91 88744 47836</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59843174.53779285!2d62.17507173408571!3d23.728204508550363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sbd!4v1609366033158!5m2!1sen!2sbd"></iframe>
    </>
  );
};

export default Contact;