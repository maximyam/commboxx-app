import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import { PATHS } from './PATHS'
import { RouteWithoutNav, RouteWithTopNav } from './RouteTypes'

const LoginPage = React.lazy(() => import(/* webpackChunckName: "LoginPage" */ '../pages/LoginPage'))
const MainPage = React.lazy(() => import(/* webpackChunckName: "MainPage" */ '../pages/MainPage'))
const ProfilePage = React.lazy(() => import(/* webpackChunckName: "ProfilePage" */ '../pages/ProfilePage'))
const LoaningPage = React.lazy(() => import(/* webpackChunckName: "LoaningPage" */ '../pages/LoaningPage'))

export const Routes = () => (
  <Switch>
    <Route path={PATHS.LOGIN} element={<RouteWithoutNav component={LoginPage} />} />
    <Route path={PATHS.MAIN} element={<RouteWithTopNav component={MainPage} title="commspace" />} />
    <Route path={PATHS.PROFILEPAGE} element={<RouteWithTopNav component={ProfilePage} title={'Profile info'} />} />
    <Route path={PATHS.LOANINGPAGE} element={<RouteWithTopNav component={LoaningPage} title={'Loan an item'} />} />
  </Switch>
)
