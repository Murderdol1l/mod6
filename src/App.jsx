import './App.css';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Layout, ExpandItem, Scroll } from './components';

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1000) {
        setShowScrollUp(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <MainContainer>
      <ExpandItem index={1}>
        <Layout height={154} templateName="Lagoona" index={1}>

        </Layout>
      </ExpandItem>
      <ExpandItem index={2}>
        <Layout height={600} templateName="Lagoona" index={2}>

        </Layout>
      </ExpandItem>
      <ExpandItem index={3}>
        <Layout height={252} templateName="Lagoona" index={3}>

        </Layout>
      </ExpandItem>
      <ExpandItem index={4}>
        <Layout height={744} templateName="Lagoona" index={4}>

        </Layout>
      </ExpandItem>
      <ExpandItem index={5}>
        <Layout height={634} templateName="Lagoona" index={5}>

        </Layout>
      </ExpandItem>
      <ExpandItem index={6}>
        <Layout height={1428} templateName="Lagoona" index={6}>

        </Layout>
      </ExpandItem>

      {
        showScrollUp && <Scroll />
      }
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export default App;
