import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import PostForm from "./Components/PostForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Blog" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="Create" element={<PostForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
