import React from 'react';

const Head = props => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://kr.object.ncloudstorage.com/boostcamp-chan/airbnb-clone/airbnb-logo.svg"
          alt="airbnb-logo"
        />
      </div>
      <div className="header-search">
        <input type="text" className="header-search-input" placeholder="검색" />
      </div>
      <div className="header-menu">
        <div className="header-menu-signup">회원가입</div>
        <a href="./" className="header-menu-login">
          로그인
        </a>
      </div>
    </header>
  );
};

export default Head;
