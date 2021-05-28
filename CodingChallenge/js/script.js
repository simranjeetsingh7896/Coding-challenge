window.onload = async function displayOutput(){
		var url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php"; //API
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

							//Logic for displaying role
							if(employees[e].roles.length == 1){				
								Output += '<span class="role1">' + employees[e].roles[0].rolename + '</span>';
							} else {
								for (var r = 0; r < employees[e].roles.length; r++){
									Output += '<span class="role2">' + employees[e].roles[r].rolename + '</span>';
								}
							}
							Output += '</div></div>';
							//Display Output 
							document.getElementById("results").innerHTML += Output;
						}
				}
		}
		xhttp.send();
};
