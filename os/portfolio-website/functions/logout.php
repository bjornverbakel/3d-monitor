<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Unset session variables
$_SESSION = array();

// Destroy session
session_destroy();

// Redirect
header("Location: ../guestbook.php");

exit;

?>