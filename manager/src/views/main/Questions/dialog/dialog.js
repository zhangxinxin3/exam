import React ,{useEffect} from "react";
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import { Layout } from 'antd';
import styles from './dialog.scss';

const { Content } = Layout;

function Dialog(props) {
    let { getItem ,allArr } = props;
    useEffect(()=>{
        getItem(getItem)
    },[])
    console.log()
    return <Layout className={styles.wrapper}>
        <p className={styles.title}>试题详情</p>
        <Content className={styles.wMain}>
            <Content className={styles.wrapLeft}>
                <span>出题人:{allArr[0] && allArr[0].user_name}</span>
                <h3>题目信息</h3>
                <div className={styles.infor}>
                    <span>{allArr[0] && allArr[0].questions_type_text}</span>
                    <span>{allArr[0] && allArr[0].subject_text}</span>
                    <span>{allArr[0] && allArr[0].exam_name}</span>
                </div>
                <h4>{allArr[0] && allArr[0].title}</h4>
                <ReactMarkdown
                    className={styles.markdown}
                    source={allArr[0] && allArr[0].questions_stem}
                />
            </Content>
            <Content className={styles.wrapRight}>
                <ReactMarkdown
                    className={styles.markdown}
                    source={allArr[0] && allArr[0].questions_answer}
                />
            </Content>
        </Content>
    </Layout>  
}

const mapStateToProps = state=>{
    return {
      ...state.view
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
        getItem(){
          dispatch({
              type:'view/getItem'
          })
      }
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(Dialog);