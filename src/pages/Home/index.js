import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro'
import About from './About';
import Experiences from './Experiences';
import FormMock from '../../components/FormMock';
import PokeDex from '../../components/PokeDex';

function Home() {
  return (
    <div>
      <Header /> 
      <div className='bg-primary h-[120vh] px-40 sm:px-5'>
      {/*<Intro />
        <About />
        <FormMock />
        <Experiences />*/}
        <PokeDex />
      </div>
    </div>
  )
}

export default Home;
