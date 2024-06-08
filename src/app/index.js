import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`入力されたテキスト: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div>
      <Head>
        <title>ホームページ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <h1>ChatRoulette</h1>
      </header>

      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <p className="cand">test</p>
            <br />
            <input 
              type="text" 
              id="inputText" 
              placeholder="テキストを入力してください" 
              value={inputValue} 
              onChange={handleInputChange} 
              style={{ 
                padding: '10px', 
                width: '800px', 
                fontSize: '1.5rem', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                marginRight: '10px' 
              }} 
            />
            <button type="submit" id="submit">送信</button>
          </form>
          <button onClick={handleClick} id="start" style={{ float: 'right', margin: '0 200px 0 0' }}>start!</button>
        </section>
      </main>

      <footer>
        <p>&copy; ChatRoulette. All rights reserved.</p>
      </footer>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem 0;
          text-align: center;
        }

        nav ul {
          list-style: none;
          padding: 0;
        }

        nav ul li {
          display: inline;
          margin: 0 1rem;
        }

        nav ul li a {
          color: #fff;
          text-decoration: none;
        }

        main {
          padding: 2rem;
        }

        section {
          margin-bottom: 2rem;
        }

        footer {
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 1rem 0;
          position: fixed;
          width: 100%;
          bottom: 0;
        }

        button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 10px;
        }

        button:hover {
          background-color: #005bb5;
        }

        form {
          margin-top: 20px;
        }

        p.cand {
          font-size: 1.5rem;
          border-radius: 5px;
          background-color: white;
          display: inline;
          padding: 5px 5px 5px 5px;
        }

        input {
          padding: 10px;
          width: 800px;
          font-size: 1.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 10px;
        }

        input:focus {
          outline: none;
          border-color: #0070f3;
        }
      `}</style>
    </div>
  );
};

export default Home;