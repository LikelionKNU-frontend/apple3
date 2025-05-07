import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* 도움의 순간 */}
      <section className="section">
        <h2>도움의 순간</h2>
        <p>언제든, 당신에게 맞는 방식으로.</p>
        <div className="card-container">
          <Card
            img="img1.jpg"
            title="스페셜리스트와 함께하는 일대일 온라인 쇼핑."
          />
          <Card
            img="img2.jpg"
            title="Apple Store의 무료 세션에 참여해 보세요."
          />
          <Card img="img3.jpg" title="새 기기 설정은 스페셜리스트와 함께." />
        </div>
      </section>

      {/* Apple Store 쇼핑의 이유 */}
      <section className="section">
        <h2>남다른 Apple Store.</h2>
        <p>이곳에서 쇼핑해야 하는 더더욱 많은 이유.</p>
        <div className="feature-container">
          <Feature icon="icon1.png" text="기분 좋은 결제 옵션." />
          <Feature
            icon="icon2.png"
            text="쓰던 기기를 보상 판매하고 새 기기로 더 저렴하게.*"
          />
          <Feature
            icon="icon3.png"
            text="간편한 무료 배송, 매장 보유 제품은 Apple Store에서 직접 픽업 가능."
          />
          <Feature
            icon="icon4.png"
            text="맞춤형 상품을 Apple Store 앱에서 경험하세요."
          />
        </div>
      </section>

      {/* 액세서리 */}
      <section className="section">
        <h2>액세서리</h2>
        <p>즐겨 사용하는 기기들과 완벽하게 페어링되는 여러 가지 필수품.</p>
        <div className="card-container">
          <Card
            img="acc1.jpg"
            title="MagSafe형 iPhone 16 Pro Max 실리콘 케이스 - 핑크"
            price="₩69,000"
          />
          <Card
            img="acc2.jpg"
            title="Tech21 FlexQuartz (iPhone 16 Pro) (MagSafe 지원) - 스마일 베어"
            price="₩79,000"
          />
          <Card
            img="acc3.jpg"
            title="PopSockets MagSafe Grip (iPhone) - 스마트 베어 핑크 팝그립"
            price="₩49,000"
          />
        </div>
      </section>

      {/* 오디오 */}
      <section className="section">
        <h2>생생하게 들리는 차이</h2>
        <p>풍부한 고품질 사운드를 원한다면 편리한 선택.</p>
        <div className="card-container">
          <Card
            img="audio1.jpg"
            title="AirPods 4 (예고된 노이즈 캔슬링 탑재)"
            price="₩249,000"
          />
          <Card img="audio2.jpg" title="AirPods Pro 2" price="₩359,000" />
          <Card
            img="audio3.jpg"
            title="Powerbeats Pro - 오렌지"
            price="₩289,000"
          />
        </div>
      </section>

      {/* Apple 경험 */}
      <section className="section">
        <h2>Apple 경험</h2>
        <p>Apple 제품 및 서비스를 더없이 많은 길 누리다.</p>
        <div className="card-container">
          <Card
            img="exp1.jpg"
            title="스누피와 친구들, 오직 Apple TV+에서 만나보세요"
          />
          <Card
            img="exp2.jpg"
            title="Apple Intelligence. 글을 쓰고, 개성을 표현하고, 이것저것 척척."
          />
          <Card
            img="exp3.jpg"
            title="Apple 기기를 구입하면 Apple TV+ 3개월 무료.*"
          />
        </div>
      </section>
    </div>
  );
}

function Card({ img, title, price }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p className="card-title">{title}</p>
      {price && <p className="card-price">{price}</p>}
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="feature">
      <img src={icon} alt="feature icon" />
      <p>{text}</p>
    </div>
  );
}

export default App;
