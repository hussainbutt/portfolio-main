import {FaReact,FaNode, FaNetworkWired} from "react-icons/fa"
import {SiCss3,SiHtml5,SiMongodb,SiUnity,SiUnrealengine,SiBlender,SiCsharp, SiAdobeillustrator, SiInternetexplorer, SiNetapp, SiInternetarchive} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import assets
import Rpreview1 from '../assets/14.jpg'
import Rpreview2 from '../assets/12.jpg'
import Rpreview3 from '../assets/13.jpg'

import Tpreview1 from '../assets/5.png'
import Tpreview2 from '../assets/7.png'
import Tpreview3 from '../assets/9.jpg'

import Epreview1 from '../assets/2.png'
import Epreview2 from '../assets/1.png'
import Epreview3 from '../assets/3.png'


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>
      <h5 className='section__title about_project' >Also please have a look at: <a href="https://www.artstation.com/hussainintzar"> My Art Station Profile - Click Here</a> </h5>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Rpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Rpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Rpreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Unreal Engine 5 Environment</h3>

        <p className='project__description'>
        This shows an amazing castle environment setup, ready to use in a game.
   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiUnrealengine size={40} />
          </li>
      
        </ul>
    </p>
     </div>

  </div>
  


{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Tpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Tpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Tpreview3} alt="Image 2"/>
           </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Mindstorm and Airidev projects</h3>

  <p className='project__description'>
  This includes some pics of the projects I worked with during my work experience. Unfortunately, I can not share much because of 
  company's agreement.

  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiUnity size={40} />
      <SiBlender size={40} />
      <SiCsharp size={40}/>
      

    </li>

  </ul>


   

</p>
</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Epreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Epreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Epreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">Campus Breach</h3>

  <p className='project__description'>
  Campus Breach - formerly known as Project Uniwars, is an upcoming 3D first person shooter multiplayer game being developed under
  "Seni Interactive".

  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiAdobeillustrator size={40} />
      <SiCsharp size={40} />
      <SiBlender size={40}/>
      <SiUnity size={40}/>
      <FaNetworkWired size={40}/>


    </li>

  </ul>


</p>
</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
