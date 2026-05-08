import React from 'react'
import {Code, User, FolderGit} from 'lucide-react'
const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='conatiner mx-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About
            <span className='text-primary'>
              Me
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold'> Passionate web developer & tech creator </h3>
              <p className='text-muted-foreground '>
               Frontend Developer focused on building responsive, clean, and performant web applications using React and modern JavaScript. I enjoy turning ideas into practical, user-friendly interfaces and continuously improving my skills by working on real-world projects. Currently expanding into backend development to become a full-stack developer.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a href="#Contact"className='cosmic-button'>
                  Get In Touch
                </a>
                <a href=""className='px-6 py-2 rounded-full border-2 border-primary text-primary  hover:bg-primary/10 transition-all duration-300'>
                  DownLoad Resume
                </a>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6'>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4 '>
                  <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
            </div>
            <div className='text-left'>
            <h4 className='font-semibold text-lg'>Web Devlopment</h4>
            <p className='text-muted-foreground'>
              Build responsive and modern websites using HTML, CSS, JavaScript, React, and Tailwind CSS. Focused on clean UI, performance, and mobile-friendly design.
            </p>
            <div/>
            </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4 '>
                  <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary'/>
            </div>
             <div className='text-left'>
            <h4 className='font-semibold text-lg'>UI/UX Design</h4>
            <p className='text-muted-foreground'>
              Design user-friendly interfaces with attention to layout, readability, and smooth user experience. Creating modern and minimal web designs.            </p>
            <div/>
            </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4 '>
                  <div className='p-3 rounded-full bg-primary/10'>
                  <FolderGit className='h-6 w-6 text-primary'/>
            </div>
<div className='text-left'>
            <h4 className='font-semibold text-lg'>Project Managment</h4>
            <p className='text-muted-foreground'>
              Manage personal and collaborative projects with proper planning, structured workflow, and version control using Git and GitHub.
            </p>
            <div/>
            </div>
                </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AboutSection
