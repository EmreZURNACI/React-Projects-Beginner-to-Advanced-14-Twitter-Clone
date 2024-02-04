<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
class Connection
{
    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "twitter-clone";
    protected function getConnect()
    {
        try {
            $dsn = "mysql:host=$this->host;dbname=$this->database";
            $connection = new PDO($dsn, $this->username, $this->password);
            $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            return $connection;
        } catch (PDOException $err) {
            return ("veri tabanına bağlantı hatası" . $err->getMessage());
        }
    }
}
class Posts extends Connection
{
    public function addPost($userID, $post)
    {
        $con = new Connection();
        $connect = $con->getConnect();
        try {
            $sql = "INSERT INTO `twitter-clone`.`posts` (`userID`, `postDescription`) VALUES (:userId,:post)";
            $stmt = $connect->prepare($sql);
            $stmt->execute(["userId" => $userID, "post" => $post]);
            echo json_encode("Post başarıyla kaydedildi");
        } catch (Exception $e) {
            echo "HATA OLUŞTU ", $e->getMessage();
        }
    }
    public function getAllPosts()
    {
        $con = new Connection();
        $connect = $con->getConnect();
        try {
            $sql = "SELECT * FROM `twitter-clone`.`posts`";
            $stmt = $connect->prepare($sql);
            $stmt->execute([]);
            echo json_encode($stmt->fetchAll());
        } catch (Exception $e) {
            echo "HATA OLUŞTU ", $e->getMessage();
        }
    }
    public function likePost($postID){
        $con = new Connection();
        $connect = $con->getConnect();
        try {
            $sql = "UPDATE `twitter-clone`.`posts` SET `likes`=`likes`+1 WHERE `postID`='$postID'";
            $stmt = $connect->prepare($sql);
            $stmt->execute([]);
            echo json_encode("begenildi");
        } catch (Exception $e) {
            echo "HATA OLUŞTU ", $e->getMessage();
        }
    }
}
?>