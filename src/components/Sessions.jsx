import React from 'react'


const SessionImg = ({path}) => (
    <img src={path} alt="profileImg" className="profileImg" />
)

const Sessions = ({title, text, images}) => (
    <>
        <div className="sessionHeader">
            <h2 className="sessionNumberTitle">{ title }</h2>
            <div className="sessionsClock">
                <img src="/images/Livello_5@2x.png" alt="clockImg" className="clockImg" />
                <span>Duration: 6 hour</span>
            </div>
            <div className="sessionsCalendar">
                <img src="/images/event@2x.png" alt="calendarImg" className="calendarImg" />
                <span>Date: November 5</span>
            </div>
            <div className="sessionsView">
                <img src="/images/Grupo 845@2x.png" alt="viewImg" className="viewImg" />
                <span>View video</span>
            </div>
        </div>
        <div className="sessionBody">
            <div className="profilePicturesBox">
                {
                    images.map(item => (
                        <SessionImg key={ item.path } {...item}/>
                    ))
                }
            </div>
            <span dangerouslySetInnerHTML={{ __html:text }}></span>
        </div>
    </>
)

export default Sessions