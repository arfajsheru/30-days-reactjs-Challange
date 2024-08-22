import HeaderApp from "./Componet/HeaderApp";
import Footer from "./Componet/Footer";
import PostList from "./Componet/PostList";
import Forms from "./Componet/Forms";
import "./App.css";
import { useState } from "react";
import Login from "./Componet/Login";
import Sign_in from "./Componet/Sign_in";
import PostListProvider from "./Store/Post-List-Store";
function App() {
  const [selectedItem, setSelectedItem] = useState("");

  const [selectedLogin, setSelectedLogin] = useState("");
  return (
    <PostListProvider>
      <HeaderApp
        selectedItem={selectedItem}
        setselectedItem={setSelectedItem}
        selectedLogintab={selectedLogin}
        setSelectedLoginTab={setSelectedLogin}
      ></HeaderApp>
      {selectedItem === "Home" ? <PostList></PostList> : <Forms></Forms>}
      {selectedLogin === "Login" ? <Login></Login> : <Sign_in></Sign_in>}

      <Footer></Footer>
    </PostListProvider>
  );
}

export default App;
