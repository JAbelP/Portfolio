import React from 'react'

const ProfessionalExperience = ({data}) => {
  const {title, experiences } = data;
//   console.log("this is data", {data})
//   console.log("this is title", {title})
    return (
    <section>
        <h2> {title}</h2>
        <div className='flex flex-col gap-6'>
            {experiences.map(({role,description,current}) => (
                <div className='flex flex-col rounded-lg'> 
                    <span className={`h-2  ${current? "bg-green":"bg-grey"}`}/>
                    <div className='bg-grey-light p-6 drop-shadow-md gap-3'> 
                        <h3>
                            {role}
                        </h3>
                        <div>{description.map((point) =>(
                            <p className='m-2 p-1'>◘ {point}</p>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProfessionalExperience