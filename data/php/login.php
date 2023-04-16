<?php

require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'] ?? '';
  $password = $_POST['password'] ?? '';

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email']);
    exit;
  }

  if (empty($password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Password is required']);
    exit;
  }

  $stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
  $stmt->execute(['email' => $email]);
  $user = $stmt->fetch();

  if (!$user) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid credentials']);
    exit;
  }

  if (!password_verify($password, $user['password'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid credentials']);
    exit;
  }

  $token = bin2hex(random_bytes(64));

  $stmt = $pdo->prepare('UPDATE users SET token = :token WHERE id = :id');
  $stmt->execute(['token' => $token, 'id' => $user['id']]);

  echo json_encode(['token' => $token]);
}
