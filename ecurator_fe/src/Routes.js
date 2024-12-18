import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./pages/community/postList";
import PostWrite from "./pages/community/postWrite";
import PostView from "./pages/community/postView";
import Calendar from "./pages/calendar/CalendarPage";
import PostEdit from "./pages/community/postEdit";

const Router = () => {
        return (
        <BrowserRouter>
            <Routes>
            <Route path="/community" element={<PostList />} />
            <Route path="/postwrite" element={<PostWrite />} />
            <Route path="/postedit" element={<PostEdit />} />  
            <Route path="/postview" element={<PostView />} />
            <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </BrowserRouter>
        );
    };
    
    export default Router;
