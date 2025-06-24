import { useEffect, useState, useRef } from "react";
import axios from "axios";
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

type StockDataItem = {
  date: string;
  price: number;
};

type Stock = {
  id: number;
  name: string;
  current_price: number;
  opening_price: number;
  closing_price: number;
  volume: number;
};

const StockChart = () => {
  const [stockList, setStockList] = useState<Stock[]>([]);
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [stockData, setStockData] = useState<StockDataItem[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [prevPrice, setPrevPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API;

  const getAuthHeaders = () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    return {
      Authorization: token ? `Bearer ${token}` : "",
    };
  };

  // 전체 주식 목록 불러오기
  useEffect(() => {
    const fetchStockList = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/stocks/`, {
          headers: getAuthHeaders(),
        });
        const stocks: Stock[] = response.data;
        setStockList(stocks);
        if (stocks.length > 0) {
          setSelectedStock(stocks[0]);
          setSearchInput(stocks[0].name);
        }
      } catch {
        setError("📛 주식 목록을 불러올 수 없어요.");
      }
    };

    fetchStockList();
  }, []);

  // 선택 주식 차트 데이터 불러오기
  useEffect(() => {
    if (!selectedStock) return;

    const fetchStockData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_BASE}/api/stocks/${selectedStock.name}`,
          {
            headers: getAuthHeaders(),
          }
        );
        const data: StockDataItem[] = response.data;
        setStockData(data);
        if (data.length >= 2) {
          setCurrentPrice(data[data.length - 1].price);
          setPrevPrice(data[data.length - 2].price);
        }
        setError(null);
      } catch {
        setError("주식 데이터를 불러올 수 없어요.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [selectedStock]);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 검색어로 주식 필터링
  const filteredStocks = stockList.filter((stock) =>
    stock.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // 주식 선택 핸들러
  const onSelectStock = (stock: Stock) => {
    setSelectedStock(stock);
    setSearchInput(stock.name);
    setIsDropdownOpen(false);
  };

  // 중복 실행 방지용 loading 체크 포함한 함수로 수정
  const handleSearchOrCreate = async () => {
    if (loading) return; // 요청 중이면 중복 실행 방지

    const trimmed = searchInput.trim();
    if (!trimmed) return;

    const found = stockList.find(
      (s) => s.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (found) {
      onSelectStock(found);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE}/api/stocks/`,
        {
          name: trimmed,
          volume: 1000,
          start_price: 10000,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      const newStock: Stock = response.data;
      setStockList((prev) => [...prev, newStock]);
      onSelectStock(newStock);
    } catch {
      setError("⚠️ 주식을 생성하지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  const change = currentPrice - prevPrice;
  const changeRate = prevPrice > 0 ? ((change / prevPrice) * 100).toFixed(1) : "0";
  const isUp = change >= 0;

  return (
    <S.Container>
      {/* 주식 정보 카드 */}
      {selectedStock && (
        <S.Card>
          <div>
            <S.StockName>(주) {selectedStock.name}</S.StockName>
            <S.CurrentPrice>{currentPrice.toLocaleString()}농</S.CurrentPrice>
          </div>
          <S.ChangeBox isUp={isUp}>
            {isUp ? "▲" : "▼"} {Math.abs(change).toLocaleString()}농 ({changeRate}%)
          </S.ChangeBox>
        </S.Card>
      )}

      {/* 검색 + 드롭다운 */}
      <S.SearchBox ref={dropdownRef}>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearchOrCreate();
              }
            }}
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
              filteredStocks.map((stock) => (
                <S.StockItem key={stock.id} onClick={() => onSelectStock(stock)}>
                  (주) {stock.name}
                </S.StockItem>
              ))
            )}
          </S.DropdownMenu>
        )}
      </S.SearchBox>

      <S.ChartBox>
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={stockData}>
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
        )}
      </S.ChartBox>

      {error && <S.ErrorMsg>{error}</S.ErrorMsg>}
    </S.Container>
  );
};

export default StockChart;