<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'display.kult@gmail.com'; // Remplacez par votre adresse e-mail
  $subject = 'Nouveau message de formulaire de contact';
  $body = "Nom: $name\n\nE-mail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    // Rediriger vers la page de succès
    header('Location: success.html');
    exit(); // Assurez-vous de quitter le script PHP après la redirection
  } else {
    echo 'Erreur lors de l\'envoi du message.';
  }
}
?>

?>