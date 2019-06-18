import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './addMark.scss';
import { Input, InputNumber, DatePicker, Select, Button } from 'antd';

const { Option } = Select;
function AddMark(props) {
    let address = props.location
    console.log(address)
    return (
        <div className={styles.wrap}>
            
        </div>
    )
}

AddMark.defaultProps = {
    user: ''
}

const mapStateToProps = state => {
    return {
        ...state.addMark
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMark)
