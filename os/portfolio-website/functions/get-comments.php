<?php
// Include database connection
include ("connection.php");

// Pagination settings
$recordsPerPage = 6;
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? $_GET['page'] : 1;
$offset = ($page - 1) * $recordsPerPage;

// Fetch total number of comments
$totalCommentsQuery = "SELECT COUNT(*) as total FROM comments";
$totalCommentsResult = $conn->query($totalCommentsQuery);
$totalComments = $totalCommentsResult->fetch_assoc()['total'];

// Calculate total pages
$totalPages = ceil($totalComments / $recordsPerPage);

// Fetch comments for the current page
$sql = "SELECT comments.content, comments.created_at, users.username 
        FROM comments 
        INNER JOIN users ON comments.user_id = users.user_id
        ORDER BY comments.created_at DESC
        LIMIT $offset, $recordsPerPage";
$result = $conn->query($sql);

// Display comments
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $content = $row['content'];
        $created_at = $row['created_at'];
        $username = $row['username'];
        $time_ago = formatDateTime($created_at);

        // Display comment in the specified style
        echo '<div class="comment">';
        echo '<div class="details">';
        echo '<div class="user">' . $username . '</div>';
        echo '<div class="seperator"></div>';
        echo '<div class="time">' . $time_ago . '</div>';
        echo '</div>';
        echo '<p class="content">' . $content . '</p>';
        echo '</div>';
    }
} else {
    echo "No comments found :(";
}

// Pagination controls
echo '<div class="pagination" id="pagination">';
if ($totalPages > 1) {
    // Display prevPage arrows if not on first page
    if ($page > 1) {
        echo '<a href="#" class="pagination-link" data-page="1">&laquo;</a>';
        echo '<a href="#" class="pagination-link" data-page="' . ($page - 1) . '">&lt;</a>';
    }

    // Range for displayed surrounding pages on the active page is 2 if on first or last page and 1 if in the middle
    $range = ($page == 1 || $page == $totalPages) ? 2 : 1;

    // First page
    echo '<a ' . ($page == 1 ? 'class="active pagination-link"' : 'class="pagination-link"') . ' href="#" data-page="1">1</a>';

    // Display elipsis
    if ($page - $range > 2) {
        echo '<span>...</span>';
    }

    // Other pages
    for ($i = max(2, $page - $range); $i <= min($page + $range, $totalPages - 1); $i++) {
        echo '<a ' . ($page == $i ? 'class="active pagination-link"' : 'class="pagination-link"') . ' href="#" data-page="' . $i . '">' . $i . '</a>';
    }

    // Display elipsis
    if ($page + $range < $totalPages - 1) {
        echo '<span>...</span>';
    }

    // Last page
    echo '<a ' . ($page == $totalPages ? 'class="active pagination-link"' : 'class="pagination-link"') . ' href="#" data-page="' . $totalPages . '">' . $totalPages . '</a>';

    // Display nextPage arrows if not on last page
    if ($page < $totalPages) {
        echo '<a href="#" class="pagination-link" data-page="' . ($page + 1) . '">&gt;</a>';
        echo '<a href="#" class="pagination-link" data-page="' . $totalPages . '">&raquo;</a>';
    }
}
echo '</div>';

// Close connection
$conn->close();

// Function to calculate time elapsed since comment creation
function formatDateTime($datetime, $full = false)
{
    $now = new DateTime;
    $ago = new DateTime($datetime);
    $diff = $now->diff($ago);

    $diff->w = floor($diff->d / 7);
    $diff->d -= $diff->w * 7;

    $string = array(
        'y' => 'year',
        'm' => 'month',
        'w' => 'week',
        'd' => 'day',
        'h' => 'hour',
        'i' => 'minute',
        's' => 'second',
    );
    foreach ($string as $k => &$v) {
        if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
        } else {
            unset($string[$k]);
        }
    }

    if (!$full) {
        $string = array_slice($string, 0, 1);
    }
    return $string ? implode(', ', $string) . ' ago' : 'just now';
}
?>