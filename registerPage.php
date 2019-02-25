<html>
<head>
<link rel="stylesheet" media="screen and (min-width: 0px)"href="css\css.css">
<link rel="stylesheet" media="screen and (max-width: 899px)"href="css\css_small.css">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="javascript.js"></script>
    
<title>My Website</title>
</head>

<body>
    
    <div id="bg"></div>

<h1>Nintendo Switch News</h1>



<script>menu();</script>


<img id="leftjc" src="img/jcleft_better.png" alt="left joycon" style="float:left;" width="175" height="475">
<img id="rightjc" src="img/jcright_better.png" alt="right joycon" style="float:right;" width="175" height="475">
<script>getStyle();</script>


<div id="content">

Welcome <?php echo $_POST["username"]; ?><br>
Your email is: <?php echo $_POST["email"]; ?><br>
Your password is: <?php echo $_POST["password"]; ?>

<?php

/*** mysql hostname ***/
$hostname = 'localhost';

/*** mysql username ***/
$username = 'root';

/*** mysql password ***/
$password = 'root';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=users", $username, $password);
    /*** echo a message saying we have connected ***/
    echo 'Connected to database';
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
	
	?>

</div>


</body>

<script>footer();</script>


</html>