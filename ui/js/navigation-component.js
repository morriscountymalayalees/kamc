class NavigationComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar Start -->
        <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div class="col-lg-6 px-5 text-start">
                    <small><i class="fa fa-map-marker-alt me-2"></i>16 Ser Del Dr, Parsippany, NJ 07054</small>
                    <small class="ms-4"><i class="fa fa-envelope me-2"></i>contact@kamc.us</small>
                </div>
                <div class="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a class="text-white-50 ms-3" href="https://www.facebook.com/parsippanyfunclub"><i class="fab fa-facebook-f"></i></a>
                    <!-- <a class="text-white-50 ms-3" href=""><i class="fab fa-twitter"></i></a> -->
                    <!-- <a class="text-white-50 ms-3" href=""><i class="fab fa-linkedin-in"></i></a> -->
                    <a class="text-white-50 ms-3" href="https://www.instagram.com/parsippanymalayalees/"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
    
            <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="fw-bold text-primary m-0"><span class="text-white">Team</span>KAMC</h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" class="nav-item nav-link">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="events.html" class="nav-item nav-link">Events</a>
                        <!-- <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Upcoming Events</a>
                            <div class="dropdown-menu m-0">
                                <a href="service.html" class="dropdown-item">Service</a>
                                <a href="donate.html" class="dropdown-item">Donate</a>
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div> -->
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <div class="d-none d-lg-flex ms-2">
                        <a class="btn btn-outline-primary py-2 px-3" href="donate.html">
                            Donate Now
                            <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Navbar End -->
        `;
    }
}

customElements.define('navigation-component', NavigationComponent);