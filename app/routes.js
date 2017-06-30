import React from 'react';
import {HomeView} from './views/home';
import {AboutMeView} from './views/about-me';
import {MySkillsView} from './views/my-skills/index';
import {MyAchievementsView} from './views/my-achievements';
import {MyCareerView} from './views/my-career';
import {Layout} from './components/layout';

export default {
    path: '/',
    component: Layout,
    indexRoute: {
        component: HomeView
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
            path: 'my-skills/:name',
            component: MySkillsView
        },
        {
            path: 'my-career',
            component: MyCareerView
        },
        {
            path: 'my-achievements/:name',
            component: MyAchievementsView
        }
    ]
};
