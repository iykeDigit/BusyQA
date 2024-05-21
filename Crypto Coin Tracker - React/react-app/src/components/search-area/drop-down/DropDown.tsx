import "./DropDown.css";

function DropDown() {
  return (
    <div>
      <select name="crypto-prop" id="drop-down">
        <option value="current-price">Price</option>
        <option value="market-cap">Market Cap</option>
        <option value="twenty-four-hour-value">24h Volume</option>
        <option value="twenty-four-hour-change">24h Change</option>
      </select>
    </div>
  );
}

export default DropDown;
