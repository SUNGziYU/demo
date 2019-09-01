import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    HeaderPic,
    HeaderNav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style';

class Header extends PureComponent {
    showItem() {
        const { focused, list, Mousein, Mouseout, moused, page, totalpage, Changepage } = this.props;
        const JSlist = list.toJS();
        const newList = [];
        if (JSlist.length > 0) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                newList.push(<SearchInfoItem key={JSlist[i]}>{JSlist[i]}</SearchInfoItem>)
            }
        }

        if (focused || moused) {
            return (
                <SearchInfo
                    onMouseEnter={Mousein}
                    onMouseLeave={Mouseout}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch
                            onClick={() => Changepage(page, totalpage, this.spinIcon)}
                        >
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe83c;</i>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle >
                    <SearchInfoList>{newList}
                    </SearchInfoList>
                </SearchInfo >
            )
        } else {
            return null
        }
    };
    render() {
        const { focused, ChangeFocus, ChangeBlur, list } = this.props;
        return (
            <HeaderWrapper>
                <Link to = '/'>
                    <HeaderPic />
                </Link>
                <HeaderNav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ''}
                                onFocus={() => ChangeFocus(list)}
                                onBlur={ChangeBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe63d;</i>
                        {this.showItem()}
                    </SearchWrapper>
                </HeaderNav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='write'>
                        <i className="iconfont">&#xe60b;</i>
                        写文章</Button>
                </Addition>
            </HeaderWrapper >
        )
    }
}


const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    moused: state.getIn(['header', 'moused']),
    page: state.getIn(['header', 'page']),
    totalpage: state.getIn(["header", 'totalpage']),
    list: state.getIn(['header', 'list'])
});
const mapDispatchToProps = (dispatch) => ({
    ChangeFocus(list) {
        if (list.size === 0) {
            dispatch(actionCreator.initList());
        }
        dispatch(actionCreator.changeFocus);
    },
    ChangeBlur() {
        dispatch(actionCreator.changeBlur);
    },
    Mousein() {
        dispatch(actionCreator.changeMousein);
    },
    Mouseout() {
        dispatch(actionCreator.changeMouseout);
    },
    Changepage(page, totalpage, spin) {
        let orange = spin.style.transform.replace(/[^0-9]/ig, '');
        if (orange) {
            orange = parseInt(orange, 10)
        } else {
            orange = 0
        }
        spin.style.transform = 'rotate(' + (orange + 360) + 'deg)'
        if (page < totalpage) {
            dispatch(actionCreator.changepage(page + 1))
        } else {
            dispatch(actionCreator.changepage(1))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);