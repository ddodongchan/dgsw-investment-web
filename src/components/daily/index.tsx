import { useState, useEffect } from "react";
import * as S from "./daily.style";

export default function Daily() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 12) return "좋은 아침입니다!! ☕";
    if (hour >= 12 && hour < 18) return "좋은 오후입니다! 😊";
    if (hour >= 18 && hour < 22) return "좋은 저녁입니다! 🌆";
    if (hour >= 22 || hour < 6) return "편안한 밤 되세요! 🌙";
    return "늦은 시간 고생 많아요! 🌃";
  };

  return (
    <S.Container>
      <S.GreetingContainer>
        <S.Greeting>
            <S.UserName>세세뇽</S.UserName>님 {getGreeting()} 
        </S.Greeting>
        <S.Time>{formattedTime} 기준</S.Time>
        </S.GreetingContainer>
    </S.Container>
  );
}