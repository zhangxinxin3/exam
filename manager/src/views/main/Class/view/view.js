import React ,{useEffect} from "react";
import { connect } from 'dva';
import styles from './view.scss';
import { Typography ,Cascader } from 'antd';
import { examType } from "../../../../services/view";

const { Title } = Typography;

function View(props) {
    let {look,examType,questionType,data,examArr} = props;


    useEffect(()=>{
        look()
        examType()
        // questionType()
    },[props.data,props.examArr])

    let onChange =e =>{
        console.log(e)
    }

    return <div className={styles.wrapper}>
        <Title level={4}>查看试题</Title>
        <div className={styles.wrapTop}>
            <div className={styles.topType}>
                <p>课程类型:</p>
                <div className={styles.typeAll}>
                    {
                        data.map((item,index)=>{
                            return <span key={item.subject_id}>{item.subject_text}</span>
                        })
                    }
                </div>
            </div>
            <div className={styles.topType}>
                考试类型：<Cascader options={examArr} onChange={onChange} placeholder="Please select" />
            </div>
        </div>
    </div>
}

const mapStateToProps = state=>{
    return {
      ...state.view
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
      look(){
        dispatch({
          type: 'view/watch'
        })
      },
      examType(){
          dispatch({
              type:'view/examType'
          })
      },
      questionType(){
          dispatch({
              type:'view/questionType'
          })
      }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(View);