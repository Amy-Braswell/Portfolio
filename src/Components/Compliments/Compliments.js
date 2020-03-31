import React from 'react'
import './Compliments.css'

function Compliments() {
   return(
      <section className='compliments-section compliments-background'>
         <h2>Compliments<span>.</span></h2>
         <div className='compliments-flex'>
            {/* <div className='headshot-wrapper'>
               <img className='headshot' 
                  src={require('../../Images/Braswell_Headshot.jpg')} 
                  alt='head shot'>
               </img>
            </div> */}
            <div className='statement-wrapper'>
                    <div className='left-recommendation'>
                        <img className='quotation-mark-open' 
                            src={require('../../Images/Quote-Marks/open_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        <p>&nbsp; &nbsp;Amy is a strong contributor and kind team member that allows our projects to be completed 
                        with major success.   She brings an educator’s soul and knowledge base to projects while still maintaining the 
                        desire to learn and grow.   Amy is versatile and able handle any complication sent her way.  She is organized and 
                        thoughtful allowing her to maintain a workflow with less guidance. More than technical proficiency and organization,
                        Amy’s strongest characteristics are the ones that are hard to teach.  Hardworking.  Quick on her feet.  
                        A self-starter. Loyal and Honest.  Patient.  These are essential parts of a supportive team member and will make 
                        her successful in any role.&nbsp;
                        <img className='quotation-mark-close' 
                            src={require('../../Images/Quote-Marks/close_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        </p>
                        <p className='recommender'>-Rebecca Littleton / Producer
                        </p>
                    </div>
                    <div className='right-recommendation additional-recommendation'>
                        <img className='quotation-mark-open-right' 
                            src={require('../../Images/Quote-Marks/open_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        <p>&nbsp; &nbsp;It is refreshing to come across a professional like Amy, who is a highly skilled and gifted 
                        designer, developer, and web strategist. I had the pleasure of working with Amy at a GiveCamp Memphis event, 
                        collaborating on a social media project. Amy’s ability to conceptualize the projects needs and create a direction to 
                        implement were truly remarkable for Craft Organization. In this tense and demanding short weekend, Amy was able to rise 
                        to the challenge and create products like a website and brand logo that brilliantly captured the concept of our organization. 
                        No matter the challenge, as a team lead, Amy made sure to remind the team that she would see to it that things were completed 
                        and done in a timely manner. She did just that. Therefore, Amy earns my highest recommendation.&nbsp;
                        <img className='quotation-mark-close' 
                            src={require('../../Images/Quote-Marks/close_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        </p>
                        <p className='recommender'>-Milton Craft / Craft Organization
                        </p>
                    </div>
                    <div className='left-recommendation additional-recommendation'>
                        <img className='quotation-mark-open' 
                            src={require('../../Images/Quote-Marks/open_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        <p>&nbsp; &nbsp;Amy is a consummate professional with a keen eye on delivering the highest quality product and service. 
                        Her ability to be flexible and agile in any situation helps keep projects timely. The best part about Amy is her personable 
                        demeanor in any situation. She is a pure delight to collaborate with and I recommend her skills, talents, and presence on any 
                        project.&nbsp;
                        <img className='quotation-mark-close' 
                            src={require('../../Images/Quote-Marks/close_quote.jpg')} 
                            alt='quote mark'
                            width='10vw'>
                        </img>
                        </p>
                        <p className='recommender'>-Yen Azzaro / Co-Founder of Y-Fi and ADMIN Micro Museum
                        </p>
                    </div>
            </div>

         </div>     
      </section>

   )
}

export default Compliments

