class EventsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- events Start -->
        <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                        <div class="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Feature Events</div>
                        <h1 class="display-6 mb-5">Building a stronger and a healthy community</h1>
                    </div>
                    <div class="row g-4 justify-content-center">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="events-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                        <div class="text-center p-4 pt-0">
                                            <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                                <small>MARQUEE</small>
                                            </div>
                                            <h5 class="mb-3">A Music And Dance Ensemble With The Homies Band.</h5>
                                            <p>Rima Kallingal &#10024; Nikhila Vimal &#10024; Aparna Balamurali &#10024; Job Kurian &#10024; Anju Joseph &#10024; Sandeep Mohan &#10024; Joe Johnson &#10024; Alex TJ</p>
                                            <!-- <div class="events-progress bg-white p-3 pt-2">
                                                <div class="d-flex justify-content-between">
                                                    <p class="text-dark">$10,000 <small class="text-body">Goal</small></p>
                                                    <p class="text-dark">$9,542 <small class="text-body">Raised</small></p>
                                                </div> 
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <span>90%</span>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                        <div class="position-relative mt-auto">
                                            <img class="img-fluid" src="img/Marquee-2.png" alt="">
                                            <div class="events-overlay">
                                                <a class="btn btn-outline-primary" href="">
                                                    Register Here
                                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                        <i class="fa fa-arrow-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="events-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                    <div class="text-center p-4 pt-0">
                                        <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                            <small>StepUp</small>
                                        </div>
                                        <h5 class="mb-3">Keep moving & Stay Healthy</h5>
                                        <p>Thee StepUp Challenge is a motivational initiative designed to encourage participants to increase their daily physical activity, typically by tracking steps or other fitness goals. It fosters a sense of community and friendly competition while promoting a healthier lifestyle.</p>
                                        <!-- <div class="events-progress bg-white p-3 pt-2">
                                            <div class="d-flex justify-content-between">
                                                <p class="text-dark">$10,000 <small class="text-body">Goal</small></p>
                                                <p class="text-dark">$9,542 <small class="text-body">Raised</small></p>
                                            </div> 
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <div class="position-relative mt-auto">
                                        <img class="img-fluid" src="img/StepUp.JPG" alt="">
                                        <div class="events-overlay">
                                            <a class="btn btn-outline-primary" href="https://join.thestepupapp.com/U5sx">
                                                Download Now
                                                <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                    <i class="fa fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="events-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                    <div class="text-center p-4 pt-0">
                                        <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                            <small>Bowling</small>
                                        </div>
                                        <h5 class="mb-3">Bowling Night - March 7th 7 PM -9 PM</h5>
                                        <p>We're excited to launch our sports fun initiative with a bowling event! We've reserved 10 lanes at Hanover on March 7 from 7 PM to 9 PM. Participation is on a first-come, first-served basis, so if you're interested, please update your details in the Excel sheet below. Stay tuned—there are more activities planned by the Sports team. Let's have a great time!.</p>
                                    </div>
                                    <div class="position-relative mt-auto">
                                        <img class="img-fluid" src="img/Bowling.png" alt="">
                                        <div class="events-overlay">
                                            <a class="btn btn-outline-primary" href="https://docs.google.com/spreadsheets/d/160uIt4G_ai7i_JwP52eRfGg9ayjEfISuZJCo1hEEKG8/edit?usp=sharing">
                                                Register Here
                                                <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                    <i class="fa fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="events-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                    <div class="text-center p-4 pt-0">
                                        <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                            <small>Food Donation Drive</small>
                                        </div>
                                        <h5 class="mb-3">Sharing a meal, spreading hope – together we can nourish lives</h5>
                                        <p>Our food donation drive is committed to ensuring that no one in our community goes hungry. We strive to provide nutritious meals to those in need while upholding the dignity and respect of every individual.</p>
                                        <div class="events-progress bg-white p-3 pt-2">
                                            <div class="d-flex justify-content-between">
                                                <p class="text-dark">$1000 <small class="text-body">Goal</small></p>
                                                <p class="text-dark">$542 <small class="text-body">Raised</small></p>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="54.2" aria-valuemin="0" aria-valuemax="100">
                                                    <span>54.2%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="position-relative mt-auto">
                                        <img class="img-fluid" src="img/Food_Drive.jpeg" alt="">
                                        <div class="events-overlay">
                                            <a class="btn btn-outline-primary" href="">
                                                Read More
                                                <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                    <i class="fa fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="events-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                        <div class="text-center p-4 pt-0">
                                            <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                                <small>Onam 2025</small>
                                            </div>
                                            <h5 class="mb-3">Celebrate Onam</h5>
                                            <p>Let’s come together to rejoice in the spirit of unity, tradition, and prosperity with vibrant pookalams, delicious sadhya, and joyous festivities. Join us as we celebrate the homecoming of King Mahabali and embrace the true essence of Onam! </p>
                                            <div class="events-progress bg-light p-3 pt-2">
                                                <div class="d-flex justify-content-between">
                                                    <p class="text-dark">600 <small class="text-body">Seats</small></p>
                                                    <p class="text-dark">0 <small class="text-body">Filled</small></p>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="33.33" aria-valuemin="0" aria-valuemax="100">
                                                        <span>0%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-relative mt-auto">
                                            <img class="img-fluid" src="img/maveli.jpg" alt="">
                                            <div class="events-overlay">
                                                <a class="btn btn-outline-primary" href="https://docs.google.com/forms/d/1OTBaOlLC4tPPWNh2lzBaT_bFlQ7nVf1uk_HflL56QQg/edit?pli=1">
                                                    Coming Soon
                                                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                        <i class="fa fa-arrow-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <!-- <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="events-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                                    <div class="text-center p-4 pt-0">
                                        <div class="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                                            <small>Chess</small>
                                        </div>
                                        <h5 class="mb-3">Chess Competition For Kids</h5>
                                        <p>Chess tournaments for kids provide a great platform to enhance critical thinking, problem-solving, and strategic planning. They foster healthy competition, discipline, and sportsmanship while encouraging young minds to develop patience and focus. Participating in such events boosts confidence and helps children build lifelong skills, making learning both fun and intellectually rewarding.</p>
                                        <div class="events-progress bg-white p-3 pt-2">
                                            <div class="d-flex justify-content-between">
                                                <p class="text-dark">$10,000 <small class="text-body">Goal</small></p>
                                                <p class="text-dark">$9,542 <small class="text-body">Raised</small></p>
                                            </div> 
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="position-relative mt-auto">
                                        <img class="img-fluid" src="img/chess-tournament.jpeg" alt="">
                                        <div class="events-overlay">
                                            <a class="btn btn-outline-primary" href="">
                                                Coming Soon
                                                <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                                    <i class="fa fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div> -->
                    </div>
                </div>
        </div>
        <!-- events End -->
        `;
    }
}

customElements.define('events-component', EventsComponent);