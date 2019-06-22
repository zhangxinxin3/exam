import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
// import { Table, Form, Input, Select, Button } from 'antd';
import styles from './detail.scss';

// const { Option } = Select;

function Detail(props){

    let id = props.location.search.split('=')[1];

    let { getDetail } = props;

    useEffect(()=>{
        getDetail({
            id
        })
    },[])


    return <div className={styles.wrapper}>
    </div>
}


const mapStateToProps = state=>{
    return {
        ...state.class
    }
}

const mapDisaptchToProps = dispatch=>{
    return {
        getDetail(payload){
            dispatch({
                type:"class/getDetail",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Detail)
