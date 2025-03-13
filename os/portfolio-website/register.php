<?php include 'partials/header.php'; ?>
<main>
    <section>
        <article>
            <div>
                <h1>Register</h1>
                <div class="lo-headercontainer">
                    <h2>To leave a new comment</h2>
                    <a href="guestbook.php" class="backbtn">Go back <img src="img/back-arrow.svg" alt="Paintbrush"
                            style="height:18px;"></a>
                </div>
            </div>
        </article>
        <article>
            <div class="bordered-content">
                <span>Already have an account?</span>
                <a href="login.php">Log in</a>
                <span>instead!</span>
            </div>
        </article>
        <article>
            <form class="gb-form" id="registerForm" method="post" action="functions/register.php" novalidate>
                <div class="gb-input">
                    <label for="username">Username:</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div class="gb-input">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div class="gb-input">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" />
                </div>
                <div class="gb-input">
                    <input name="register" type="submit" value="Register" />
                    <div id="feedbackMessage"> </div>
                </div>
            </form>
        </article>
    </section>
</main>
</div>
</body>

</html>