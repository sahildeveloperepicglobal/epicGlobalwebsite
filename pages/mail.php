<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];
$to = "reservations@beyondstay.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Phone =" . $phone;
$headers = "From: corbett@yoursite.com" . "\r\n" .
"CC: anupam.singh@epicglobal.co.in , sanjeev.kumar@epicglobal.co.in";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    header("Location:thankyou.html");
}
//redirect
?>