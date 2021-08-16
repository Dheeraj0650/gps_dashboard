
export default function(){

  function fetctUsers(name,password){
    fetch('https://pacific-tundra-98620.herokuapp.com/users/' + name + "/" + password)
    .then((response) => {
        console.log(response);
        var data = response.json();
        var p = Promise.resolve(data);
         p.then(function(values) {
            console.log(values)

         });
    })
  }

  const clickHandler = (event) => {
      event.preventDefault();
      console.log(event.target);
      const name = event.target.email;
      const password = event.target.pass;
      console.log("bye " + name + " " + password);
      fetctUsers(name,password);
  }

  return (
    <div class="limiter">
  		<div class="container-login100">
  			<div class="wrap-login100">
  				<div class="login100-pic js-tilt" data-tilt>
  					<img src="images/img-01.png" alt="IMG"/>
  				</div>

  				<form class="login100-form validate-form" action="/urlencoded?firstname=sid&lastname=sloth" method="POST" enctype="application/x-www-form-urlencoded" onSubmit = {clickHandler}>
  					<span class="login100-form-title">
  						Member Login
  					</span>

  					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
  						<input class="input100" type="text" name="email" placeholder="Email"/>
  						<span class="focus-input100"></span>
  						<span class="symbol-input100">
  							<i class="fa fa-envelope" aria-hidden="true"></i>
  						</span>
  					</div>

  					<div class="wrap-input100 validate-input" data-validate = "Password is required">
  						<input class="input100" type="password" name="pass" placeholder="Password"/>
  						<span class="focus-input100"></span>
  						<span class="symbol-input100">
  							<i class="fa fa-lock" aria-hidden="true"></i>
  						</span>
  					</div>

  					<div class="container-login100-form-btn">
  						<button class="login100-form-btn form-actions" >
  							Login
  						</button>
  					</div>

  					<div class="text-center p-t-136">
  						<a class="txt2" href="#">
  							Create your Account
  							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
  						</a>
  					</div>
  				</form>
  			</div>
  		</div>
  	</div>
  );
}
