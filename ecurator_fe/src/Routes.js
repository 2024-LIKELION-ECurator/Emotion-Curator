import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./pages/community/postList";
import PostWrite from "./pages/community/postWrite";
import PostEdit from "./pages/community/postEdit";

const Router = () => {
        return (
        <BrowserRouter>
            <Routes>
            <Route path="/community" element={<PostList />} />
            <Route path="/postwrite" element={<PostWrite />} />
            <Route path="/postedit" element={<PostEdit />} />
            </Routes>
        </BrowserRouter>
        );
    };
    
    export default Router;