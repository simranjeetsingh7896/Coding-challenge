window.onload = async function displayOutput(){
		var url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php"; //API Call
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", url, true);
		xhttp.onreadystatechange = function (){
				if(xhttp.readyState == 4 && xhttp.status == 200){
						var employees = JSON.parse(xhttp.responseText);

						for (var e = 1; e <= Object.keys(employees).length; e++){
								
							var id = employees[e].employeeid; // feteching employee id
							var name = employees[e].employeefname + " " + employees[e].employeelname; //feteching full name
							var bio = employees[e].employeebio; //feteching bio
							var Output = "";

							//To display Output in HTML
							Output += '<div class="section">';
							// To add crown to featured employee
							if(employees[e].employeeisfeatured == 1){
								Output += '<div class="crown">👑</div>';
							}
							Output += '<div class="img-section"><img src="http://sandbox.bittsdevelopment.com/code1/employeepics/' + id + '.jpg ">' + '</div>'; //displaying image
							Output += '<div class="bio-section"><h2>' + name + '</h2>'; //displaying name
							Output += '<p>' + bio + '</p></div><div class="role-section">'; //displaying name
							Output += employees[e].roles.map(function(Role){ //displaying roles
								return '<div class="role">' + 
									'<p style= "background-color:' + Role.rolecolor + '">' +Role.rolename + '</p>'
							}).join("  ");
							
							Output += '</div></div></div>';
							document.getElementById("results").innerHTML += Output;
						}
				}
		}
		xhttp.send();
};
