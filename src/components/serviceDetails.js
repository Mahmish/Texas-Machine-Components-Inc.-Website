import React from 'react';
import servicedetail from '../assets/images/service-details-image.png';


export default function serviceDetails() {
  return (
      <div>
          <section className="title">
            <div className="Pagesbackground-image">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-lg-6">
                                <div className="title-content">
                                    <h1>Service Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>

    <section>
        <div className="section-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-6 p-0">
                        <div className="serviceSection-content">
                            <h2>Your Heading Here</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe. <br/>
                            nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo  enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-xl-6 p-0">
                        <div className="section-image">
                            <img src={servicedetail} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
                        <div className="section-paragraph">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


        <hr></hr>
    </div>
  )
}
