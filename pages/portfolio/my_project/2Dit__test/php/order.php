<?php 

  $headers = 'Content-type: text/plain; charset="utf-8"';

  $username = $_POST['username'];
  $userphone = $_POST['tel'];
  $usermail = $_POST['mail'];

  $headers = 'MiME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset="utf-8"';

  $to = 'x-redman@mail.ru';
  $subject = 'Заявка с сайта 2Dit';
  $message = "
  <html>
  <table>
    <tr>
      <td>Имя</td>
      <td>$username</td>
    </tr>
    <tr>
      <td>Емайл</td>
      <td>$userphone</td>
    </tr>
    <tr>
      <td>Телефон</td>
      <td>$usermail</td>
    </tr>
  </table>
  </html>
  "
  mail($to, $subject, $message, $headers);
  echo 'отправка формы';
?>