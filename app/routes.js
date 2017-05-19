import React from 'react';
import {HomeView} from './views/home';
import {AboutMeView} from './views/about-me';
import {MySkillsView} from './views/my-skills';
import {MyAchievementsView} from './views/my-achievements';
import {MyCareerView} from './views/my-career';
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
        },
        {
            path: 'about-me',
            component: AboutMeView
        },
        {
            path: 'my-skills',
            component: MySkillsView
        },
        {
            path: 'my-career',
            component: MyCareerView
        },
        {
            path: 'my-achievements',
            component: MyAchievementsView
        }
    ]
};
