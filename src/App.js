import './App.css';
// import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">

      <div className = "login-form-div">      
        <div className = "login-page">
          {/* <div className = "form-div"> */}
            <div className = "google-btn">
              <button type="button" class="login-with-google-btn" >
                Sign in with Google
              </button>
            </div>

            <p className = "login-choice">
              ----------------- or Sign In with your email -----------------
            </p>

            <div className = "login-form">
              <form method = "post">
                <div className = "credentials">
                  <p>Email Address</p>
                  <input type = "email-address" placeholder = "Enter your Email" className = "form-input" />
                  <div className = "password-heading">
                  <p>Password</p>
                  </div>
                  <input type = "password" placeholder = "Enter your password" className = "form-input" />
                </div>
                <div className = "submit-btn">
                  <input type = "submit" value = "Sign In" className = "submit-button" />
                </div>
              </form>
            {/* </div> */}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
