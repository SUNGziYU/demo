import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Topicwrapper,
    Topicitem,
} from '../style';


class Topic extends PureComponent {
    render() {
        const { topiclist } = this.props;
        return (
            <Topicwrapper>
                {topiclist.map((item) => {
                    return (
                        <Topicitem key={item.get('id')}>
                            <img
                                className='topicpic'
                                src={item.get('topicurl')} alt='' />
                            {item.get('text')}
                        </Topicitem>
                    )
                })}
            </Topicwrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topiclist: state.getIn(['Home','topiclist'])
})

export default connect(mapStateToProps, null)(Topic);
