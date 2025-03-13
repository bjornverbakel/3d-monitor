<?php
// Include database connection
include ("connection.php");

$user_feedback = "";
$success = false;
$redirect = "";
$char_limit = 250;

// Get form data & trim whitespace char
$content = trim($_POST['content']);

// Validate input
if (empty($content)) {
    $user_feedback = "<span class='error'>Message cannot be empty</span>";
} elseif (strlen($content) > 250) {
    $user_feedback = "<span class='error'>Message cannot be longer than " . $char_limit . " characters</span>";
} else {
    // Sanitize input
    $content = $conn->real_escape_string($content);
    $user_id = $_SESSION['user_id'];

    // Insert new message
    $sql = "INSERT INTO comments (user_id, content) VALUES ('$user_id', '$content')";
    if ($conn->query($sql) === TRUE) {
        $user_feedback = "<span class='success'>Message posted successfully!</span>";

        // Set the redirect URL on success
        $success = true;
        $redirect = './guestbook.php';
    } else {
        $user_feedback = "<span class='error'>Error: " . $sql . "<br>" . $conn->error . "</span>";
    }
}

// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode(['message' => $user_feedback, 'success' => $success, 'redirect' => $redirect]);
?>