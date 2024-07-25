
import './App.css'

function App() {
 return <div className="App">
  <div className="logo-box">
      <img src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="twitter logo" className='logo'/>
      <h2>Sign in to Twitter</h2>

      <button>
        <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="google logo" />
        Sign in with Google
      </button>

      <button>
        <img src="https://tse2.explicit.bing.net/th?id=OIP.B3Q_tm70cPq-eez3izjCgAHaHa&pid=Api&P=0&h=180" alt="google logo" />
        Sign in with Apple
      </button>

      <hr />
      <span>Or</span>

      <form className='form'>
        <input type="text" placeholder='Enter your email or username'/>
        <button>Next</button>
      </form>

      <p className='sign-up'>Don't hava an account <a>Sign Up</a> </p>
  </div>
 </div>
}

export default App
