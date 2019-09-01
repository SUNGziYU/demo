import React, { PureComponent } from 'react';
import { Writeritem, Writerinfo } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
        const { writer } = this.props;
        return (
            <div>
                <p>推荐作者</p>
                {
                    writer.map((item) => {
                        return (
                            <Writeritem
                            key = {item.get('id')}
                            >
                                <img
                                    className='pic'
                                    src={item.get('listurl')} alt='' />
                                <Writerinfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('text')}</p>
                                </Writerinfo>
                            </Writeritem>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    writer: state.getIn(['Home', 'writer'])
})

export default connect(mapStateToProps, null)(Writer);