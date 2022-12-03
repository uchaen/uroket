import React, { Component } from 'react';

class MainTOC extends Component {
    render() {
        return (
            <div className="MainTOC">
                <Banner></Banner>
                <Market></Market>
                <Best></Best>
                <Iframe></Iframe>
                <Seller></Seller>
                <Reviews></Reviews>
            </div>

        );
    }
}

class Banner extends Component {
    render() {
        return (
            <section>
                <img className="eventbanner" style={{ width: '550px' }} src="assets/img1.jpg" alt="이벤트배너" />
                <img className="eventbanner" style={{ width: '650px' }} src="assets/img2.jpg" alt="롤링배너" />
            </section>
        );
    }
}
class Market extends Component {
    render() {
        return (
            <section>
                <div className="title">전세계상품</div>
                <div>세계 각국의 셀러들이 직접 판매하는 상품들이에요~!</div>
                <div id="countrybox">
                    <div className="flexlist">
                        <div className="flexlist country">
                            <img src="https://www.croket.co.kr/asset/category/earth.png" alt="국기" 
                                style={{ width: '20px' }} />전체
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/u_s.png" alt="국기"
                                style={{ width: '20px' }} />미국
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/canada.png" alt="국기"
                                style={{ width: '20px' }} />캐나다
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/u_k.png" alt="국기"
                                style={{ width: '20px' }} />영국
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/australia.png" alt="국기"
                                style={{ width: '20px' }} />호주
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/t_w.png" alt="국기"
                                style={{ width: '20px' }} />대만
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/italy.png" alt="국기"
                                style={{ width: '20px' }} />이탈리아
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/france.png" alt="국기"
                                style={{ width: '20px' }} />프랑스
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/s_g.png" alt="국기"
                                style={{ width: '20px' }} />싱가포르
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/t_h.png" alt="국기"
                                style={{ width: '20px' }} />태국
                        </div>
                    </div>
                    <div className="flexlist">
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/n_z.png" alt="국기"
                                style={{ width: '20px' }} />뉴질랜드
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/v_n.png" alt="국기"
                                style={{ width: '20px' }} />베트남
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/s_p.png" alt="국기"
                                style={{ width: '20px' }} />스페인
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/h_k.png" alt="국기"
                                style={{ width: '20px' }} />홍콩
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/c_n.png" alt="국기"
                                style={{ width: '20px' }} />중국
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/germany.png" alt="국기"
                                style={{ width: '20px' }} />독일
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/m_y.png" alt="국기"
                                style={{ width: '20px' }} />말레이시아
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/j_p.png" alt="국기"
                                style={{ width: '20px' }} />일본
                        </div>
                        <div className="flexlist country">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/yeogoolocal/icon/nation/mini/netherlands.png" alt="국기"
                                style={{ width: '20px' }} />네덜란드
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
class Best extends Component {
    render() {
        return (
            <section>
                <div className="title">베스트</div>
            </section>
        );
    }
}
class Iframe extends Component {
    render() {
        return (
            <section>
                <div className="title">유로켓과 더 친해지는 방법~?</div>
                <div>유로켓 콘텐츠 구독하고 핫한 해외 상품들 빠르게 겟해보세요!</div>
                <div id="gridcontainer">
                    <img style={{ height: "40px" }} src="https://www.croket.co.kr/asset/sns-icon/black-logo-facebook.png"
                        alt="페이스북" />
                    <img style={{ height: "40px" }} src="https://www.croket.co.kr/asset/sns-icon/black-logo-youtube.png" alt="유튜브" />
                    <img style={{ height: "40px" }} src="https://www.croket.co.kr/asset/sns-icon/black-logo-naverblog.png"
                        alt="블로그" />
                    <iframe className="snsiframe" style={{ borderTopColor: 'blue' }}
                        src="https://www.facebook.com/croket.official/" title="Facebook" frameBorder="0"
                        allowFullScreen></iframe>
                    <iframe className="snsiframe" style={{ borderTopColor: 'red' }}
                        src="https://www.youtube.com/embed/fzSzAtR9FrQ" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <iframe className="snsiframe" style={{ borderTopColor: 'green' }}
                        src="https://m.blog.naver.com/letsyeogoo" title="Naver blog" frameBorder="0" allowFullScreen></iframe>
                </div>
            </section>
        );
    }
}

class Seller extends Component {
    render() {
        return (
            <section>
                <div className="title">셀러</div>
                <div>지금 잘나가는 셀러의 판매중인 상품이 궁금하다면?</div>
            </section>
        );
    }
}
class Reviews extends Component {
    render() {
        return (
            <section>
                <div className="title">구매자 상품 리뷰</div>
            </section>
        );
    }
}

export default MainTOC;