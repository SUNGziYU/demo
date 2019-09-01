import React, { PureComponent } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import Topic from './Component/Topic';
import List from './Component/List';
import Recommend from './Component/Recommend';
import Writer from './Component/Writer';
import {
    Homepage,
    Homeleft,
    Homeright,
    Backtop,
} from './style';

class Home extends PureComponent {
    render() {
        return (
            <Homepage>
                <Homeleft>
                    <img className='HomeLeftPic' src="//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/933/format/webp" alt='' />
                    <Topic />
                    <List />
                </Homeleft>
                <Homeright>
                    <Recommend />
                    <Writer />
                </Homeright>
                {
                    this.props.show ? <Backtop onClick={this.backtop}>回到顶部</Backtop> : null
                }
            </Homepage>
        )
    }

    backtop() {
        window.scrollTo(0, 0);
    }

    changeshow(){
      window.addEventListener('scroll',this.props.changelistshow)
    }
    
    componentDidMount() {
        this.props.getlist();
        this.changeshow();
    }
}

const mapState = (state) => ({
    show: state.getIn(['Home','show'])
})
const mapDispatch = (dispatch) => ({
    getlist() {
        dispatch(actionCreator.getlist());
    },
    changelistshow(){
        if(document.documentElement.scrollTop > 200){
            dispatch(actionCreator.changeshow(true))
        }else{
            dispatch(actionCreator.changeshow(false))
        }
    }
})


export default connect(mapState, mapDispatch)(Home);