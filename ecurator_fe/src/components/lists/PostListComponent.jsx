import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 152px;
    gap: 35px;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 1px;
        }
    }
`;

function PostListComponent() {
    const posts = [
        {
            id: 1,
            title: "첫 번째 게시물",
            content: "이것은 첫 번째 게시물 내용입니다.",
            createdAt: "2024-12-01T00:00:00Z",
            type: "general",
        },
        {
            id: 2,
            title: "두 번째 게시물",
            content: "이것은 두 번째 게시물 내용입니다.",
            createdAt: "2024-12-02T00:00:00Z",
            type: "news",
        },
        {
            id: 3,
            title: "세 번째 게시물",
            content: "이것은 세 번째 게시물 내용입니다.",
            createdAt: "2024-12-03T00:00:00Z",
            type: "general",
        }
    ];


    return (
        <Wrapper>
            {posts.map((post) => (
                <PostListItem
                    key={post.id}
                    post={{
                        title: post.title,
                        content: post.content,
                        date: new Date(post.createdAt).toLocaleDateString(),
                    }} 
                />
            ))}
        </Wrapper>
    );
}

export default PostListComponent;
