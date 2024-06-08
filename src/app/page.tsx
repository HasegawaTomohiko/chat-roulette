"use client";

import styled from "styled-components";
import { useEffect, useState } from 'react';

let socket : WebSocket;

export default function Home() {

  const [message, setMessage] = useState('');
  const [eventList, setEventList] = useState([]);
  const [rouletteResult, setRouletteResult] = useState('');

  useEffect(() => {
    socket = new WebSocket('ws://localhost:8081');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'updateEventList') {
        setEventList(data.eventList);
      } else if (data.type === 'rouletteResult') {
        setRouletteResult(data.content);
        alert(`Selected: ${data.content}`);
      }
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    console.log("入力された");
    if (message.trim()) {
      socket.send(JSON.stringify({ type: 'newEventList', content: message }));
      setMessage('');
    }
  };

  const handleRoulette = () => {
    socket.send(JSON.stringify({ type: 'roulette' }));
  };

  return (
    <>
      <SHeader>
        <STitle>Chat-Roulette</STitle>
      </SHeader>
      <SMain>
        <SEventGrid className="candidate">
          {eventList.map((eventData) => (
              <SEvent key={eventData}>{eventData}</SEvent>
          ))}
        </SEventGrid>
        <SOperation>
          <SInputArea className="inputBox">
            <SInput value={message} onChange={(event) => setMessage(event.target.value)} type="text" placeholder="イベントを入力してください" />
            <SButton onClick={sendMessage}>送信</SButton>
          </SInputArea>
          <SRoulette onClick={handleRoulette}>ルーレット</SRoulette>
        </SOperation>
      </SMain>
      <SFooter>
        <p>&copy; ChatRoulette. All rights reserved.</p>
      </SFooter>
    </>
  );
}

const SHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  text-align: center;
  height: 80px;
`;

const STitle = styled.h1`
  font-size: 1.6;
`;

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
  background-color: #f0f0f0;
`;

const SEventGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-height: calc(100vh - 200px);
  padding: 40px;
  overflow: scroll;
  &::-webkit-scrollbar{   display: none; }
`;

const SEvent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  min-width: 240px;
  min-height: 200px;
  background-color: #aad4f9;
  border-radius: 4px;
  text-align: center;
  font-size: 1.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const SOperation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: calc(100% - 80px);
  margin: 0 auto;
  margin-bottom: 20px;
`;

const SInputArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: calc(100% - 80px);
  margin: 0 auto;
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
  right: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const SRoulette = styled.button`
  width: 150px;
  padding: 18px;
  border-radius: 8px;
  margin-left: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const SFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
`;
