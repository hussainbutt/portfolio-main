import "./Home.css"
import Typewriter from "typewriter-effect";
import { Email, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Home()
{

    return(

        <section className="section home center">
         <h1>
          Hi, I am <span className='about__name'>Hussain Intzar</span>
        </h1>
    
      <h2 className="typer"> 
        <Typewriter options={{strings:["A Game Developer", "A Gamer","Curiousity runs in my blood"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
      </h2> 


        <p id="des">Adaptable and responsible Unity game developer capable of implementing complex functionality using C#, a Blender
        modellor by hobby, also environment designer in Unreal Engine 5.</p>
  
 
       <section id="social">
         <a href="https://github.com/Ameer-Hamza289" target="_blank" aria-label='github' className='link link--icon'> <GitHubIcon /> </a>
         
         <a href="https://www.linkedin.com/in/ameer-hamza-748618244/" target="_blank" aria-label='linkedin' className='link link--icon'> <LinkedInIcon /> </a>
         
         <a href='mailto:ameer.hamza92002@gmail.com' aria-label="email" className='link link--icon'> <Email/> </a>

         <a href='tel:+923268842130' aria-label="phone" className='link link--icon'> <Phone/> </a>
    
      </section>
     
   
         <a href="https://drive.google.com/file/d/1dr6iCpYmaHvmcS3OFJahWB1wiSy1iqwC/view?usp=drive_link" target="_blank" id="resumeButton">
            <span type='button' className='btn btn--outline'>  Resume </span>
          </a>
   
    </section>)
}

export default Home