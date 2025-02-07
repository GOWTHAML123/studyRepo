import './login.css';

function login(){
    return(
            <form class="d-flex vw-100 vh-100 align-items-center justify-content-center">
        
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
         <label class="form-label" for="form2Example1">Email address</label>
        </div>
      
        
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>
      
      
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div class="col">
            
            <a href="#!">Forgot password?</a>
          </div>
        </div>
      
        
        <button type="button" class="btn btn-primary btn-block mb-4" >Sign in</button>
      
        
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>

    );
}

export default login;

