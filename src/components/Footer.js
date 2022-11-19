import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Footer1/>
                <Footer2/>
            </div>

        );
    }
}
class Footer1 extends Component {
    render() {
      return (
          <footer id="footer1">
            <div className="flexlist">
                <div className="service">이용약관</div>
                <div className="service" style={{fontweight: 'bold'}}>개인정보취급방침</div>
                <div className="service">회사소개</div>
                <div className="service">운영정책</div>
                <div className="service">이용방법</div>
                <div className="service">공지사항</div>
                <div className="service">이벤트</div>
                <div className="service">FAQ</div>
            </div>
            <div className="flexlist">
                <div>
                    <p>(주)와이오엘오 | 대표 황유미</p>
                    <p>사업자등록번호 610-86-34204 | 통신판매번호 2019-서울마포-1239 | 호스팅 (주)와이오엘오</p>
                    <p>070-8676-8799 (발신 전용) 사업자 정보 확인 &gt; </p>
                    <p>고객 문의: 우측 고객센터 / 이메일 / 카카오플러스 채널을 통해 문의 접수 부탁드립니다.</p>
                    <p>(정확한 상담 기록을 위해 유선상 문의는 접수받고 있지 않습니다)</p>
                    <p>주소 [04004] 서울특별시 마포구 월드컵로10길 5-6</p>
                </div>
                <div>
                    <p>고객센터</p>
                    <p>평일 오전 11시 ~ 오후 6시 (주말, 공휴일 제외)</p>
                    <p>E-mail : info@croket.co.kr</p>
                    <p>
                        <button>유로켓 고객센터 문의</button>
                        <button>FAQ</button>
                    </p>
                </div>
                <div>
                    <img className="footerimg" style={{margin: "0 20px 0 0"}} src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/footer/logo%20copy_45.png" alt="특허청" />
                    <img className="footerimg" src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/footer/nicepay_128.png" alt="나이스페이" />
                    <img className="footerimg" src="https://croket.s3.ap-northeast-2.amazonaws.com/img/tosspayments.png" alt="토스페이" />
                    <div className="footerimg" style={{margin: "0 15px 0 0"}}>특허출원번호 제 10-1865905호  상표등록번호 제 40-1643898호</div>
                    <img className="footerimg" src="https://croket.s3.ap-northeast-2.amazonaws.com/button/appstore.png" alt="앱스토어" />
                    <img className="footerimg" style={{margin: "0 20px 0 0"}} src="https://croket.s3.ap-northeast-2.amazonaws.com/button/googleplay.png" alt="플레이스토어" />
                    <img className="footerimg" src="https://croket.s3.ap-northeast-2.amazonaws.com/button/InstagramLogo.png" alt="인스타" />
                    <img className="footerimg" src="https://croket.s3.ap-northeast-2.amazonaws.com/button/FacebookLogo.png" alt="페북" />
                    <img className="footerimg" src="https://croket.s3.ap-northeast-2.amazonaws.com/button/Naverblog.png" alt="블로그" />
                </div>
            </div>
        </footer>
      );
    }
  }
  class Footer2 extends Component {
    render() {
      return (
          <footer id="footer2">
            <div style={{margin: "30px 0 0 100px"}}>
              <p>(주)와이오엘오의 사전 서면 동의 없이 크로켓 사이트의 일체의 정보, 콘텐츠 및 UI등을 상업적 목적으로 전재, 전송, 스크래핑 등 무단 사용할 수 없습니다.</p>
              <p>크로켓은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 크로켓은 상품·거래정보 및 거래에 대하여 책임을 지지 않습니다.</p>
              <p>구매안전서비스확인증</p>
              <p>Copyright© 2017-2022 YOLO Co, Ltd. All rights reserved.</p>
            </div>
          </footer>
      );
    }
  }




export default Footer;