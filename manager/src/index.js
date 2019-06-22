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
app.model(require('./models/user').default);
app.model(require('./models/view').default);
app.model(require('./models/add').default);
app.model(require('./models/exhibition').default);
app.model(require('./models/addExam').default);
app.model(require('./models/addMark').default);
app.model(require('./models/addUser').default);
app.model(require('./models/exam').default);
app.model(require('./models/global').default);
app.model(require('./models/class').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
