import React from 'react';
import industrialimg from '../assets/images/1img-3pg.jpg';
import commercialimg from '../assets/images/2img-3pg.jpg';

export default function industrial() {
  return (
    <div>
      <section class="machinary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
                        <div class="machine-images">
                            <img src={industrialimg} alt=""/>
                            <div class="machine-industrial-overlay">
                                <h5>Industrial</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12 p-0">
                        <div class="machine-images">
                            <img src={commercialimg} alt=""/>
                            <div class="machine-commercial-overlay text-right">
                                <h5>Commercial</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
