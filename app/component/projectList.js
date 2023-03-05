"use client";

import React, { useState } from 'react';
import { personalProjects } from '../../data/page-data';

const ProjectList = () => {
  //this is for the big tabs
  const [selectedCategory, setSelectedCategory] = useState('');
  //this is for the smaller ones (under the projects)
  const [hoveredProject, setHoveredProject] = useState('')


  const handleDivClick = (category) => {
    console.log("this is the handle click: ",{category})
    if (category === selectedCategory){
      setSelectedCategory('')
    }
    else
    {
      setSelectedCategory(category);
    }
    setHoveredProject('');
  };

  return (
    <div>
      {personalProjects.allProjects.map((element) => (
        
        <div className='m-2 rounded-t-lg '>
        {/* bg-[#ebe8e8] */}
          <div
            key={element.language}
            className='bg-grey text-left  pl-2 text-2xl rounded-t-lg flex justify-between'
            onClick={() => handleDivClick(element.language)}
          >
            <p className='text-4xl pt-1 pl-4'>{element.language}</p>

              <svg
                height={76}
                width={76}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='-79.2 -79.2 488.4 488.4'
                xmlSpace='preserve'
                stroke='#000'
                strokeWidth={13.53}
                className='pt-9'
              >
                <path d='M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 
                  139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 
                  15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 
                  5.859-15.355.001-21.213z'
                />
              </svg>

          </div>
          {selectedCategory ===element.language ? element.projectDetails.map((fullProject) =>
              <div key={fullProject.projectName}>
                <div className='pl-2 bg-[#ebe8e8] w-11/12 mx-auto hover:text-yellow hover:bg-black'               
                  onMouseEnter={() => setHoveredProject(fullProject.projectName)}
                  onMouseLeave={() => setHoveredProject('')}>
                  <p>{fullProject.projectName}</p>
                  {/* <a href='facebook.com'> */}
                    <div className={`grid sm:grid-cols-2 grid-rows-1 ${hoveredProject === fullProject.projectName ? ('visible'):('hidden')} pb-3`}>
                      <p className={' px-2' }> {fullProject.Brief} </p>
                        <a href={`${fullProject.link} `} target="_blank">
                          <button class="sm:rounded-full sm:place-content-end bg-yellow text-black align-top lg:h-15 lg:mr-3 lg:p-3 lg:mb-3">
                            Check it out on GitHub
                          </button>
                        </a>

                    </div>
                  {/* </a> */}
                </div>
              
              </div>
          ):(<div></div>)
          }
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
