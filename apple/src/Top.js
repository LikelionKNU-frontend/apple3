import "./Top.css";

export default function Top() {
  return (
    <div id="top">
      <header>
        <img
          src="apple/apple.png"
          className="img"
          width="15px"
          height="15px"
          alt="apple"
        />
        <div className="block">
          <ul>
            <li className="block">스토어</li>
            <li className="block">Mac</li>
            <li className="block">iPad</li>
            <li className="block">iPhone</li>
            <li className="block">Watch</li>
            <li className="block">Vision</li>
            <li className="block">AirPods</li>
            <li className="block">TV 및 홈</li>
            <li className="block">엔터테인먼트</li>
            <li className="block">엑세서리</li>
            <li className="block">고객지원</li>
          </ul>
        </div>
        <img
          src="apple/search.png"
          className="img"
          width="15px"
          height="15px"
          alt="search"
        />
        <img
          src="apple/bag.png"
          className="img"
          width="15px"
          height="15px"
          alt="bag"
        />
      </header>
      <section>
        <h1>
          <div>
            스토어.<span id="store">좋아하는 Apple 제품을</span>
          </div>
          <span id="store">구입하는 가장 좋은 방법.</span>
        </h1>
        <div id="images_">
          <div className="images">
            <img
              src="apple/image 51.png"
              width="110px"
              height="60px"
              alt="bag"
            />
            <p>Mac</p>
          </div>
          <div className="images">
            <img
              src="apple/image 52.png"
              width="95px"
              height="60px"
              alt="bag"
            />
            <p>iphone</p>
          </div>
          <div className="images">
            <img
              src="apple/image 53.png"
              width="95px"
              height="60px"
              alt="bag"
            />
            <p>ipad</p>
          </div>
          <div className="images">
            <img
              src="apple/image 54.png"
              width="110px"
              height="65px"
              alt="bag"
            />
            <p>Apple Watch</p>
          </div>
          <div className="images">
            <img
              src="apple/image 55.png"
              width="90px"
              height="55px"
              alt="bag"
            />
            <p>Apple Vision Pro</p>
          </div>
          <div className="images">
            <img
              src="apple/image 56.png"
              width="90px"
              height="55px"
              alt="bag"
            />
            <p>Airpods</p>
          </div>
          <div className="images">
            <img
              src="apple/image 57.png"
              width="60px"
              height="40px"
              alt="bag"
            />
            <p>Airtag</p>
          </div>
          <div className="images">
            <img
              src="apple/image 58.png"
              width="70px"
              height="70px"
              alt="bag"
            />
            <p>Apple TV 4K</p>
          </div>
          <div className="images">
            <img
              src="apple/image 59.png"
              width="65px"
              height="75px"
              alt="bag"
            />
            <p>엑세서리</p>
          </div>
        </div>
        <div id="recent">
          <h3>
            최신제품.<span id="store">따끈따끈한 신제품 이야기.</span>
          </h3>
          <div className="cluster">
            <img
              src="apple/image 1.png"
              width="350px"
              height="430px"
              alt="pro"
              className="border"
            />
            <div className="text">
              <h2 className="pro">iphone 16 pro</h2>
              <h3>
                <span className="gra">Apple intelligence</span>
                <br></br>
                <span className="pro">￦1,550,000부터</span>
              </h3>
            </div>
          </div>
          <div className="cluster">
            <img
              src="apple/image 2.png"
              width="350px"
              height="430px"
              alt="Air"
              className="border"
            />
            <div className="text">
              <h2>MacBook Air</h2>
              <h3>
                <span className="gra">Apple intelligence</span>
                <br></br>
                <span>￦1,550,000부터</span>
              </h3>
            </div>
          </div>
          <div className="cluster">
            <img
              src="apple/image 4.png"
              width="350px"
              height="430px"
              alt="Watch"
              className="border"
            />
            <div className="text">
              <h2>Apple Watch</h2>
              <h3>
                <span>얇아진 두께, 더 커진 크기</span>
                <br></br>
                <span>￦949,000부터</span>
              </h3>
            </div>
          </div>
          <img
            src="apple/image 1.png"
            width="350px"
            height="430px"
            alt="pro"
            className="border"
          />
        </div>
      </section>
    </div>
  );
}
