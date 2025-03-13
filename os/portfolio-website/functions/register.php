<?php
// Include database connection
include ("connection.php");

$user_feedback = "";
$success = false;
$redirect = "";

// Get form data & trim whitespace char
$username = trim($_POST['username']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);

// Validate input
if (empty($username) || empty($email) || empty($password)) {
    $user_feedback = "<span class='error'>All fields are required</span>";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $user_feedback = "<span class='error'>Invalid email format</span>";
} else {
    // Sanitize input
    $username = $conn->real_escape_string($username);
    $email = $conn->real_escape_string($email);
    $password = $conn->real_escape_string($password);

    // Check if email or username already exists
    $sql = "SELECT * FROM users WHERE email='$email' OR username='$username'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $existing_user = $result->fetch_assoc();
        if ($existing_user['email'] === $email) {
            $user_feedback = "<span class='error'>Email has already been registered</span>";
        } elseif ($existing_user['username'] === $username) {
            $user_feedback = "<span class='error'>Username is already taken</span>";
        }
    } else {
        // Hash password
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Insert new user
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
        if ($conn->query($sql) === TRUE) {
            $user_feedback = "<span class='success'>Registration successful</span>";

            // Set the redirect URL on success
            $success = true;
            $redirect = './guestbook.php';

            // Retrieve the inserted user id
            $user_id = $conn->insert_id;

            // Set session variables
            $_SESSION['user_id'] = $user_id;
            $_SESSION['username'] = $username;
            $_SESSION['email'] = $email;

        } else {
            $user_feedback = "<span class='error'>Error: " . $sql . "<br>" . $conn->error . "</span>";
        }
    }
}

// Close the database connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode(['message' => $user_feedback, 'success' => $success, 'redirect' => $redirect]);
?>