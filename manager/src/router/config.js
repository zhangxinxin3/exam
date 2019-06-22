import dynamic from "dva/dynamic";
//引入路由
const addQuestions = dynamic({
    component: () => import('@/views/main/Questions/add/add'),
})
const typeQuestions = dynamic({
    component: () => import('@/views/main/Questions/type/type'),
})
const viewQuestions = dynamic({
    component: () => import('@/views/main/Questions/view/view'),
})
const addUser = dynamic({
    component: () => import('@/views/main/User/addUser/addUser')
})
const exhibiTion = dynamic({
    component: () => import('@/views/main/User/exhibition/exhibition')
})
const addExam = dynamic({
    component: () => import('@/views/main/Exam/addExam/addExam')
})
const examList = dynamic({
    component: () => import('@/views/main/Exam/examList/examList')
})
export default {
    routes: [{
        name: 'router.questions',
        icon:'sliders',
        children: [{
            name: 'router.questions.add',
            id: 'main-addQuestions',
            path: '/questions/add',
            component: addQuestions
        }, {
            name: 'router.questions.type',
            id: 'main-QuestionsType',
            path: '/questions/type',
            component: typeQuestions
        }, {
            name: 'router.questions.view',
            id: 'main-watchQuestions',
            path: '/questions/view',
            component: viewQuestions
        }]
    }, {
        name: 'router.user',
        icon:'user',
        children: [{
            name: 'router.user.add',
            id: 'main-addUser',
            path: '/questions/addUser',
            component: addUser
        }, {
            name: 'router.user.view',
            id: 'main-showUser',
            path: '/user/show',
            component: exhibiTion
        }],
    },{
        name:'router.Test',
        icon:'schedule',
        children:[{
            name:'router.Test.add',
            id:'main-addExam',
            path:'/exam/addExam',
            component:addExam
        },{
            name:'router.Test.list',
            id:'main-examList',
            path:'/questions/examList',
            component:examList
        }]
    },{
        name:'router.Class',
        icon:'project',
        children:[{
            name:'router.Class.manager',
            id:'main-ClassManeger',
            path:"/class/manager",
            component:null
        }]
    }]
}