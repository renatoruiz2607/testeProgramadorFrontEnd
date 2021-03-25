import React from 'react'

const SessionImg = ({path}) => (
    <img src={path} alt="profileImg" class="profileImg" />
)

const Sessions = ({title, text, images}) => (
    <>
        <div class="sessionHeader">
            <h2 class="sessionNumberTitle">{ title }</h2>
            <div class="sessionsClock">
                <img src="/images/Livello_5@2x.png" alt="clockImg" class="clockImg" />
                <span>Duration: 6 hour</span>
            </div>
            <div class="sessionsCalendar">
                <img src="/images/event@2x.png" alt="calendarImg" class="calendarImg" />
                <span>Date: November 5</span>
            </div>
            <div class="sessionsView">
                <img src="/images/Grupo 845@2x.png" alt="viewImg" class="viewImg" />
                <span>View video</span>
            </div>
        </div>
        <div class="sessionBody">
            <div class="profilePicturesBox">
                {
                    images.forEach(item => (
                        <SessionImg {...item}/>
                    ))
                }
            </div>
            <span>{ text }</span>
        </div>
    </>
)

export default Sessions