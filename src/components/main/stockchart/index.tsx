import { useEffect, useState, useRef } from "react";
import * as S from "./stockchart.style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { dummyStocks } from "@/dummy/dummyStocks";

const StockChart = () => {
  const [selectedStock, setSelectedStock] = useState(dummyStocks[0]);
  const [searchInput, setSearchInput] = useState(dummyStocks[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onSelectStock = (stock) => {
    setSelectedStock(stock);
    setSearchInput(stock.name);
    setIsDropdownOpen(false);
  };

  const filteredStocks = dummyStocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const change = selectedStock.currentPrice - selectedStock.previousPrice;
  const changeRate = selectedStock.previousPrice > 0 ? ((change / selectedStock.previousPrice) * 100).toFixed(1) : "0";
  const isUp = change >= 0;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const chartData = selectedStock.priceHistory.map((price, index) => ({
    // date: `Day ${index + 1}`,
    price,
  }));

  return (
    <S.Container>
      <S.Card>
        <div>
          <S.StockName>(주) {selectedStock.name}</S.StockName>
          <S.CurrentPrice>{selectedStock.currentPrice.toLocaleString()}뇽</S.CurrentPrice>
        </div>
        <S.ChangeBox isUp={isUp}>
          {isUp ? "▲" : "▼"} {Math.abs(change).toLocaleString()}뇽 ({changeRate}%)
        </S.ChangeBox>
      </S.Card>

      <S.SearchBox ref={dropdownRef}>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="주식명을 입력하세요"
            style={{ flex: 1 }}
            onFocus={() => setIsDropdownOpen(true)}
          />
          <S.DropdownToggleBtn
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-label="Toggle stock list dropdown"
            type="button"
          >
            ▼
          </S.DropdownToggleBtn>
        </div>

        {isDropdownOpen && (
          <S.DropdownMenu>
            {filteredStocks.length === 0 ? (
              <S.NoResult>검색 결과가 없습니다.</S.NoResult>
            ) : (
              filteredStocks.map((stock, idx) => (
                <S.StockItem key={idx} onClick={() => onSelectStock(stock)}>
                  (주) {stock.name}
                </S.StockItem>
              ))
            )}
          </S.DropdownMenu>
        )}
      </S.SearchBox>

      <S.ChartBox>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={["dataMin - 500", "dataMax + 500"]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </S.ChartBox>
    </S.Container>
  );
};

export default StockChart;