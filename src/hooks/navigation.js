import { useNavigate } from "react-router-dom";

export function useNavigation() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToSignIn = () => {
        navigate("/signin");
    };

    const goToSignUp = () => {
        navigate("/signup");
    };

    const goToMypage = () => {
        navigate("/mypage");
    };

    const goToIntro = () => {
        navigate("/intro");
    };

    const goToComputer = () => {
        navigate("/computer");
    };

    const goToSmartphone = () => {
        navigate("/smartphone");
    };

    const goToQuiz = () => {
        navigate("/quiz");
    };

    const goToQuizDetail = () => {
        navigate("/quiz/detail");
    };

    const goToGym = () => {
        navigate("/gym");
    };

    return {
        goToHome,
        goToSignIn,
        goToSignUp,
        goToMypage,
        goToIntro,
        goToComputer,
        goToSmartphone,
        goToQuiz,
        goToQuizDetail,
        goToGym,
    };
}
