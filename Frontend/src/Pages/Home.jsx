import React from 'react'
import Options from '../Components/Options'
import axios  from 'axios'
import News from '../Components/News'

const option=[{title:'Register your complaint'},
    {title:'Track your complaint'},
    {title:'Child Abuse'},
    {title:'Cyber Crime'},
    {title:'Child Abuse'},
    {title:'Other'}
]

const Home = (props) => {
  return (
    <div className='flex '>
        <div className='p-15  h-full text-white'>
        <h1 className='font-extrabold text-4xl text-center p-4'>Online Complaint Against Cyber Crime</h1>

        <p className='p-2'>This portal is an initiative of Government of India to facilitate victims/complainants to report cyber crime complaints online. This portal caters to complaints pertaining to cyber crimes only with special focus on cyber crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.

Please contact local police in case of an emergency or for reporting crimes other than cyber crimes. National police helpline number is 112. National women helpline number is 181 and Cyber Crime Helpline is 1930.</p>
            <div className='w-full  flex flex-row  flex-wrap'>
                   {option.map (function(elem ,idx ){
        return <div key={idx} className=''>
<Options title={elem.title}
        
        />
        </div>
    }) }
               
            </div>
        </div>

        
    </div>
  )
}

export default Home