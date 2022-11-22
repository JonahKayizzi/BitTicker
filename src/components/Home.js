import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const fetchedCoins = useSelector((state) => state.coinSlice);

  return (
    <section>
      <ul className="coins-container">
        {fetchedCoins.coins.map((coin) => (
          <li key={coin.symbol} className="coin-wrapper">
            <p className="coin-symbol">{coin.symbol}</p>
            <div className="home-detail">
              <small>{coin.bidPrice}</small>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
