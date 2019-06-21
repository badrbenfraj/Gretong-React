import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className="row homeGallery">
                        <div className="col-md-6 col-lg-6">
                            <img src="/img/product-0.png" alt=""/>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <img src="/img/product-01.png" alt=""/>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-8">
                        <Link to="/img/product-06.png" target="_blank">
                                <img src="/img/product-06.png" alt="Lights" className="homeImg" />
                                </Link>
                        </div>
                        <div className="col-4">
                        <Link to="/img/product-05.png" target="_blank">
                                <img src="/img/product-05.png" alt="Lights" />
                                </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 responsive">
                            <div className="thumbnail">
                                <Link to="/img/product-03.png" target="_blank">
                                <img src="/img/product-03.png" alt="Lights" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 responsive">
                            <div className="thumbnail">
                                <Link to="/img/product-02.png" target="_blank">
                                <img src="/img/product-02.png" alt="Nature" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 responsive">
                            <div className="thumbnail">
                                <Link to="/img/product-04.png" target="_blank">
                                <img src="/img/product-04.png" alt="Fjords" />
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className="sepcialOffer">
                    <hr/>
                    <p>SPECIAL OFFERS</p>
                </div>
                <div className="row">
                    <div className="responsive">
                        <div className="gallery">
                            <Link target="_blank" to="/img/product-07.png">
                            <img src="/img/product-07.png" alt="Cinque Terre" width="600" height="400"/>
                            </Link>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        </div>


                        <div className="responsive">
                        <div className="gallery">
                            <Link target="_blank" to="/img/product-08.png">
                            <img src="/img/product-08.png" alt="Forest" width="600" height="400"/>
                            </Link>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        </div>

                        <div className="responsive">
                        <div className="gallery">
                            <Link target="_blank" to="/img/product-09.png">
                            <img src="/img/product-09.png" alt="Northern Lights" width="600" height="400"/>
                            </Link>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        </div>

                        <div className="responsive">
                        <div className="gallery">
                            <Link target="_blank" to="/img/product-10.png">
                            <img src="/img/product-10.png" alt="Mountains" width="600" height="400"/>
                            </Link>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;