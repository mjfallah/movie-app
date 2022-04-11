import React from 'react';
import Header from './components/Header';
import TopSlider from './components/TopSlider';
import Main from "./components/Main";
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SeriesWeeklyContextProvider from './components/SeriesSchedule/SeriesWeeklyContextProvider';
import PostContextProvider from './components/Posts/PostContextProvider';

const App = () => {
  return (
    <div>
      <SeriesWeeklyContextProvider>
        <PostContextProvider>
          <Header />
          <TopSlider />
          <Main />
          <Footer />
          <BackToTopButton />
        </PostContextProvider>
      </SeriesWeeklyContextProvider>
    </div>
  );
};

export default App;