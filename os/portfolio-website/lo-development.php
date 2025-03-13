<?php include 'partials/header.php'; ?>
<main>
    <section>
        <article>
            <div>
                <h1>Development</h1>
                <div class="lo-headercontainer">
                    <h2>Learning Outcome</h2>
                    <a href="learning-outcomes.php" class="backbtn">Go back <img src="img/back-arrow.svg"
                            alt="Paintbrush" style="height:18px;"></a>
                </div>
            </div>
        </article>
        <div class="lo-content">
            <h2>Projects</h2>
            <ul>
                <li>
                    <a href="#media-campaign">Development (Fontys OVP)</a>
                </li>
                <li>
                    <a href="#project-x">Project X (Comment system)</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
        </div>
        <article id="development">
            <h2>Development (Fontys OVP)</h2>
            <div class="text-section">
                <div>
                    <h3>My contributions</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/php-include.png" alt="php include code" class="fw-image">
                                <img src="img/responsive-header.gif" alt="responsive header demo" class="fw-image">
                                <img src="img/js-menu-opening.png" alt="js menu opening code" class="fw-image">
                                <img src="img/transitions.gif" alt="css transitions" class="fw-image">
                                <img src="img/comma-container.png" alt="comma shaped container" class="fw-image">
                                <img src="img/comma-css.png" alt="comma shape css code" class="fw-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        My contributions to this project consisted of creating the main 'Onderwijs voor Professionals'
                        page.
                        Additionally, I also created the header and helped with bugs whenever needed. The header
                        contains a lot of dropdown menus, and in addition with the menu for smaller screen sizes this
                        HTML code became quite lengthy. Because of this I decided to use PHP so that i could put the
                        header code (and any other repeated HTML across various pages) in a seperate file. After this
                        'include' is used to put the header on every page. This prevents from having to scroll to a
                        bunch of header code when working on a page, and also makes it so that changes to the header
                        HTML only have to be done once. XAMPP was used to host a local server.
                    </p>
                    <br>
                    <p>
                        The header has been made responsive by transforming it into a burger menu when the screen size
                        gets smaller. JavaScript has been used to open the dropdown menus when the button is pressed.
                        Additionally, a lot of CSS transitions have been applied to various elements, like the bottom
                        border of the header buttons, moving of icons and opening of the searchbar
                    </p>
                    <br>
                    <p>
                        Improvements I made to the other page that are not mine are to the easter egg and the comma
                        shaped container. I improved these by adding text and a background to the easter egg, and also a
                        fade in transition. The comma has been improved by using a quarter of a transparent circle with
                        a purple border that is turned 45 degrees to make the shape. Before this was simply a tilted
                        rectangle.
                    </p>
                    <br>
                    <p>
                        Lastly, slide in animations have been added to various elements using the <a
                            href="https://michalsnik.github.io/aos/" target="_blank" rel="noopener">AOS library</a>. To view the full
                        page, you can click <a href="https://i529052.hera.fontysict.net/development-project"
                            target="_blank" rel="noopener">here</a>.
                    </p>
                </div>
                <div>
                    <h3>Version control</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/code-comments-ovp.png" alt="code comments" class="fh-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        The project code has been uploaded to GitLab, which can be found <a
                            href="https://git.fhict.nl/I529052/development-project" target="_blank" rel="noopener">here</a>. Comments
                        to the code have been added in, as seen in the attachment.
                    </p>
                    <br>
                    <h4>Reflection</h4>
                    <p>
                        Through this project I was able to learn how to use Git for a collaberative project, as I had
                        not done this before. Something I could improve on is the use of branches, as this had not
                        been used during this project yet.
                    </p>
                </div>
            </div>
        </article>
        <article id="project-x">
            <h2>Project X (Comment system)</h2>
            <div class="text-section">
                <div>
                    <h3>Database</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/database-model.png" alt="database model" class="fw-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        For project X I will be creating a comment system. This will be integrated into my portfolio
                        website through the <a href="guestbook.php">guestbook</a> page. It has been made using HTML,
                        CSS, JavaScript, PHP and a phpmyadmin database. A model of the database can be seen in the
                        attachments. I asked Maikel for some feedback on the database model. He said that it looked
                        good, and told me to try and find a good hash function for the passwords. MD5 is not secure as
                        an example.
                    </p>
                    <br>
                    <h3 class="clearfix">Functionality</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/register-validation.png" alt="register validation" class="fw-image">
                                <img src="img/register-insert.png" alt="register insert" class="fw-image">
                                <img src="img/login-check.png" alt="login check" class="fw-image">
                                <img src="img/ajax.png" alt="ajax fetch" class="fw-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        To start off, you will have to create a new account if you want to post a comment. The register
                        page contains a form with inputs for the username, email and password. With PHP I then retrieve
                        the input values on submission of the form. I removed the default validation of the forms as I
                        wanted to create my own validation and feedback messages to go along with this. In the
                        validation code I check if all the fields are filled in, if the email has been formatted
                        correctly and if the username or email has already been registered. If the user passes this
                        validation the new account is inserted into the database through a SQL query. The password also
                        gets hashed with the password_hash function, and I store some of the user data as session
                        variables to usse later.
                    </p>
                    <br>
                    <p>
                        The login form functions similarly to that of the register form. Instead of inserting something
                        new into the database there only has to be checked if an account with the given inputs exists or
                        not. I made my own user feedback messages that I send as a JSON response. To then fetch these
                        responses I used AJAX, as I did not want the page to reload on submit. I made the AJAX code for
                        the comment, login and register form into one generic function so that it could be optimized and
                        I would not need three similar functions. I store the feedback message for this in localstorage
                        as otherwise it would dissapear instantly after the page gets reloaded when a new comment is
                        posted.
                    </p>
                    <br>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/guestbook-page.png" alt="guestbook page" class="fw-image">
                                <img src="img/comment-insert.png" alt="comment insert" class="fw-image">
                                <img src="img/char-limit.png" alt="character limit" class="fw-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        Content on the guestbook page is shown depending on if you are logged in or not. When you are
                        logged in you will get a textarea input to write your comment in. The comment is inserted into
                        the database similarly to new accounts. The input is validated and feedback messages get sent as
                        JSON. I also store the user ID of who posted the comment along with it. The textarea input has a
                        character limit that is also validated inside of the PHP, so that you cannot simply edit it in
                        the
                        HTML maxlength attribute. Under the textarea it shows how many character have been typed, and
                        what the max amount is. If you reach the max it will turn red.
                    </p>
                    <br>
                    <h3 class="clearfix">Fetching comments & pagination</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/get-comments.png" alt="get comments" class="fw-image">
                                <img src="img/format-datetime.png" alt="format datetime" class="fw-image">
                                <img src="img/page-navigation.png" alt="page navigation" class="fw-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        To display the comments I get all of them out of the database together with the username of who
                        posted it and the dateTime value of when it was posted. Using this dateTime I then format it to
                        show how long ago it was. To prevent it from becoming one large page when there are many
                        comments i added numbered page navigation. It dynamically generates pagination links based on
                        the current page and the total number of pages. The number link for the first and last page are
                        always shown, and the pages next to these are shown based on the range value. If you are
                        somewhere in between it shows the previous and next pages along with the current one, based on
                        how high the range value is set. It will also show an ellipsis (...) to show large gaps in
                        between the page numbers.
                    </p>
                    <br>
                    <h3>Version Control</h3>
                    <p>
                        Since the guestbook is integrated into the portfolio it has been uploaded onto the same repo.
                        More
                        can be found <a href="#portfolio-version-control">here</a>
                    </p>
                </div>
            </div>
        </article>
        <article id="portfolio">
            <h2>Portfolio</h2>
            <div class="text-section">
                <div>
                    <h3>Process</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/gltfjsx.png" alt="code comments" class="fh-image">
                                <img src="img/html-component-code.png" alt="drei html compenent code" class="fh-image">
                                <img src="img/3d-environment-code.png" alt="3d environment code" class="fh-image">
                                <img src="img/3d-demo.png" alt="3d demo" class="fh-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        For my portfolio I developed a website in the form of a retro operating system. The OS itself is
                        made using HTML, CSS
                        and JavaScript. I was considering using a full framework for the operating system
                        itself, but I decided to build everything from scratch because I wanted to challenge myself and
                        improve my JavaScript skills. However, I did adopt the CSS styling of some elements from <a
                            href="https://jdan.github.io/98.css/" target="_blank" rel="noopener">98.css</a>
                        and <a href="https://os-gui.js.org/" target="_blank" rel="noopener">os-gui.js</a>, such as the outer and inset
                        borders,
                        scrollbars, and buttons.
                    </p>
                    <br>
                    <p>
                        The operating system is displayed inside a 3D-object, using <a
                            href="https://github.com/pmndrs/drei" target="_blank" rel="noopener">ThreeJS Drei</a> to tie
                        a HTML iframe to the object. One of the development classes was about ThreeJS, and this helped
                        me understand more about how 3D-objects inside website function. However Drei features
                        ready-made abstractions for <a href="https://github.com/pmndrs/react-three-fiber"
                            target="_blank" rel="noopener">react-three-fiber</a>, a React renderer
                        for ThreeJS. This was quite a challenge, as I have also never
                        used React before.
                    </p>
                    <br>
                    <p>
                        Despite this I was eventually able to get it running, using an <a
                            href="https://codesandbox.io/p/sandbox/mixing-html-and-webgl-w-occlusion-9keg6?"
                            target="_blank" rel="noopener">example</a> listed in the Drei library that had exactly what I was trying to
                        achieve. To insert my 3D-model properly I used <a href="https://github.com/pmndrs/gltfjsx"
                            target="_blank" rel="noopener">gltfjsx</a> to create a JSX graph of all the
                        materials and objects in the model. I found a handy <a href="https://gltf.pmnd.rs/"
                            target="_blank" rel="noopener">website</a> which uses this library. Here you can simply upload your model,
                        and it will give you the JSX code. After this changes to things like the position, material,
                        color or scale can be easily made to specific meshes or parts by targetting them.
                    </p>
                    <br>
                    <p>
                        This targetting of specific parts was very handy with positioning everything correctly. The
                        screen
                        of the monitor is slightly tilted backwards, and this caused some issues at first, as no matter
                        what axis I rotated the HTML component in it would refuse to tilt backwards. After some
                        experimenting I noticed that when changing the position of the screen mesh the HTML component
                        would move with it. Eventually my solution was to make a version of the 3D-model where the
                        screen is positioned
                        perfectly vertical. After this I could simply tilt the rotation of the screen mesh backwards,
                        and this would tilt the HTML component with it.
                    </p>
                    <br>
                    <h4>Reflection</h4>
                    <p>
                        During this project my JavaScript skills have been improved a lot. However, since I was still
                        learning during the development of this project paired with the fact that a lot more JS was
                        needed than if I had made a normal website the OS code is not as efficient as it could be. If I
                        were to start over I would make sure to limit repeated code as much as possible, and also try to
                        split up my JS file as it has gotten very long now.
                    </p>
                    <br>
                    <p>
                        In the future I would like to learn more about React, as for a beginner what I started out with
                        was far to complex.
                    </p>
                </div>
                <div>
                    <h3 id="portfolio-version-control">Version control</h3>
                    <div class="attachment float-right">
                        <div class="img-container">
                            <div class="attachment-img">
                                <img src="img/code-comments.png" alt="code comments" class="fh-image">
                                <img src="img/more-code-comments.png" alt="code comments" class="fh-image">
                            </div>
                        </div>
                        <div class="attachment-toolbar">
                            <div class="attachment-name">
                                <img src="img/img-icon.png" alt="">
                                <span class="attachment-name-text"></span>
                            </div>
                            <button class="attachment-expand">
                                <img src="img/expand-icon.svg" alt="">
                            </button>
                        </div>
                        <div class="attachment-controls">
                            <img class="prev" src="img/8bit-arrow.svg" alt="" style="transform:rotate(180deg);">
                            <img class="next" src="img/8bit-arrow.svg" alt="">
                        </div>
                    </div>
                    <p>
                        The code for my portfolio has been uploaded to GitLab, and can be found <a
                            href="https://git.fhict.nl/I529052/portfolio" target="_blank" rel="noopener">here</a>. Whenever new changes
                        are made I
                        commit them. All the commits that have been made can be found <a
                            href="https://git.fhict.nl/I529052/portfolio/-/commits/main" target="_blank" rel="noopener">here</a>.
                        Lastly, I try to put
                        a lot of comments in my code to label or explain what a certain part does. An example of this
                        can be found in the attachment.
                    </p>
                    <br>
                    <h4>Reflection</h4>
                    <p>
                        In the future I will make sure that I use Git right from the start of the project. In this case
                        I started quite late, as I missed the development lesson about this which caused me to neglect
                        this part a bit. I asked Maikel for some help with getting it set up, and after that I have been
                        using it a lot.
                    </p>
                </div>
            </div>
        </article>
    </section>
</main>
</div>
</body>

</html>