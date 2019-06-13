import { Table, Button } from 'antd';
const columns = [
    {
        title: '類型ID',
        dataIndex: 'name',
    },
    {
        title: '類型名稱',
        dataIndex: 'age',
    },
    {
        title: '操作',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: '簡答題',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: '代碼閱讀題',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: '代碼補全',
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Joe Black',
        age: '修改bug',
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '5',
        name: 'Joe Black',
        age: '手寫代碼',
        address: 'Sidney No. 1 Lake Park',
    },
];
function Type() {
    return (
        <div>
            <Button type="primary">添加類型</Button>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    )
}
export default Type;