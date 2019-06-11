import dva from 'dva';
import './index.css';
import "antd/dist/antd.css";
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
<<<<<<< HEAD
// app.model(require('./models/example').default);
=======
app.model(require('./models/user').default);
>>>>>>> 53142d4a05fadc355d96f777516b5973cfcc2327

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
