<?php
require_once "config.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = $_POST["uid"];
    $postDetail = $_POST["postDetail"];
    $post = new Posts();
    $post->addPost($userID, $postDetail);
}
