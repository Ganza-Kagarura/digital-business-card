import "./Header.css"
import Header from './Header';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';


function App() {
  return (
    <div className="profile-card">
          <Header />
          <About />
          <Interests />
          <Footer />
    </div>
  );
}

export default App;
