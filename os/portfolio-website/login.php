<?php include 'partials/header.php'; ?>
<main>
    <section>
        <article>
            <div>
                <h1>Log in</h1>
                <div class="lo-headercontainer">
                    <h2>To leave a new comment</h2>
                    <a href="guestbook.php" class="backbtn">Go back <img src="img/back-arrow.svg" alt="Paintbrush"
                            style="height:18px;"></a>
                </div>
            </div>
        </article>
        <article>
            <div class="bordered-content">
                <span>Don't have an account yet?</span>
                <a href="register.php">register a new account</a>
                <span>first!</span>
            </div>
        </article>
        <article>
            <form class="gb-form" id="loginForm" method="post" action="functions/login.php" novalidate>
                <div class="gb-input">
                    <label for="user">Username or email:</label>
                    <input id="user" name="user" type="text" />
                </div>
                <div class="gb-input">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" />
                </div>
                <div class="gb-input">
                    <input name="login" type="submit" value="Log in" />
                    <div id="feedbackMessage"> </div>
                </div>
            </form>
        </article>
    </section>
</main>
</div>

</body>

</html>