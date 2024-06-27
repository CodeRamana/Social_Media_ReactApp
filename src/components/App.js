import Header from "./Header";
import Search from "./Search";
import Nav from "./Nav";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import PostPage from "./PostPage";
import EditPage from "./EditPage";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider> 
      <Header title={"Ramana's Social Media"}/>
      <section>
        <Search/>
        <Nav />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/Post"
            element={
              <NewPost/>
            }
          />
          <Route path="PostPage/:id" element={<PostPage/>}/>
          <Route path="EditPage/:id" element={<EditPage/>}/>
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
    </DataProvider>
    </div>
  );
}

export default App;
