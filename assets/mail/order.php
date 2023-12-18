<?php
$yourname = $_POST['yourname'];
$yourphone = $_POST['yourphone'];
$promocode = $_POST['promocode'];

$subject = "Заявка на «Онлайн курс по ремонту телефонов»";

$to = "daurovvlad6@gmail.com"; // ДЛЯ
$namefrom = "Telephone1";

$headers = "From: $namefrom <order@telephone1.ru>" . PHP_EOL; // ОТ
$headers .= "Reply-To: $to" . PHP_EOL;

$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$message = "<p><strong>Имя:</strong> $yourname</p>
\n<p><strong>Телефон:</strong> $yourphone</p>
\n<p><strong>Промокод:</strong> $promocode</p>";

mail($to, $subject, $message, $headers);
?>