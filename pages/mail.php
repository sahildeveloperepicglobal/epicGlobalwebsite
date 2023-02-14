<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['number'];
$message= $_POST['message'];
$to = "epicglobal.co.in";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message . "\r\n Phone =" . $phone;
$headers = "From: epicglobal.co.in" . "\r\n" .
"CC: anupam.singh@epicglobal.co.in , 007rahulpundir@gmail.com , vikas.upadhyay@epicglobal.co.in";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    header("Location:thankyou.tsx");
    // redirect("/contact-us.tsx")
}
//redirect
?>