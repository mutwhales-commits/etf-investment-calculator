# ETF STUDIO

**KS Bridge Investment** — 미국 ETF 투자 시뮬레이터

미국 ETF 장기투자 복리 시뮬레이션과 월분배금 현금흐름을 한 화면에서 계산하는 웹서비스입니다.

## 주요 기능

- **실시간 시세 연동** — Yahoo Finance API를 통한 ETF 가격, NASDAQ-100, S&P 500 지수 자동 조회
- **환율 자동 조회** — Open Exchange Rates를 통한 USD/KRW 실시간 환율
- **장기투자 시뮬레이터** — QLD, SPY 복리 성장 시뮬레이션 (거치식/월적립/일적립)
- **월분배금 계산기** — QQQI, JEPQ 배당 현금흐름 계산
- **세금 시뮬레이션** — 양도소득세 (250만원 공제 후 22%), 배당소득세 (미국 원천징수 + 한국 차액 정산)
- **USD/KRW 동시 표시** — 모든 금액에 달러와 원화 동시 표시
- **인플레이션 보정** — 연 3% 물가상승률 기준 실질 가치 계산

## 기술 스택

- **Frontend**: HTML, CSS, JavaScript, Chart.js
- **Backend**: Cloudflare Pages Functions (API 프록시)
- **데이터**: Yahoo Finance, Open Exchange Rates
- **폰트**: Pretendard, Nunito

## 배포

Cloudflare Pages로 자동 배포됩니다.

```
https://etf-investment-calculator.pages.dev
```

## 파일 구조

```
index.html              메인 페이지
functions/
  api/
    market.js           Yahoo Finance 프록시 (ETF 시세, 지수, CAGR, 배당)
    fx.js               환율 프록시 (Open Exchange Rates)
```

## 라이선스

MIT

---

ETF STUDIO · KS Bridge Investment © 2026
