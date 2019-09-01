import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem,
} from '../style'

class Recommend extends PureComponent {
    render() {
        const { recommendlist } = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendlist.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('topicurl')} />
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    recommendlist: state.getIn(['Home', 'recommendlist'])
})

export default connect(mapStateToProps, null)(Recommend);