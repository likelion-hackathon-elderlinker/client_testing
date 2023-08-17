import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Gym from "./pages/Gym";
import Computer from "./pages/Computer";
import Smartphone from "./pages/Smartphone";
import Quiz from "./pages/Quiz";
import MyPage from "./pages/MyPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import QuizDetail from "./pages/Quiz/QuizDetail";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/computer" element={<Computer />} />
                    <Route path="/smartphone" element={<Smartphone />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/quiz/detail" element={<QuizDetail />} />
                    <Route path="/gym" element={<Gym />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default routes;
