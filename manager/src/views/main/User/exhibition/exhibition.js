import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Tabs, Table } from 'antd';
const { TabPane } = Tabs;
const userColumns = [
    {
        title: '用户名',
        dataIndex: 'user_name',
    },
    {
        title: '密码',
        dataIndex: 'user_pwd',
    },
    {
        title: '身份',
        dataIndex: 'identity_text',
    },
];
const identityColumns = [
    {
        title: '身份名称',
        dataIndex: 'identity_text',
    }
];
const apiqxColumns = [
    {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
    },
    {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
    },
    {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
    },
];
const relationColumns = [
    {
        title: '身份名称',
        dataIndex: 'identity_text',
    },
    {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
    },
    {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
    },
    {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
    },
];
const relationsColumns = [
    {
        title: '身份',
        dataIndex: 'identity_text',
    },
    {
        title: '视图名称',
        dataIndex: 'view_authority_text',
    },
    {
        title: '视图id',
        dataIndex: 'view_id',
    }
];
const viewColumns = [
    {
        title: '视图权限名称',
        dataIndex: 'view_authority_text',
    },
    {
        title: '视图id',
        dataIndex: 'view_id',
    }
];
function Exhibition(props) {
    useEffect(() => {
        props.showtest(),
        props.showidentity(),
        props.showapiqx(),
        props.showrelation(),
        props.showrelations(),
        props.showview()
    }, [])
    // console.log(props)
    return (
        <div className="container">
            <h1 style={{ color: "black", fontSize: "50px" }}>用户展示</h1>
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="用户数据" key="1">
                        <h1>用户数据</h1>
                        <Table columns={userColumns} dataSource={props.getUserArr} size="middle" />
                    </TabPane>
                    <TabPane tab="身份数据" key="2">
                        <h1>身份数据</h1>
                        <Table columns={identityColumns} dataSource={props.getIdentityArr} size="middle" />
                    </TabPane>
                    <TabPane tab="api接口权限" key="3">
                        <h1>api接口权限</h1>
                        <Table columns={apiqxColumns} dataSource={props.getApiqxArr} size="middle" />
                    </TabPane>
                    <TabPane tab="身份和api接口关系" key="4">
                        <h1>身份和api接口关系</h1>
                        <Table columns={relationColumns} dataSource={props.getRelationArr} size="middle" />
                    </TabPane>
                    <TabPane tab="视图接口权限" key="5">
                        <h1>视图接口权限</h1>
                        <Table columns={viewColumns} dataSource={props.getViewArr} size="middle" />
                    </TabPane>
                    <TabPane tab="身份和视图权限关系" key="6">
                        <h1>身份和视图权限关系</h1>                        
                        <Table columns={relationsColumns} dataSource={props.getRelationArrs} size="middle" />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

Exhibition.defaultProps = {

}

const mapStateToProps = state => {
    return {
        ...state.showtest
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showtest() {
            dispatch({
                type: "showtest/showusers"
            })
        },
        showidentity(){
            dispatch({
                type:"showtest/showidentity"
            })
        },
        showapiqx(){
            dispatch({
                type:"showtest/showapiqx"
            })
        },
        showrelation(){
            dispatch({
                type:"showtest/showrelation"
            })
        },
        showview(){
            dispatch({
                type:"showtest/showview"
            })
        },
        showrelations(){
            dispatch({
                type:"showtest/showrelations"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exhibition)
