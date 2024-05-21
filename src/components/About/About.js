
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
  import { ThemeContext } from '../../contexts/theme';
  import { useContext } from 'react';
  import { useState } from 'react';
  import { useEffect } from 'react';
import {BiStar} from "react-icons/bi"
import Image from '../assets/image.png'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import './About.css'



function About  () {
  

  const [{ themeName }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

 useEffect(() => {
    if (themeName === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themeName]);
 

  return (
     
    <div className='about center' id='about'>
      
      <h2>ABOUT <span className='about__name'> ME</span></h2>     
   
    
    
      <div className='about__contact' >

                 
                 <div>
        
                   <img src={Image} alt='Hussain Intzar' id='profile'/>
    
                 </div>

                <div>
                    <h4 className='about__desc'>
                      Peace Everyone! This is Hussain Intzar - A Unity Game Developer ... and a gamer, 
                      currently pursuing in Bachelor of Computer Science from University of Education Township, Lahore.
                    </h4>
                    <br/>
                  <div id='interest' >
                   <h4 className='about__desc'> My "other than coding" interests are:</h4>
               
                   <BiStar className='about__name'/> <span className='about__name'> Gaming</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Building PCs </span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Playing Cricket</span>
                   <br/>
                    <BiStar className='about__name' /> <span className='about__name'>Watching anime</span>
                    </div>
                </div>
                 
          </div>     
                  

           
            
               
                
      <h2 id='timeline'>MY <span className='about__name'>EDUCATION</span> </h2>

     
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement date='2021 - 2025'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              University Of Education
            </h4>
            <p data-aos="fade-right">
              Found some amazing fellas with interests which aligned to mine.
              Also worked as Core Team Member @ UE IT Society. 
              Gained volunteer experience along with providing for the community 
              and much more...
            </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement date='2019 - 2021'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
    
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              FSC ICS
            </h4>
            <p data-aos="fade-right">
               KIPS College, Lahore.
            </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement date='2020'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
    
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Graphics Designing Certification
            </h4>
            <p data-aos="fade-right">
               NISDA Institute
            </p>

        </VerticalTimelineElement>
       
        
            
        <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>

      </VerticalTimeline>



      <h2 id='timeline'><span className='about__name'>Work Experience</span> </h2>

     
<VerticalTimeline lineColor={linecolor}>
  <VerticalTimelineElement date='May 2023 - August 2023'  icon={<SchoolIcon />} contentStyle={{
        boxShadow: `var(--shadow)`,
        backgroundColor: `var(--clr-bg)`,
        textAlign: "center",
        color: `var(--clr-fg-alt)`
      }}
      contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
      iconStyle={{
        backgroundColor: `var(--clr-bg)`,
        color: `var(--clr-primary)`
      }}
      >

      <h4
        className="vertical-timeline-element-subtitle"
        data-aos="fade-right"
      >
        Mindstorm Studios - Internee
      </h4>
      <p data-aos="fade-right">
        Found some amazing fellas with interests which aligned to mine.
        Created a game in Gamejam 2023 'worked as a game artist to adjust environment'.
        Learnt basics of unity.
        Blender skills came handy while game creation.
      </p>

  </VerticalTimelineElement>


  <VerticalTimelineElement date='Dec 2023 - Present'  icon={<SchoolIcon />} contentStyle={{
        boxShadow: `var(--shadow)`,
        backgroundColor: `var(--clr-bg)`,
        textAlign: "center",
        color: `var(--clr-fg-alt)`
      }}
      contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
      iconStyle={{
        backgroundColor: `var(--clr-bg)`,
        color: `var(--clr-primary)`
      }}
      >

      <h4
        className="vertical-timeline-element-subtitle"
        data-aos="fade-right"
      >
        Junior Game Developer - Programmer
      </h4>
      <p data-aos="fade-right">
         Airidev
      </p>

  </VerticalTimelineElement>

  <VerticalTimelineElement date='December 2023 - May 2024'  icon={<SchoolIcon />} contentStyle={{
        boxShadow: `var(--shadow)`,
        backgroundColor: `var(--clr-bg)`,
        textAlign: "center",
        color: `var(--clr-fg-alt)`
      }}
      contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
      iconStyle={{
        backgroundColor: `var(--clr-bg)`,
        color: `var(--clr-primary)`
      }}
      >

      <h4
        className="vertical-timeline-element-subtitle"
        data-aos="fade-right"
      >
        uNIWARS - Founder and CEO
      </h4>
      <p data-aos="fade-right">
         An upcoming first person multiplayer shooter game which will collaborate with Universities
         to identify prospect esports shooter players.
      </p>

  </VerticalTimelineElement>
 
  
      
  <VerticalTimelineElement
      icon={<StarRateIcon />}
      iconStyle={{
        backgroundColor: `var(--clr-bg)`,
        color: `var(--clr-primary)`
      }}
    ></VerticalTimelineElement>

</VerticalTimeline>
              
           

    

    
    </div>
  )
}

export default About
