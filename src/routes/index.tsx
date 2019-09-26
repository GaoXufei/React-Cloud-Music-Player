import * as React from 'react';
import { Redirect } from 'react-router-dom';

const { lazy, Suspense } = React;

const HomeComponent = lazy(() => import("../views/Home"));
const Home = (props: any) => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props} />
    </Suspense>
  );
};

const RecommendComponent = lazy(() => import("../views/Recommend"));
const Recommend = (props: any) => {
  return (
    <Suspense fallback={null}>
      <RecommendComponent {...props} />
    </Suspense>
  );
};

const SearchComponent = lazy(() => import("../views/Search"));
const Search = (props: any) => {
  return (
    <Suspense fallback={null}>
      <SearchComponent {...props} />
    </Suspense>
  );
};

const SingersComponent = lazy(() => import("../views/Singers"));
const Singers = (props: any) => {
  return (
    <Suspense fallback={null}>
      <SingersComponent {...props} />
    </Suspense>
  )
}

const RankComponent = lazy(() => import("../views/Rank"));
const Rank = (props: any) => {
  return (
    <Suspense fallback={null}>
      <RankComponent {...props} />
    </Suspense>
  );
}

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (<Redirect to={"/recommend"} />)
      },
      {
        path: '/recommend',
        exact: true,
        key: 'home',
        component: Recommend
      },
      {
        path: '/singers',
        exact: true,
        key: 'singers',
        component: Singers
      },
      {
        path: '/rank',
        exact: true,
        key: 'rank',
        component: Rank
      },
      {
        path: '/search',
        exact: true,
        key: 'search',
        component: Search
      }
    ]
  }
];