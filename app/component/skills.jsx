"use client";
import React, {useState} from 'react'



const Skills = ({data}) => {
    const [activeTab, setActiveTab] = useState('hard')
    
    const setBg = (active) => activeTab === active ?
    'bg-yellow' :'bg-grey';

    const setTabsAlignment = (tab) => tab === 'hard' ?
    'text-left' :'text-right';
    const tabs =(            
        <div className='flex'>
            {['hard','soft'].map( (el) =>
                <button key ={el} 
                        type='button'
                        className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
                        onClick={ () => setActiveTab(el)}
                > 
                    <p className='h-4'>{el} Skills</p>
                </button>
        )}
        </div>)
    const content = (<ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${activeTab === "hard"? "justify-start":"justify-end"}`}>
    {data[activeTab].map(({icon,text}) => (
        <li key={text} className='skill'>
            <span>
                {icon}
            </span>
            {text}
        </li>
    ))}
    </ul>)
    console.log(activeTab)
    return (
        <div>
            {tabs}
            {content}
        
    </div>
  )
}

export default Skills