import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sessions from './components/Sessions.jsx'
import sessionsList from './components/SessionsList.jsx'

function App() {

  <sessionsList />

  return ( 
    <div>
      <Header />

      <div className="firstBackgroundBlock"></div>

      <div className="productDesignBox">
        <div className="divArrowLeft">
          <img src="/images/Screen Shot 2021-03-23 at 21.17.40.png" alt="arrowLeft" className="arrowLeft"/>
        </div>
        <div className="productDesignWrapperAlign">
          <div className="productDesignWrapper">
            <h1 className="productDesignTitle">Product Design Course</h1>
            <div>
              <h2 className="productFactoryTitle">Product Factory</h2>
            </div>
            <span className="productDesignText">Learn how design thinking, user research, business vision and marketing, and finally designing and creating real digital products for real users.</span>
            <a href="" className="productDesingButton">Start Register</a>
          </div>
          <div className="productDesignImgWrapper">
            <img src="/images/Screen Shot 2021-03-22 at 23.34.52.png" alt="productDesignImg" className="productDesignImg" />
          </div>
        </div>
        <div className="divArrowRight">
        <img src="/images/Screen Shot 2021-03-23 at 21.17.40.png" alt="arrowRight" className="arrowRight"/>
        </div>
      </div>

      <div className="secondBackgroundBlock"></div>

      <div className="aboutUsBox">
        <div className="aboutUsUpper">
          <div className="productFactoryBox">
            <div className="productFactoryTv">
              <img src="/images/Grupo 368@2x.png" alt="productFactoryTvImg" className="productFactoryTvImg" />
              <img src="/images/Grupo 602@2x.png" alt="productFactoryPlayImg" className="productFactoryPlayImg" />
            </div>
          </div>
          <div className="aboutUsTitleBox">
            <h1 className="aboutUsTitle">About us</h1>
            <span className="aboutUsTitleBackground">About</span>
          </div>
          <div className="aboutUsLinks">
            <nav classa="aboutUsLinksNav">
              <ul className="aboutUsLinksAlign">
                <li><a href=""><img src="/images/facebook-square-brands@2x.png" alt="facebookImg" /></a></li>
                <li><a href=""><img src="/images/twitter-brands@2x.png" alt="twitterImg" /></a></li>
                <li><a href=""><img src="/images/instagram-brands(1)@2x.png" alt="instagramImg" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="aboutUsBackground">
          <span className="aboutUsText">Today, given the economic and labor market conditions, the best and least risky way to invest is to invest in personal assets and skills. UI / UX Product Design Course covers all aspects of product design from product thinking and design to user-centric research and product research and business vision and digital marketing to product designers and creators, designing the end-user experience and interface of the product and how to deliver it. Includes. In this course, we have tried to use the presence of successful and experienced experts in each of the above mentioned areas to engage in more specialized interaction as a mentor. This course is project-oriented and participants in several product teams are working to improve their product quality. And then start competing with other teams in a healthy, learning-filled competition. Finally, after the final exam and competition, participants will be awarded a Certificate of Product Factory certification.</span>
        </div>
      </div>

      <div className="courseExperienceBox">
        <div className="courseExperienceTitleBox">
          <h1 className="courseExperienceTitle">Course Experience</h1>
          <span className="courseExperienceTitleBackground">Experience</span>
        </div>
        <div className="courseExperienceButtonsBox">
          <button className="afterButton">After attending the course</button>
          <button className="duringButton">During the period</button>
          <button className="beforeButton">Before attending the course</button>
        </div>
        <div className="courseExperienceBottomAlign">
          <div className="courseExperienceBottomBox">
            <img src="/images/Grupo 468@2x.png" alt="courseExperienceImg" className="courseExperienceImg" />
            <span>This course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses.<br /> Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,</span>
          </div>
        </div>
      </div>

      <div className="thirdBackgroundBlock"></div>

      <div className="sessionsBox">

        <div className="sessionsTitleBox">
          <h1 className="sessionsTitle">Sessions</h1>
          <span className="sessionsTitleBackground">Sessions</span>
        </div>

        <div className="sessions">
          {
            sessionsList.map(item => (
                <Sessions key={ item.title } {...item}/>
              )
            )
          }
        </div>

        </div>
      </div>
  );
}

export default App;
