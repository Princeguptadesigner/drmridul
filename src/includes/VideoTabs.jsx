import React from "react";

const VideoTabs = () => {
  return (
    <>
      <div className="video-wrap">
        <div className="container-fluid p-0">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="video-area">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="video-item">
                        <a href="https://www.youtube.com/watch?v=7amj_ytbCW0" className="popup-youtube">
                          <i className="icofont-ui-play"></i>
                        </a>
                        <div className="video-content">
                          <h3>Hepatitis In Children: Causes, Symptoms and Treatment | Dr. Mridul Chandra Das</h3>
                          <p>Hepatitis is inflammation of the liver and infective causes such as hepatitis A, hepatitis E, hepatitis B and hepatitis C. There are also non-infective causes such as autoimmune disease, metabolic disease and alternative medicines.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="video-area">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="video-item">
                        <a href="https://www.youtube.com/watch?v=YlUhnRJB7uA" className="popup-youtube">
                          <i className="icofont-ui-play"></i>
                        </a>
                        <div className="video-content">
                          <h3>Constipation In Children | Dr. Mridul Chandra Das</h3>
                          <p>Constipation of more than four weeks duration is called chronic constipation. The Child with constipation manifests with reduced stool frequency and the child with constipation sometimes has pain abdominal and reduced food intake. 90% of the cases of constipation in children are due to functional issues.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="video-area">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="video-item">
                        <a href="https://www.youtube.com/watch?v=pAytRB3J6BE" className="popup-youtube">
                          <i className="icofont-ui-play"></i>
                        </a>
                        <div className="video-content">
                          <h3>Vomiting in Children | Dr. Mridul Chandra Das</h3>
                          <p>Vomiting is one of the common pediatric gastrointestinal disorders. Chronic vomiting is characterized by episodes of severe vomiting without an apparent cause and can adversely affect the growth of the children.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-icu" role="tabpanel" aria-labelledby="pills-icu-tab">
              <div className="video-area">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="video-item">
                        <a href="https://www.youtube.com/watch?v=XLz9jBFiv_Y" className="popup-youtube">
                          <i className="icofont-ui-play"></i>
                        </a>
                        <div className="video-content">
                          <h3>Patient Success Story | Wilson's Disease | Dr. Mridul Chandra Das</h3>
                          <p>Patient Ambika Pati, a final year Engineering student from Orissa had chronic Liver disease. She suffered from a genetic disease known as Wilson Disease. Due to restricted movement & Pandemic visiting hospitals was a challenge for her.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-doctor" role="tabpanel" aria-labelledby="pills-doctor-tab">
              <div className="video-area">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="video-item">
                        <a href="https://www.youtube.com/watch?v=RAObJCKhDDg" className="popup-youtube">
                          <i className="icofont-ui-play"></i>
                        </a>
                        <div className="video-content">
                          <h3>Hepatitis - Myths, Facts and it's Prevention | Dr. Swadesh, Dr. Sanjay, Dr. Mridul & Dr. Naveen</h3>
                          <p>Hepatitis is an inflammation of the liver. Viral hepatitis is usually caused by Hepatitis A, B, or C virus. It spreads through various mediums such as having sexual intercourse, sharing needles, or eating unclean food, contaminated water, etc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="video-nav nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item video-nav-item">
              <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Symptoms and Treatment</a>
            </li>
            <li className="nav-item video-nav-item">
              <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Constipation</a>
            </li>
            <li className="nav-item video-nav-item">
              <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Vomiting</a>
            </li>
            <li className="nav-item video-nav-item">
              <a className="nav-link" id="pills-icu-tab" data-bs-toggle="pill" href="#pills-icu" role="tab" aria-controls="pills-icu" aria-selected="false">Patient Success Story</a>
            </li>
            <li className="nav-item video-nav-item">
              <a className="nav-link" id="pills-doctor-tab" data-bs-toggle="pill" href="#pills-doctor" role="tab" aria-controls="pills-doctor" aria-selected="false">Hepatitis</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default VideoTabs;