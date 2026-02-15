import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50, opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 0.5),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100px',
                }
            })
        })


        gsap.fromTo(sectionRef.current, { opacity: 0, }, { opacity: 1, duration: 1.5 })

    }, [])

    return (
        <section id='work' ref={sectionRef} className="app-showcase">
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* left */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Project 1" />
                        </div>
                        <div className='text-content'>
                            <h2>paste your projects details. here </h2>
                            <p className='text-white-50 md:text-xl'>
                                add your project description here. you can talk about the technologies used, the challenges faced, and the impact of the project. make sure to highlight any unique features or accomplishments related to the project.
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="Project 2" />
                            </div>
                            <h2>add about your second project here</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="Project 3" />
                            </div>
                            <h2>add about your third project here</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ShowcaseSection
