import React, { Component } from 'react';
import '../css/marketTOC.css';

class MarketTOC extends Component {
    render() {
        return (
            <div className="MarketTOC">
                <MarketFilter />
                <div style={{display:"block"}}>
                    <MarketSort />
                    <MarketList />
                </div>
            </div>
        );
    }
}

class MarketFilter extends Component {
    render() {
        return (
            <div className="MarketFilter">                
                <div id="category-filter">
                    <div className='filter-title'>카테고리</div>
                    <div className="category-filter-content">전체</div>
                    <div className="category-filter-content">의류</div>
                    <div className="category-filter-content">가방</div>
                    <div className="category-filter-content">신발</div>
                    <div className="category-filter-content">메이크업</div>
                    <div className="category-filter-content">영양제</div>
                </div>

                <div>-------------</div>

                <div id="country-filter">
                    <div className='filter-title'>나라별</div>
                    <div className="country-filter-content">전체</div>
                    <div className="country-filter-content">미국</div>
                    <div className="country-filter-content">캐나다</div>
                    <div className="country-filter-content">일본</div>
                    <div className="country-filter-content">기타</div>
                </div>
            </div>
        );
    }
}
class MarketSort extends Component {
    render() {
        return (
            <div className="MarketSort">
                <div id="sort-left">
                    <div>최신순</div>
                    <div> ㅣ </div>
                    <div>인기순</div>
                    <div> ㅣ </div>
                    <div>리뷰 많은 순</div>
                    <div> ㅣ </div>
                    <div>찜 많은 순</div>
                    <div> ㅣ </div>
                    <div>구매 많은 순</div>
                </div>

                <div id="sort-right">
                    품절 제외
                </div>
            </div>

        );
    }
}
class MarketList extends Component {
    render() {
        return (
            <div className="MarketList">

            </div>
        );
    }
}

export default MarketTOC;