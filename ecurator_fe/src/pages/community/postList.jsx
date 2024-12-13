import { useNavigate } from "react-router-dom";
import * as S from "./Poststyled";
import DeleteModal from "../../components/modals/deleteModal";
import PostListComponent from "../../components/lists/PostListComponent";

const PostList = () => {
    const navigate = useNavigate();
    
        return (
        <S.Container>
            <S.Main>
                <PostListComponent/>
            </S.Main>
            <S.Bar>
            <S.Button
            onClick={() => {
            navigate("/");
            }}>
            BACK
            </S.Button>
            <S.Button
            onClick={() => {
            navigate("/");
            }}>
            HOME
            </S.Button>
            </S.Bar>
        </S.Container>
        );
    };
    
    export default PostList;