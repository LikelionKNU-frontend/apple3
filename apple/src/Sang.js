
const Sang = () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',  // 3개의 컬럼으로 고정
      gap: '20px',
      padding: '40px',
      backgroundColor: '#f5f5f7',
      justifyContent: 'center',
    };
  
    const cardStyle = {
      position: 'relative',
      borderRadius: '20px',
      height: '400px',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    };
  
    const imageStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
    };
  
    const textStyle = {
      position: 'absolute',
      top: '25%',
      left: '35%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'left',
      lineHeight: '1.5',
      padding: '0px',
    };
  
    const headingStyle = {
      display: 'flex',
      gridColumn: 'span 3', // 상단에 텍스트가 3개 카드 전체에 걸치게 설정
      textAlign: 'left',
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
    };
  
    return (
      <div style={containerStyle}>
        <div style={headingStyle}>
          <div>Apple 경험.</div>
          <div style={{color: 'gray'}}>Apple 제품 및 서비스로 더욱더 많은걸 누리다.</div>
        </div>
  
  
        {/* Snoopy Card */}
        <div style={cardStyle}>
          <img src="img/image 19.png" alt="스누피" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '12px', marginBottom: '10px', color: "gray" }}>APPLE TV+</p>
            <h3>
              스누피와 친구들, <br />
              오직 <b>Apple TV+</b>에서 만나보세요
            </h3>
          </div>
        </div>
  
        {/* Apple Intelligence */}
        <div style={cardStyle}>
          <img src="img/image 20.png" alt="애플 인텔리전스" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '16px' }}>Apple Intelligence.</p>
            <h3>
              글을 쓰고, 개성을 표출하고, <br />
              이것저것 척척.
            </h3>
          </div>
        </div>
  
        {/* Severance */}
        <div style={cardStyle}>
          <img src="img/image 21.png" alt="풍선든남자" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '12px', color: "gray" }}>APPLE TV+</p>
            <h3>
              Apple 기기를 구입하면 <br />
              Apple TV+ 3개월 무료.*
            </h3>
          </div>
        </div>
        <div style={headingStyle}>
          <div>특별할인.</div>
          <div style={{color: 'gray'}}>비즈니스, 학교 등을 위한 혜택.</div>
        </div>
  
        {/* 맥,아이패드 */}
        <div style={cardStyle}>
          <img src="img/image 23.png" alt="맥,아이패드" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '12px', marginBottom: '10px', color: "gray" }}>교육</p>
            <h3>
              새로운 Mac 또는 iPad를<br />
              교육 할인가로 더욱 부담 없이.
            </h3>
          </div>
        </div>
  
        {/* 리퍼비쉬 */}
        <div style={cardStyle}>
          <img src="img/image 24.png" alt="리퍼비쉬" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '12px', marginBottom: '10px', color: "gray"  }}>인증 리퍼비쉬 제품</p>
            <h3>
              1년 보증이 제공되는 리퍼비쉬 <br />
              Apple 제품을 쇼핑하세요.
            </h3>
          </div>
        </div>
  
        {/* 휴대폰 문자 */}
        <div style={cardStyle}>
          <img src="img/image 25.png" alt="휴대폰문자 사진" style={imageStyle} />
          <div style={textStyle}>
            <p style={{ fontSize: '12px', color: "gray" }}>비즈니스</p>
            <h3 style={{color: "white"}}>
              대기업 부터 중소기업까지  <br />
              Apple이 함께 합니다.
            </h3>
          </div>
        </div>
        <div style={{ gridColumn: 'span 3', marginTop: '40px' }}>
          <h3>빠른링크</h3>
        </div>
  
        <div style={{gridColumn: 'span 3', display: 'flex', gap: '10px', marginBottom: '40px'}}>
        <button style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '999px', fontSize: '12px', cursor: 'pointer'}}>매장 찾기</button>
        <button style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '999px', fontSize: '12px', cursor: 'pointer'}}>주문 상태</button>
        <button style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '999px', fontSize: '12px', cursor: 'pointer'}}>쇼핑 도움말</button>
        <button style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '999px', fontSize: '12px', cursor: 'pointer'}}>반품</button>
        <button style={{border: '1px solid black', backgroundColor: 'white', borderRadius: '999px', fontSize: '12px', cursor: 'pointer'}}>관심목록</button>
        </div>
  
        <div style={{ gridColumn: 'span 3', textAlign: 'left', marginTop: '40px', marginLeft: '30px' }}>
          <div style={{ fontSize: '10px', color: 'gray' }}>
          ∆ Apple Intelligence는 Siri 및 기기 언어를 한국어, 중국어(간체), 영어(오스트레일리아, 캐나다, 인도, 아일랜드, 뉴질랜드, 싱가포르, 남아프리카 공화국, 영국, 미국), 프랑스어, 독일어, 이탈리아어, 일본어, 포르투갈어<br/>(브라질), 스페인어로 설정한 iPhone 16 전체 모델, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini(A17 Pro 모델) 그리고 M1 이후 iPad 및 Mac 모델에서 베타로 사용할 수 있으며, iOS 18, iPadOS 18, macOS<br/> Sequoia 소프트웨어 업데이트를 통해 제공됩니다. 올해 안으로 계속해서 베트남어를 비롯한 지원 언어를 추가해 나갈 예정입니다. 일부 기능을 이용할 수 없는 국가나 언어도 있습니다.
          <br/><br/>
          ⁺ 신규 구독자에게만 적용됩니다. 무료 혜택 기간 종료 이후에는 월 8,900원의 요금이 청구됩니다. 본 프로모션은 한정된 기간 동안 진행되며, 적용 대상 새 기기를 구입한 Apple Music 신규 구독자에게만 적용됩니다. 적용 대상 오디오 기기에 대해 혜택을 이용하려면 iOS 또는 iPadOS 최신 버전을 설치한 Apple 기기와 연결하거나 페어링해야 합니다. Apple Watch에 대해 혜택을 이용하려면 iOS 최신 버전을 설치한 iPhone에 연결하거나 페어링해야 합니다. 무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에 신청할 수 있습니다. 구입한 적용 대상 기기 수에 상관없이, 무료 체험 혜택은 Apple 계정당 한 번만 제공됩니다. 구독은 취소할 때까지 자동으로 갱신됩니다. 특정 제한 사항 및 기타 약관이 적용됩니다.
          <br/><br/>
          * Apple TV+ 무료 체험 혜택은 신규 가입자 및 조건에 부합하는 재가입자에게만 적용됩니다. 무료 체험 기간이 끝나면 월 6,500에 이용할 수 있습니다. 본인 또는 가족 구성원이 구입한 기기 수에 상관없이, 무료 체험 혜택은 Apple 계정당 한 번 또는 본인이 ‘가족 공유’ 그룹의 구성원일 경우 그룹당 한 번만 제공됩니다. 본인 또는 가족 구성원이 이미 Apple TV+ 3개월 또는 1년 무료 체험 혜택을 이용한 경우에는 이 혜택을 이용할 수 없습니다. 무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에 신청할 수 있습니다. 구독은 취소할 때까지 자동으로 갱신됩니다. 제한 사항 및 기타 약관이 적용됩니다.
          <br/><br/>
          1. 보상 판매 서비스는 Apple의 보상 판매 파트너사를 통해 제공됩니다. 보상 판매 견적액은 예상 금액일 뿐이며, 실제 보상 판매 금액이 예상 금액보다 낮을 수도 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 모델, 그리고 보상 판매 대상이 되는 제품이 최초 판매된 국가/지역에 따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift Card로 보상 판매를 받으려면 성인 연령 이상이어야 합니다. 새 Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 매장에서 보상 판매를 받으려면 사진이 부착된 정부 발행의 유효한 신분증이 필요합니다. 일부 매장에서는 본 프로그램을 이용할 수 없습니다. 온라인과 오프라인 매장의 보상 판매 금액은 차이가 있을 수 있습니다. 일부 매장에서는 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 취소하거나 보상 판매 기기 및 그 수량을 제한할 권리를 보유합니다. 더 자세한 내용은 적용 대상 기기에 대한 보상 판매 및 재활용 서비스를 제공하는 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. Apple 보상 판매 파트너사의 약관이 추가로 적용될 수 있습니다.
          <br/><br/>
          2. 이용 약관 위 할부 서비스는 Apple Online Store, Apple 전화 판매 및 Apple 리테일 매장에서 구입하는 경우에만 이용할 수 있습니다.할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다. 모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는 경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오. 할부 조건, 수수료, 청구액 등은 신용 카드 발급사에 문의하십시오. 청구액은 카드 명세서에 표시됩니다. 할부 서비스를 이용하려면 한국 거주자여야 합니다.할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는 현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다. 해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는 할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다.이 정보는 2021년 03월 16일 기준 최신 정보입니다.
          <br/><br/>
          3. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은 매장 내 Apple 스페셜리스트에게 문의하거나 080-330-8877에 전화로 문의하시기 바랍니다.
          <br/><br/>
          보다 오래 안심할 수 있도록. 이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.
          <br/><br/>
          <hr/>
          </div>
        </div>
  
        <div style={{marginLeft: '30px', color: 'gray', display: 'flex', fontSize: '12px', gridColumn: 'span 3'}}>
          <img style={{ width: '20px', marginRight: '10px'}} src="img/image 42.png" alt="애플로고" />
          <div> {">"} Apple Store 온라인</div>
        </div>
  
        <ul style={{alignItems: 'stretch', justifyContent: 'center', gridColumn: 'span 3', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', fontSize: '14px', padding: 0, listStyleType: 'none', marginLeft:'30px' }}>
                {/* 1열 */}
        <li style={{ fontWeight: 'bold', gridColumn: '1', gridRow: '1' }}>쇼핑 및 알아보기</li>
        <li style={{ gridColumn: '1', gridRow: '2' }}>Store</li>
        <li style={{ gridColumn: '1', gridRow: '3' }}>Mac</li>
        <li style={{ gridColumn: '1', gridRow: '4' }}>iPad</li>
        <li style={{ gridColumn: '1', gridRow: '5' }}>iPhone</li>
        <li style={{ gridColumn: '1', gridRow: '6' }}>Watch</li>
        <li style={{ gridColumn: '1', gridRow: '7' }}>Vision</li>
        <li style={{ gridColumn: '1', gridRow: '8' }}>AirPods</li>
        <li style={{ gridColumn: '1', gridRow: '9' }}>TV 및 홈</li>
        <li style={{ gridColumn: '1', gridRow: '10' }}>AirTag</li>
        <li style={{ gridColumn: '1', gridRow: '11' }}>액세서리</li>
        <li style={{ fontWeight: 'bold', gridColumn:'1', gridRow: '12' }}>Apple 지갑</li>
        <li style={{ gridColumn: '1', gridRow: '13' }}>지갑</li>
        
        {/* 2열 */}
        <li style={{ fontWeight: 'bold', gridColumn: '2', gridRow: '1' }}>계정</li>
        <li style={{ gridColumn: '2', gridRow: '2' }}>Apple 계정 관리</li>
        <li style={{ gridColumn: '2', gridRow: '3' }}>Apple Store 계정</li>
        <li style={{ gridColumn: '2', gridRow: '4' }}>iCloud.com</li>
        <li style={{ fontWeight: 'bold', gridColumn: '2', gridRow: '5' }}>엔터테인먼트</li>
        <li style={{ gridColumn: '2', gridRow: '6' }}>Apple One</li>
        <li style={{ gridColumn: '2', gridRow: '7' }}>Apple TV+</li>
        <li style={{ gridColumn: '2', gridRow: '8' }}>Apple Music</li>
        <li style={{ gridColumn: '2', gridRow: '9' }}>Apple Arcade</li>
        <li style={{ gridColumn: '2', gridRow: '10' }}>Apple Podcasts</li>
        <li style={{ gridColumn: '2', gridRow: '11' }}>Apple Books</li>
        <li style={{ gridColumn: '2', gridRow: '12' }}>App Store</li>
        
        {/* 3열 */}
        <li style={{ fontWeight: 'bold', gridColumn: '3', gridRow: '1' }}>Apple Store</li>
        <li style={{ gridColumn: '3', gridRow: '2' }}>매장 찾기</li>
        <li style={{ gridColumn: '3', gridRow: '3' }}>Genius Bar</li>
        <li style={{ gridColumn: '3', gridRow: '4' }}>Today at Apple</li>
        <li style={{ gridColumn: '3', gridRow: '5' }}>Apple 캠프</li>
        <li style={{ gridColumn: '3', gridRow: '6' }}>Apple Store 앱</li>
        <li style={{ gridColumn: '3', gridRow: '7' }}>인증 리퍼비쉬 제품</li>
        <li style={{ gridColumn: '3', gridRow: '8' }}>Apple Trade In</li>
        <li style={{ gridColumn: '3', gridRow: '9' }}>할부 방식</li>
        <li style={{ gridColumn: '3', gridRow: '10' }}>주문 찾기 - Apple</li>
        <li style={{ gridColumn: '3', gridRow: '11' }}>쇼핑 도움말</li>
        
        {/* 4열 */}
        <li style={{ fontWeight: 'bold', gridColumn: '4', gridRow: '1' }}>비즈니스</li>
        <li style={{ gridColumn: '4', gridRow: '2' }}>Apple과 비즈니스</li>
        <li style={{ gridColumn: '4', gridRow: '3' }}>비즈니스를 위한 제품 쇼핑하기</li>
        <li style={{ fontWeight: 'bold', gridColumn: '4', gridRow: '4' }}>교육</li>
        <li style={{ gridColumn: '4', gridRow: '5' }}>Apple 그리고 교육</li>
        <li style={{ gridColumn: '4', gridRow: '6' }}>초중고용 제품 쇼핑하기</li>
        <li style={{ gridColumn: '4', gridRow: '7' }}>대학 생활을 위한 제품 쇼핑하기</li>
        
        {/* 5열 */}
        <li style={{ fontWeight: 'bold', gridColumn: '5', gridRow: '1' }}>Apple의 가치관</li>
        <li style={{ gridColumn: '5', gridRow: '2' }}>손쉬운 사용</li>
        <li style={{ gridColumn: '5', gridRow: '3' }}>환경</li>
        <li style={{ gridColumn: '5', gridRow: '4' }}>개인정보 보호</li>
        <li style={{ gridColumn: '5', gridRow: '5' }}>공급망</li>
        <li style={{ fontWeight: 'bold', gridColumn: '5', gridRow: '6' }}>Apple 정보</li>
        <li style={{ gridColumn: '5', gridRow: '7' }}>Newsroom</li>
        <li style={{ gridColumn: '5', gridRow: '8' }}>Apple 리더십</li>
        <li style={{ gridColumn: '5', gridRow: '9' }}>채용 안내</li>
        <li style={{ gridColumn: '5', gridRow: '10' }}>윤리 및 규정 준수</li>
        <li style={{ gridColumn: '5', gridRow: '11' }}>이벤트</li>
        <li style={{ gridColumn: '5', gridRow: '12' }}>일자리 창출</li>
        <li style={{ gridColumn: '5', gridRow: '13' }}>Apple 연락처</li>
      </ul>
  
        
  
  
    
  
  
  
  
      <div style={{ marginLeft: '30px', gridColumn: 'span 3', marginTop: '50px', fontSize: '14px', color: 'gray' }}>
        <div>다양한 쇼핑 방법: Apple Store를 방문하거나, 리셀러를 찾아보거나, 080-330-8877번으로 전화하세요.</div>
        <hr/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>Copyright 2025 Apple lnc. 모든 권리 보유.</div>
          <div style={{ marginLeft: '30px', fontSize: '12px', color: 'black' }}>
            개인정보 처리방침 | 약관 | 판매 및 환불 | 법적 고지 | 사이트 맵
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Sang;
  