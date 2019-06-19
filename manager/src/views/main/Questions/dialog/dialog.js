import React ,{useEffect} from "react";
import { connect } from 'dva';
import styles from './dialog.scss';

function Dialog(props) {
    let { condition ,allArr } = props;
    let id = props.location.search.split('=')[1];
    useEffect(()=>{
        condition({
            questions_id:id
        });
    },[])
    console.log(allArr)

    return <div className={styles.wrapper}>
        <h3 className={styles.title}>试题详情</h3>
        {
            allArr && allArr.map((item,index)=>{
                return <div className={styles.wrap} key={index}>
                    <div className={styles.wrapLeft}>
                        <p>出题人:{item.user_name}</p>
                        <h5>题目信息</h5>
                        <div className={styles.infor}>
                            <span>{item.questions_type_text}</span>
                            <span>{item.subject_text}</span>
                            <span>{item.exam_name}</span>
                        </div>
                        <h5>{item.title}</h5>

                        <p>{item.questions_stem}</p> 
                    </div>
                    <div className={styles.wrapRight}>
                        <p>{item.questions_answer}</p> 
                    </div>
                </div>
            })
        }
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