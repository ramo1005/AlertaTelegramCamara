<?php
  include 'send/sendPhoto.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="style.css">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
  <script defer src="face-api.min.js"></script>
  <script defer src="script.js"></script>
  <script src="jquery/jquery-3.5.1.min.js"></script>

  <title>PFDC</title>

</head>
<body style="background-color:grey;">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">Camaras De Seguridad</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">

                </ul>
            </div>
        </div>
    </nav>


    <video id="video"width="720" height="560" autoplay muted></video>

    <canvas id="canvas" name="imgBase64" width="720" height="560"style="display:none;"></canvas>

    <form method="post" id="form"enctype="multipart/form-data">
      <label for="linkimg" class="form-label" style="display:none;">Link:</label>
      <input type="text" class="form-control" id="linkimg" name="linkimg"style="display:none;">
      <label for="caption" class="form-label" style="display:none;">Link:</label>
      <input type="text" class="form-control" id="caption" name="caption"style="display:none;">

      <label for="linkvideo" class="form-label" style="display:none;">Link:</label>
      <input type="text" class="form-control" id="linkvideo" name="linkvideo"style="display:none;">

    </form>


</body>

</html>