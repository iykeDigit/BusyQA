import "./App.css";
import ContentSection from "./components/content-section/ContentSection";
import DropDown from "./components/search-area/drop-down/DropDown";
import SearchBox from "./components/search-area/search-box/SearchBox";
import MainTitle from "./components/title/MainTitle";
import bitcoinImg from './img/bitcoin.png';
import bnbImg from './img/bnb.png';
import etherumImg from './img/ethereum.png';
import tetherImg from './img/tether.png';
import solanaImg from './img/solana.png';
import usdcImg from './img/usd-coin.png';


function App() {
  let data = [
    {
      name: "Bitcoin",
      currentPrice: 59789.0,
      marketCap: 1175931107572,
      twentyFourHourVolume: 34395407507,
      twentyFourHourChage: -6.25,
      imgwidth: "35px"
    },
    {
      name: "Etherum",
      currentPrice: 2981.53,
      marketCap: 363893889865,
      twentyFourHourVolume: 19349023571,
      twentyFourHourChage: -6.53,
      imgwidth: "20px"
    },
    {
      name: "Tether",
      currentPrice: 1.0,
      marketCap: 110503849633,
      twentyFourHourVolume: 43404519853,
      twentyFourHourChage: 0.06,
      imgwidth: "30px"
    },
    {
      name: "BNB",
      currentPrice: 568.22,
      marketCap: 87344440730,
      twentyFourHourVolume: 2030004641,
      twentyFourHourChage: -4.32,
      imgwidth: "40px"
    },
    {
      name: "Solana",
      currentPrice: 125.16,
      marketCap: 56090533555,
      twentyFourHourVolume: 3814576230,
      twentyFourHourChage: -8.69,
      imgwidth: "25px"
    },
    {
      name: "USDC",
      currentPrice: 1.0,
      marketCap: 33117668058,
      twentyFourHourVolume: 9142246288,
      twentyFourHourChage: -0.05,
      imgwidth: "35px"
    },
  ];
  return (
    <>
      <div id="container">
        <MainTitle text="Crypto Coin Tracker" />
        <div id="search-area">
          <SearchBox
            type="text"
            id="search-box"
            name="crypto"
            placeholder="Search Crypto"
          />
          <DropDown />
        </div>
        {/* main content*/}
        <section id="main-content">
          <div id="main-content-container">
            <ContentSection
              title={data[0].name}
              currentPrice={data[0].currentPrice}
              marketCap={data[0].marketCap}
              twentyFourHourVol={data[0].twentyFourHourVolume}
              twentyFourHourChange={data[0].twentyFourHourChage}
              alt={data[0].name}
              img={bitcoinImg}
              width={data[0].imgwidth}
            />
            <ContentSection
              title={data[1].name}
              currentPrice={data[1].currentPrice}
              marketCap={data[1].marketCap}
              twentyFourHourVol={data[1].twentyFourHourVolume}
              twentyFourHourChange={data[1].twentyFourHourChage}
              alt={data[1].name}
              img={etherumImg}
              width={data[1].imgwidth}
            />
            <ContentSection
              title={data[2].name}
              currentPrice={data[2].currentPrice}
              marketCap={data[2].marketCap}
              twentyFourHourVol={data[2].twentyFourHourVolume}
              twentyFourHourChange={data[2].twentyFourHourChage}
              alt={data[2].name}
              img={tetherImg}
              width={data[2].imgwidth}
            />
            <ContentSection
              title={data[3].name}
              currentPrice={data[3].currentPrice}
              marketCap={data[3].marketCap}
              twentyFourHourVol={data[3].twentyFourHourVolume}
              twentyFourHourChange={data[3].twentyFourHourChage}
              alt={data[3].name}
              img={bnbImg}
              width={data[3].imgwidth}
            />
            <ContentSection
              title={data[4].name}
              currentPrice={data[4].currentPrice}
              marketCap={data[4].marketCap}
              twentyFourHourVol={data[4].twentyFourHourVolume}
              twentyFourHourChange={data[4].twentyFourHourChage}
              alt={data[4].name}
              img={solanaImg}
              width={data[4].imgwidth}
            />
            <ContentSection
              title={data[5].name}
              currentPrice={data[5].currentPrice}
              marketCap={data[5].marketCap}
              twentyFourHourVol={data[5].twentyFourHourVolume}
              twentyFourHourChange={data[5].twentyFourHourChage}
              alt={data[5].name}
              img={usdcImg}
              width={data[5].imgwidth}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
