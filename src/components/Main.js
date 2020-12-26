import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import InitiativesPage from './InitiativesPage';
import NewsPage from './NewsPage';
import InDevPage from './InDevPage';
import NotFoundPage from './NotFoundPage';

export default function Main() {
  function sectionListMiddleware(items, count) {
    return items.slice(count).reverse();
  }

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <HomePage middleware={sectionListMiddleware} />
        </Route>

        <Route path="/social">
          <InDevPage title="Соцсети" />
        </Route>

        <Route path="/faq">
          <InDevPage title="Частые вопросы" />
        </Route>

        <Route path="/support">
          <InDevPage title="Поддержка" />
        </Route>

        <Route path="/news">
        <NewsPage middleware={sectionListMiddleware} count="-9" />
        </Route>

        <Route path="/initiatives">
          <InitiativesPage middleware={sectionListMiddleware} count="-6" />
        </Route>
        
        <Route path="*">
          <NotFoundPage middleware={sectionListMiddleware} count="-3" />
        </Route>
      </Switch>
    </main>
  )
}
