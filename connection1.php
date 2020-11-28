<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "miniproj");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$clubname = mysqli_real_escape_string($link, $_REQUEST['clubname']);
$brief = mysqli_real_escape_string($link, $_REQUEST['brief']);
$email = mysqli_real_escape_string($link, $_REQUEST['email']);
$handle = mysqli_real_escape_string($link, $_REQUEST['handle']);
$website = mysqli_real_escape_string($link, $_REQUEST['website']);
$Mobile = mysqli_real_escape_string($link, $_REQUEST['Mobile']);
//$img = mysqli_real_escape_string($link, $_REQUEST['img']);
// Attempt insert query execution
$sql = "INSERT INTO registration (clubname,brief,email,handle,website,Mobile) VALUES ('$clubname','$brief','$email','$handle','$website','$Mobile')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>
