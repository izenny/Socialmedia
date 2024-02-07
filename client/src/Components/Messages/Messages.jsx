import React from 'react'
import '../Messages/Messages.css'
import {styled} from 'styled-components'

const Main=styled.h6`
color:red

`

const Messages = () => {
  return (
    <div className='messages'>
        <Main>Hello</Main>
        <div className="message">
            <div className="prp">
                <img className='profile-pic' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="prp" />
            </div>
            <div className="name-message">
                <div className="nam-div">
                    <h5 className='fend-name'>namegd</h5>
                </div>
                <div className="text-message">
                    <p>meskhasgdhsakjjkasjs</p>
                </div>
            </div>
        </div>
        <div className="message">
            <div className="prp">
                <img className='profile-pic' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="prp" />
            </div>
            <div className="name-message">
                <div className="nam-div">
                    <h5 className='fend-name'>namegd</h5>
                </div>
                <div className="text-message">
                    <p>meskhasgdhsakjjkasjs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Messages
