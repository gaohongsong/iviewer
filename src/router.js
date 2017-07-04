const routers = [{
        path: '/',
        meta: {
            title: ''
        },

        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/layout',
        meta: {
            title: ''
        },

        component: (resolve) => require(['./views/base.vue'], resolve)
    }
];
export default routers;