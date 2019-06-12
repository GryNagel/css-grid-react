import React, { useState } from 'react'

export default function ReportHeader() {
    const [ isOpen, setIsOpen ] = useState(true);

    return (
        <div className="reportHeader">
            {isOpen &&         
                <div className="headerContent">
                    <div className="phases">
                        <div>
                            <div className="phaseHeader">
                                <span>Draft</span><span>></span>
                               
                            </div>
                            <p>Date</p>
                            <p>User</p>
                        </div>
                        <div>
                            <div className="phaseHeader">
                                <span>Approved</span><span>></span>
                                
                            </div>
                            <p>Date</p>
                            <p>User</p>
                        </div>
                        <div>
                            <div className="phaseHeader">
                                <span>Published</span><span>></span>
                            </div>
                            <p>Date</p>
                            <p>User</p>
                        </div>
                    </div>
                    <div className="buttons"> 
                        <button>Approve</button> 
                        <button>Publish</button> 
                    </div>
                </div>
            }
            <button className={isOpen ? "toggle open" : "toggle"} onClick={() => setIsOpen(!isOpen)}>›</button>
        </div>
    )
}
