'use client';

import styled from "styled-components";

export default function Home() {
  return (
    <>
      <SHeader>
        <STitle>Chat-Roulette</STitle>
      </SHeader>
      <SCandidate className="candidate">
        <SEvent>焼肉</SEvent>
      </SCandidate>
      <SInputArea className="inputBox">
        <SInput type="text" placeholder="イベントを入力してください" />
        <SButton>送信</SButton>
      </SInputArea>
    </>
  );

}

const SHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 8px;
  text-align: center;
`;

const STitle = styled.h1`
  font-size: 1.6;
  padding: 16px;
`;

const SCandidate = styled.div`
  width: 80%;
  min-height: 550px;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 40px;
`;

const SEvent = styled.div`
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 1.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const SInputArea = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SInput = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const SButton = styled.button`
  position: absolute;
  right: 46px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
