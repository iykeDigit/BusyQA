import "./ContentSection.css";

interface Props {
  title: string;
  currentPrice: number;
  marketCap: number;
  twentyFourHourVol: number;
  twentyFourHourChange: number;
  alt: string;
  img: string;
  width:string
}

function ContentSection({
  title,
  currentPrice,
  marketCap,
  twentyFourHourVol,
  twentyFourHourChange,
  alt,
  img,
  width
}: Props) {
  return (
    <div className="content-section">
      <div className="logo">
        <img style={{ width: width }} src={img} alt={alt} />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="properties">
        <p>Current Price: ${currentPrice}</p>
        <p>Market Cap: ${marketCap}</p>
        <p>24h Volume: ${twentyFourHourVol}</p>
        <p>24h Change: {twentyFourHourChange}%</p>
      </div>
    </div>
  );
}

export default ContentSection;
