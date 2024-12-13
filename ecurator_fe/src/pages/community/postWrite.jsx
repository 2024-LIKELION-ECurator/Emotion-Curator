import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Poststyled";
import TextInput from "../../components/inputs/TextInput";
import RegisterModal from "../../components/modals/registerModal";

const PostWrite = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openRegisterModal = () => setIsModalOpen(true);

    // 게시글 등록 핸들러
    const handleRegisterModal = async () => {
        try {
            //await registerPost();
            alert("일기가 등록되었습니다.");
            navigate("/community");
        } catch (error) {
            console.error("일기 삭제 중 오류 발생:", error);
            alert("일기 등록에 실패했습니다.");
        }
    };
    
        return (
        <S.Container>
            <S.Main>
            <S.Title>
                <TextInput
                        height={107}
                        placeholder="제목을 입력하세요"
                        onChange={(event) => {
                        }}
                />
            </S.Title>
            <S.Contents>
                    <TextInput
                        height={1165}
                        placeholder="내용을 입력하세요"
                        onChange={(event) => {
                        }}
                    />
            </S.Contents>
            </S.Main>
            <S.BarWrite>
            <S.Button
            onClick={openRegisterModal}>
            등록
            </S.Button>
            </S.BarWrite>
            {isModalOpen && (
                <RegisterModal
                    onConfirm={handleRegisterModal}
                />
            )}
        </S.Container>
        );
    };
    
    export default PostWrite;