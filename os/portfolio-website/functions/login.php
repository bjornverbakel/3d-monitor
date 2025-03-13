<?php
// Include database connection
include ("connection.php");

$user_feedback = "";
$success = false;
$redirect = "";

// Get form data & trim whitespace char
$user = trim($_POST['user']);
$password = trim($_POST['password']);

// Validate input
if (empty($user) || empty($password)) {
    $user_feedback = "<span class='error'>All fields are required</span>";
} else {
    // Sanitize input
    $user = $conn->real_escape_string($user);
    $password = $conn->real_escape_string($password);

    // Check if user exists by username or email
    $sql = "SELECT * FROM users WHERE username='$user' OR email='$user'";
    $result = $conn->query($sql);

    if ($result->num_rows == 0) {
        $user_feedback = "<span class='error'>Invalid username or email</span>";
    } else {
        $row = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $row['password'])) {
            $user_feedback = "<span class='success'>Login successful</span>";

            // Set the redirect URL on success
            $success = true;
            $redirect = './guestbook.php';

            // Set session variables
            $_SESSION['user_id'] = $row['user_id'];
            $_SESSION['username'] = $row['username'];
            $_SESSION['email'] = $row['email'];
        } else {
            $user_feedback = "<span class='error'>Incorrect password</span>";
        }
    }
}

// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode(['message' => $user_feedback, 'success' => $success, 'redirect' => $redirect]);
?>