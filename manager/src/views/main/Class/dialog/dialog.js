import React ,{useState,useEffect} from "react";
import { connect } from 'dva';
import styles from './dialog.scss';
import { Typography} from 'antd';

const { Title } = Typography;

function Dialog(props) {
    let {condition} = props;
    console.log(props)
    useEffect(()=>{
        // condition();
    },[])

    return <div>
    </div>
}

const mapStateToProps = state=>{
    return {
      ...state.view
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
      condition(params){
          dispatch({
              type:'view/condition',
              payload:params
          })
      }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(Dialog);