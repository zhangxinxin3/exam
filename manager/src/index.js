import dva from 'dva';
//引入全局样式
import './index.css';
//引入antd样式
import "antd/dist/antd.css";
//引入全局loading
import createLoading from "dva-loading";
import { createLogger } from "redux-logger";
import { message } from "antd";
// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
    onError:(e)=>{
        message.error(e.message,/*duration */3)
    }
});

// 3. Model
app.model(require('./models/user').default);//用户登录
app.model(require('./models/view').default);//查看试题
app.model(require('./models/add').default);//添加试题
app.model(require('./models/exhibition').default);//用户展示
app.model(require('./models/addExam').default);//创建试题1
app.model(require('./models/addMark').default);//创建试题2
app.model(require('./models/addUser').default);//添加用户
app.model(require('./models/exam').default);//考试。。。
app.model(require('./models/global').default);//国际化

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
