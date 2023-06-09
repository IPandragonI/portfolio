<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
            integrity="sha384-V1jL4IFU8w6K5MC5cKNY6G5rKWJO8W+hs9jvUQQ0yGLti7Ou8IjMO3bwVHlJY0zD"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/style_contact.css">
    <script src="script/script.js"></script>
    <title>Contact Mathys Farineau</title>
</head>

<body>

<div class="wrapper">
    <!-- NavBar -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="projet.php">Mes projets</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="CV.php">Mon CV</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="contact.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    <!-- Main content -->

    <!--Section: Contact v.2-->
    <div class="card text-center border-0 shadow-lg rounded p-2 mb-4">

        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Me contacter</h2>

        <div class="d-flex justify-content-center align-items-center" id="content">
            <!--Grid column-->
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="col-md-3 m-3 d-flex justify-content-center">
                    <div class="contact1-pic js-tilt" data-tilt=""
                         style="will-change: transform; transform: perspective(300px) rotateX(0deg) rotateY(0deg);">
                        <img src="public/img/mail.png" alt="IMG">
                    </div>
                </div>

                <div class="col-md-9 m-3">
                    <!--Grid row-->
                    <div class="row">
                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control">
                                <label for="name" class="">Nom</label>
                            </div>
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="email" id="email" name="email" class="form-control">
                                <label for="email" class="">Mail</label>
                            </div>
                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control">
                                <label for="subject" class="">Sujet</label>
                            </div>
                        </div>
                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-md-12">

                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2"
                                          class="form-control md-textarea"></textarea>
                                <label for="message">Message</label>
                            </div>

                        </div>
                    </div>
                    <!--Grid row-->


                    <div class="d-flex justify-content-center text-center text-md-left">
                        <a class="btn btn-success" onclick="validateForm();">Envoyer</a>
                    </div>
                    <div class="status"></div>
                </div>
            </form>

        </div>

    </div>
</div>
</body>

</html>