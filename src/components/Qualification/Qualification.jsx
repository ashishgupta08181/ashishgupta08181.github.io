import React from 'react'
import { useState } from 'react'
import "./Qualification.css"
const Qualification = () => {
    const [toggleState,setToggleState]=useState(2)
    
    const toggleTab=(index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification section" id="Qualification" >
    <h2 className='section__title'> Qualification </h2>
   
    <span className='section__subtitle'>My personal journey</span>
    

    <div className="qualification__container container">
        <div className='qualification__tabs'>
            <div className={
                toggleState===1
                ?'qualification__button qualification__active button--flex'
                :'qualification__button  button--flex'
            } onClick={()=>toggleTab(1)} >
                <i class="uil uil-graduation-cap  qualification__icon"></i>{""}Education

            </div>
            <div className={
                toggleState===2
                ?'qualification__button qualification__active button--flex'
                :'qualification__button  button--flex'
            }onClick={()=>toggleTab(2)}
                >
                    <i class="uil uil-briefcase-alt qualification__icon"></i>{""}Certificate

            </div>
        </div>
        <div className="qualification__sections">
            <div className={toggleState===1 ?
                "qualification__content qualification__content-active"
                :"qualification__content"}
                >
                
                <div className="qualification__data">
                <div>
                    <h2 className="qualification__title">Full-Stack MERN Development</h2>
                    <span className="qualification__subtitle">
                    Masai School
 
                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>
                    APRIL 2022 - PRESENT

                    </div>
                    </div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                </div>
                
                
                <div className="qualification__data">
                    <div></div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                <div>
                    <h3 className="qualification__title">Bachelor Of Arts</h3>
                    <span className="qualification__subtitle">
                    Modern Group Of Institutions,Jhansi
                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>
                    2017 - 2020

                    </div>
                </div>
                    
                </div>


                <div className="qualification__data">
                <div>
                    <h3 className="qualification__title"> Indermediate</h3>
                    <span className="qualification__subtitle">
                    Margaret Leask Memorial English School, Jhansi
                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>
                    2014 – 2015

                    </div>
                    </div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                </div>
                
                
                {/* <div className="qualification__data">
                    <div></div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                <div>
                    <h3 className="qualification__title"> Web Design</h3>
                    <span className="qualification__subtitle">
                        Masai 
                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>2021-present

                    </div>
                </div>
                    
                </div> */}
                
            </div>


            <div className={toggleState===2 ?
                "qualification__content qualification__content-active"
                :"qualification__content"}
                >
                
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">ITI</h3>
                    <span className="qualification__subtitle">
                    Industrial Training Institute
                    K.G. Private ITI, Mathura


                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>2015 - 2017


                    </div>
                    </div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                </div>
                
                
               


                
                
                {/* <div className="qualification__data">
                    <div></div>
                    <div>
                    <span className="quilifcation__rounder"></span>
                    <span className="qualification__line"></span>
                    </div>
                <div>
                    <h3 className="qualification__title"> Web Design</h3>
                    <span className="qualification__subtitle">
                        Masai 
                    </span>
                    <div className='qualification__calender'>
                    <i class="uil uil-calendar-alt"></i>2021-present

                    </div>
                </div>
                    
                </div> */}
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default Qualification