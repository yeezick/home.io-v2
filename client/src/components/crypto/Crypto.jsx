import { useState, useEffect } from "react";
import { getCrypto } from "../../services/data";
import "./Crypto.css";

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCrypto = async () => {
      const response = await getCrypto();
      setCryptoData(response);
    };
    fetchCrypto();
  }, []);

  if (!cryptoData[0]) {
    <h2> loading </h2>;
  }
  
  const handleConversion = (price) => {
    const dollar = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)
    return dollar
  }

  return (
    <div>
      <h3 className="user-component-title">CryptoCurrency</h3>
      <div className="crypto">
        <p className="crypto-title">These are the top 10 trending digital currencies</p>
        <hr/>
        {cryptoData.map((crypto, id) => (
          <div className="crypto-item" key={id}>
            <p className="crypto-name"> {crypto.name} <br/>({crypto.symbol.toUpperCase()})</p>
            <p className="crypto-price"> <b>Price:</b> {handleConversion(crypto.current_price)} </p>
            <p className="crypto-percent">
              <b>Change over 24 hours:</b> <br/> {crypto.price_change_percentage_24h} %
            </p>
            <br/>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
