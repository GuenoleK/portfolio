import React from 'react';
import {HomeView} from './views/home';
import {Layout} from './components/layout';

export default {
    path: '/',
    component: Layout,
    indexRoute:
    {
        onEnter: (({params}, replace) => { replace('home');})
    },
    childRoutes:
    [
        {
            path: 'home',
            component: HomeView
        }
    ]
};
