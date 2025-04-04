<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexiwork - Data Entry Platform</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Flexiwork</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#how-it-works">How It Works</a></li>
                    <li class="nav-item"><a class="nav-link" href="#plans">Earning Plans</a></li>
                    <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">Earn Money with Data Entry</h1>
                    <p class="lead">Join Flexiwork and start earning from the comfort of your home. Simple, flexible, and rewarding!</p>
                    <a href="register.html" class="btn btn-primary btn-lg">Get Started</a>
                </div>
                <div class="col-lg-6">
                    <img src="https://img.freepik.com/free-vector/data-entry-concept-illustration_114360-4654.jpg" alt="Data Entry" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">About Us</h2>
            <div class="row">
                <div class="col-lg-6">
                    <img src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-6399.jpg" alt="About Us" class="img-fluid rounded">
                </div>
                <div class="col-lg-6">
                    <h3>Welcome to Flexiwork</h3>
                    <p>Flexiwork is your trusted platform for data entry work. We connect talented individuals with businesses that need data entry services. Our platform is designed to be simple, efficient, and rewarding for everyone involved.</p>
                    <p>With years of experience in the industry, we understand the importance of accuracy and efficiency in data entry work. We provide the tools and support you need to succeed.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">How It Works</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="fas fa-user-plus fa-3x mb-3 text-primary"></i>
                        <h4>1. Register</h4>
                        <p>Create your account and choose your earning plan</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="fas fa-tasks fa-3x mb-3 text-primary"></i>
                        <h4>2. Get Tasks</h4>
                        <p>Receive data entry tasks based on your plan</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="fas fa-money-bill-wave fa-3x mb-3 text-primary"></i>
                        <h4>3. Earn Money</h4>
                        <p>Complete tasks and get paid for your work</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 text-center">
                    <h3>Watch Our Demo Video</h3>
                    <div class="ratio ratio-16x9 mx-auto" style="max-width: 800px;">
                        <iframe src="https://www.youtube.com/embed/your-video-id" title="Demo Video" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Earning Plans Section -->
    <section id="plans" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Earning Plans</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h3 class="card-title">Free Plan</h3>
                            <h4 class="card-subtitle mb-3">₹0.50 per entry</h4>
                            <p class="card-text">Daily 10 Entries</p>
                            <a href="register.html" class="btn btn-outline-primary">Choose Plan</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h3 class="card-title">₹2999 Plan</h3>
                            <h4 class="card-subtitle mb-3">₹1 per entry</h4>
                            <p class="card-text">Daily 50 Entries</p>
                            <a href="register.html" class="btn btn-outline-primary">Choose Plan</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h3 class="card-title">₹9999 Plan</h3>
                            <h4 class="card-subtitle mb-3">₹3 per entry</h4>
                            <p class="card-text">Daily 50 Entries</p>
                            <a href="register.html" class="btn btn-outline-primary">Choose Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Frequently Asked Questions</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    How do I get started?
                                </button>
                            </h3>
                            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Simply register for an account, choose your plan, and start receiving data entry tasks.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    How do I get paid?
                                </button>
                            </h3>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Payments are processed weekly through your registered payment method.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    What kind of data entry tasks will I receive?
                                </button>
                            </h3>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Tasks include form filling, data transcription, and other simple data entry work.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-light py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5>Flexiwork</h5>
                    <p>Your trusted platform for data entry work</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <h5>Connect With Us</h5>
                    <a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-light"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
