import Banner from "./Components/Banner";
import Footer from "./Components/footer";
import NavbarComponent from "./Components/Navbar";
import News from "./Components/News";
import Services from "./Components/services";

function App() {
  return (
    <div className="App">

     <NavbarComponent />
     <Banner/>
     <Services />
     <News />
     <Footer />

    </div>
  );
}

export default App;
