import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Table } from 'antd';
import styles from './markList.scss';


function MarkList(props){

    let id = props.location.search.split('=')[1];

    return <div className={styles.wrapper}>
        <div className={styles.wrapTop}>

        </div>
        <div className={styles.wrap}>
            
        </div>
    </div>
}


const mapStateToProps = state=>{
    return {
    }
}

const mapDisaptchToProps = dispatch=>{
    return {
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(MarkList)
