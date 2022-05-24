import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import GithubProvider from './providers/github-provider';

import { ResetCSS } from './global/resetCSS';


const App = () => {


  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
      
    </main>
  );
}

export default App;
