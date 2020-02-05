import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header__wrapper'>
        <span role='img' aria-label='pretzel' className='header__emoji'>🥨</span>
        <h1 className='header__title'>
          Emoji Eats
          <div className='header__subtitle'>Fresh Seasonal Emojis</div>
        </h1>
      </div>
    );
  }
}

export default Header;