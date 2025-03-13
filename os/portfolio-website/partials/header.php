<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script src="./js/website-scripts.js" defer></script>
    <script src="./js/guestbook.js" defer></script>
</head>

<body>
    <div id="expand-button"></div>
    <div class="page-flow">
        <header>
            <h1 class="big-header">Bjorn<br>Verbakel</h1>
            <div class="header-container">
                <nav>
                    <h3>Navigation</h3>
                    <ul id="links">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">About</a></li>
                        <li><a href="learning-outcomes.php">Learning Outcomes</a></li>
                        <ul id="inner-links">
                            <li><a href="lo-interactive-media.php">Interactive Media</a></li>
                            <li><a href="lo-iterative-design.php">Iterative Design</a></li>
                            <li><a href="lo-development.php">Development</a></li>
                            <li><a href="lo-professional-standard.php">Professional Standard</a></li>
                            <li><a href="lo-personal-leadership.php">Personal Leadership</a></li>
                        </ul>
                        <li><a href="guestbook.php">Guestbook</a></li>
                    </ul>
                </nav>
                <div class="hit-counter">
                    <span>You are visitor #</span>
                    <img src="https://hitwebcounter.com/counter/counter.php?page=13750305&style=0006&nbdigits=5&type=ip&initCount=1111110"
                        title="Counter Widget" Alt="Visit Counter" />
                </div>
            </div>
        </header>
        <div id="imageModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="modalImage">
        </div>