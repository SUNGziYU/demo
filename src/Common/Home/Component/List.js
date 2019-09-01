import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    Listitem,
    Listinfo,
} from '../style';

class List extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {list.map((item) => {
                    return (
                        <Link key={item.get('id')} to='/detail'>
                            <Listitem>
                                <img
                                    className='pic'
                                    src={item.get('listurl')} alt='' />
                                <Listinfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('text')}</p>
                                </Listinfo>
                            </Listitem>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['Home', 'listlist'])
})

export default connect(mapStateToProps, null)(List);