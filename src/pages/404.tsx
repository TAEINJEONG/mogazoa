import { NextPage } from 'next';
import React from 'react';

const Error404: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#353542',
        color: '#ffffff',
        padding: '0 20px',
        textAlign: 'center',
      }}
    >
      {/* 404 텍스트 + 아이콘 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 34 28' height='40' width='48'><path fill='url(%23paint0_linear_4215_8738)' d='M2 0C0.895431 0 0 0.895428 0 2V21.0966C0 22.2012 0.895431 23.0966 2 23.0966H26.7159L32.3646 27.7679C33.0166 28.307 34.0019 27.8433 34.0019 26.9973L34.0022 21.1296C34.0023 21.1186 34.0024 21.1076 34.0024 21.0966V2C34.0024 0.895431 33.107 0 32.0024 0H2ZM6.66686 10.043C7.21914 10.043 7.66686 10.4907 7.66686 11.043V11.3986C7.66686 12.4633 8.40427 13.6778 10.1297 14.7011C11.8224 15.705 14.2488 16.3694 17.0009 16.3694C19.7529 16.3694 22.1793 15.705 23.872 14.7011C25.5974 13.6778 26.3349 12.4633 26.3349 11.3986V11.043C26.3349 10.4907 26.7826 10.043 27.3349 10.043H28.0017C28.554 10.043 29.0017 10.4907 29.0017 11.043V11.3986C29.0017 13.828 27.3511 15.7767 25.2157 17.0431C23.0476 18.329 20.1402 19.0808 17.0009 19.0808C13.8615 19.0808 10.9541 18.329 8.78597 17.0431C6.65058 15.7767 5 13.828 5 11.3986V11.043C5 10.4907 5.44772 10.043 6 10.043H6.66686Z' clip-rule='evenodd' fill-rule='evenodd'></path><defs><linearGradient gradientUnits='userSpaceOnUse' y2='0.859382' x2='34.675' y1='0' x1='0' id='paint0_linear_4215_8738'><stop stop-color='%235097FA'></stop><stop stop-color='%235363FF' offset='1'></stop></linearGradient></defs></svg>"
          alt="Icon"
          style={{
            width: '60px',
            height: '60px',
            marginRight: '10px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        />
        <h1 className="title404">404</h1>
      </div>

      {/* 영어 문구 - 모바일에서 줄바꿈 */}
      <p
        style={{
          fontSize: '24px',
          marginBottom: '5px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Sorry, the page you are looking for<span className="mobile-br"><br /></span> does not exist.
      </p>

      {/* 한글 문구 */}
      <p
        style={{
          fontSize: '20px',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        죄송합니다. 페이지를 찾을 수 없습니다.
      </p>

      {/* 홈으로 가기 버튼 */}
      <a
        href="/"
        className="home-button"
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          color: '#353542',
          backgroundColor: '#ffffff',
          textDecoration: 'none',
          borderRadius: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
          cursor: 'pointer',
          border: '1px solid rgba(0, 0, 0, 0.2)',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#e0e7ff';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        홈으로 가기
      </a>

      {/* 스타일 정의 */}
      <style jsx>{`
        .mobile-br {
          display: none;
        }

        .title404 {
          font-size: 80px;
          font-weight: bold;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 600px) {
          .mobile-br {
            display: inline;
          }

          .title404 {
            font-size: 48px;
          }

          .home-button {
            font-size: 14.4px; /* 18px 기준 약 20% 축소 */
            padding: 9.6px 19.2px; /* 12px, 24px 대비 약 20% 축소 */
          }
        }
      `}</style>
    </div>
  );
};

export default Error404;
