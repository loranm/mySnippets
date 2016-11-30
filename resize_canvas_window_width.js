/*
 * Ceci est une ardoise JavaScript.
 *
 * Saisissez du code JavaScript, puis faites un clic droit ou sélectionnez à partir du menu Exécuter :
 * 1. Exécuter pour évaluer le texte sélectionné (Cmd-R),
 * 2. Examiner pour mettre en place un objet Inspector sur le résultat (Cmd-I), ou,
 * 3. Afficher pour insérer le résultat dans un commentaire après la sélection. (Cmd-L)
 */

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Canvas Resize</title>

    <script type="text/javascript">
        function resize_canvas(){
            canvas = document.getElementById("canvas");
            if (canvas.width  < window.innerWidth)
            {
                canvas.width  = window.innerWidth;
            }

            if (canvas.height < window.innerHeight)
            {
                canvas.height = window.innerHeight;
            }
        }
    </script>
</head>

<body onresize="resize_canvas()">
        <canvas id="canvas">Your browser doesn't support canvas</canvas>
</body>
</html>