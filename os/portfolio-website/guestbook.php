<?php
include 'partials/header.php';
include 'functions/connection.php';
?>
<main>
    <section>
        <article>
            <div>
                <h1>Guestbook</h1>
            </div>
        </article>
        <?php
        if (isset($_SESSION['username'])) {
            // User is logged in, display a welcome message or any other content
            echo "<article>";
            echo "<div class='bordered-content'>";
            echo "<a href='functions/logout.php'><button>Logout</button></a>";
            echo "<span>You are currently logged in as <b>" . $_SESSION['username'] . "</b></span>";
            echo "</div>";
            echo "</article>";
        } else {
            // User is not logged in, display login/register buttons
            echo "<article>";
            echo "<div class='bordered-content'>";
            echo "<a href='login.php'><button>Login</button></a>";
            echo "<span>or</span>";
            echo "<a href='register.php'>register a new account</a>";
            echo "<span>to leave a message</span>";
            echo "</div>";
            echo "</article>";
        }
        ?>
    </section>
    <?php
    if (isset($_SESSION['username'])) {
        echo "<section>";
        echo "<form method='post' id='commentForm' action='functions/post.php' class='msg-container' novalidate>";
        echo "<h3>Message</h3>";
        echo "<textarea name='content' id='message' placeholder='Write your message here...'></textarea>";
        echo "<p id='charCount'></p>"; // This will display the character count
        echo "<div class='post-btn-container'>";
        echo "<button id='post-btn'>Post</button>";
        echo "<div id='feedbackMessage'> </div>";
        echo "</div>";
        echo "</form>";
        echo "</section>";
    }
    ?>
    <section id="comments-section">
        <?php include 'functions/get-comments.php'; ?>
    </section>
</main>
</div>
</body>

</html>