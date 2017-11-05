<?php4
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "collegedb";
	$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) 
		{
		    die("Connection failed: " . $conn->connect_error);
		}

	function adminlogin()
	{
		global $conn;
	   	$adminemail= mysqli_real_escape_string($conn,$_POST['adminemail']);
	   	$adminname=  mysqli_real_escape_string($conn,$_POST['adminname']);
	   	$adminpassword= mysqli_real_escape_string($conn,$_POST['adminpassword']);
	   	$adminreenterpassword= mysqli_real_escape_string($conn,$_POST['adminreenterpassword']);
	   	die($adminemail);

	   if ($adminreenterpassword=$adminpassword){	
				$adminloginquery= "SELECT emailadmin FROM admin WHERE emailadmin=$adminemail";
				if ($conn->query($adminloginquery) = $adminemail ) 
				{
					global $conn;
					$adminloginquery2= "SELECT nameadmin FROM admin WHERE nameadmin=$adminname";

						if(mysqli_query($conn,$adminloginquery2)= $adminname)
							{
								  if(mysqli_query($conn,$adminloginquery2)= $adminname)

								  {
								  	$adminloginquery3= "SELECT passwordadmin FROM admin WHERE passwordadmin=$adminpassword";

								  	 if(mysqli_query($conn,$adminloginquery3)= $adminpassword){
								  	 		echo '<div class="alert alert-info" role="alert">"email mismatwefwch"</div>'
								  	 }

								  }

								  else {
								  	echo "wrong password";
								  }
							}
						else{
							 echo "userame not matched ";
						}	
				} 
				else 
				{
					echo '<div class="alert alert-info" role="alert">"email mismatch"</div>'
				    return;	
				}
	   }
	   else{
	   		echo '<div class="alert alert-info" role="alert">"Passwords mismatch"</div>';
	   }
		$conn->close();	
	}

?> 