<?php
require_once 'function.php';
if (isset($_POST["action"])) 
{	
	switch ($_POST["action"]) 
	{	
		case 'event':  		adminlogin();
								break;

		default:				echo "Invalid";
								break;
	}
}
else{
	die("error");
}
?>