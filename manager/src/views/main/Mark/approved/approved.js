import React,{ useState, useEffect } from 'react';
import { connect  } from 'dva';
import { Table } from 'antd';
import { Link, routerRedux } from 'dva/router'
import styles from './approved.scss';


function Approved(props){
    
    const columns = [
        {
            title: '班级名',
            dataIndex: 'classNum',
            key: 'classNum',
        },
        {
            title: '课程名称',
            dataIndex: 'subjectName',
            key: 'subjectName',
        },
        {
            title: '阅卷状态',
            dataIndex: 'marking',
            key: 'marking',
        },
        {
            title: '课程名称',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: '成材率',
            dataIndex: 'yields',
            key: 'yields',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render:operation=>(
                <>
                    <Link to={{
                        pathname:'/marking/classmate',
                        state:{
                            id:operation[0],
                            name:operation[1]
                        }
                    }}>批卷</Link>
                </>
            )
        }
    ]

    let { grade, getList, getDetail } = props;
    let { gradeArr, data } = props;

    useEffect(()=>{
        grade()
    },[])

    gradeArr && gradeArr.map((item,index)=>{
        let flag = data.some(val => val.classNum === item.grade_name);
        if(!flag){
            data.push({
                key:index + item.grade_name ,
                classNum:item.grade_name,
                subjectName:item.subject_text,
                marking:'',
                subject:item.subject_text,
                yields:item.room_text,
                operation:[item.grade_id,item.grade_name]
            })    
        }
        
    }) 



    return <div className={styles.wrapper}>
        <p className={styles.title}>待批班级</p>
        <div className={styles.wrap}>
            <Table columns={columns} dataSource={data} pagination={true} />
        </div>
    </div>
}


const mapStateToProps = state=>{
    return {
        ...state.class
    }
}

const mapDisaptchToProps = dispatch=>{
    return {
        grade(){
            dispatch({
                type:"class/grade"
            })
        },
        getList(payload){
            dispatch({
                type:"class/getList",
                payload
            })
        },
        getDetail(payload){
            dispatch({
                type:"class/getDetail",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Approved)
