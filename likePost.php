<?php
require_once "config.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postID = $_REQUEST["postID"];
    $con = new Posts();
    $con->likePost($postID);
}
