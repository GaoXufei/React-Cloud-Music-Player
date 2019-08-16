import * as React from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config'
// import { NavLink } from 'react-router-dom';

const Top = styled.div`
  height: 30px;
  background: ${(props: any) => props.color};
  text-align: center;
  
`;

function Home(props: any) {

  const { route } = props;
  return (
    <main>
      <Top color="#f1f1f1">
        <span onClick={() => props.history.push('/search')}>Search</span>
      </Top>
      {renderRoutes(route.routes)}
    </main>
  );
}



export default Home;