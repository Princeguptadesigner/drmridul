import React from "react";

const Appointment = () => {
  return (
    <>
      <section className="appointment-area pb-100">
        <div className="container-fluid p-0">
            <div className="appointment-item">
                <h2>Book your appointment</h2>
                <span>We will confirm your appointment within 2 hours</span>
                <div className="appointment-form">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="icofont-business-man-alt-1"></i>
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="icofont-ui-message"></i>
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="icofont-ui-call"></i>
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Number" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="icofont-business-man"></i>
                                    <label>Age</label>
                                    <input type="text" className="form-control" placeholder="Your Age" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn appointment-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
export default Appointment;