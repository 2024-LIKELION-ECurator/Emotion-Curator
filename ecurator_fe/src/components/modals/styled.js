import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 20;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  background: white;
  padding: 44px;
  border-radius: 17px;
  width: 458px;
  height: 236px;
  box-sizing: border-box;
  background-color: #D8E3E4;
  position: relative;
`;

export const TextType = styled.div`
  font-size: 20px
`;

export const SubText = styled.div`
  font-size: 15px
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Button = styled.div`
  display: flex;
  width: 120px;
  height: 36px;
  flex-direction: column;
  background-color: #000000;
  border: 1px solid #000;
  margin-top: 10px;
  color: #FFFFFF;
  border-radius: 15px;
  align-items: center; /* 가로축 가운데 정렬 */
  justify-content: center; /* 세로축 가운데 정렬 */
`;
export const Button2 = styled.div`
  display: flex;
  width: 120px;
  height: 36px;
  flex-direction: column;
  background-color: #FFFFFF;
  color: #000;
  border: 1px solid #000;
  border-radius: 15px;
  align-items: center; /* 가로축 가운데 정렬 */
  justify-content: center; /* 세로축 가운데 정렬 */
`;


export const ModalContent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 35px;
  background: white;
  padding: 44px;
  border-radius: 17px;
  width: 458px;
  height: 236px;
  box-sizing: border-box;
  background-color: #D8E3E4;
  position: relative;
  `;

export const TextType2 = styled.div`
  font-size: 20px
  
`;

export const SubText2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
