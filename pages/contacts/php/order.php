<?php

$headers = 'Content-type: text/plain; charset="utf-8"';

$username = $_POST['username'];
$useremail = $_POST['useremail'];
$usertelephone = $_POST['usertelephone'];
$usertelegram = $_POST['usertelegram'];

$headers = 'MiME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset="utf-8"';

$to = "x-redman@mail.ru";
$subject = "Письмо с моего сайта";
$message = "
<html>
  <table>
    <tr>
      <td>Имя</td>
      <td>$username</td>
    </tr>
    <tr>
      <td>Емайл</td>
      <td>$useremail</td>
    </tr>
    <tr>
      <td>Телефон</td>
      <td>$usertelephone</td>
    </tr>
    <tr>
      <td>Телеграм</td>
      <td>$usertelegram</td>
    </tr>
  </table>
</html>
";

mail ($to, $subject, $message, $headers);
echo 'отправка формы';
?>

