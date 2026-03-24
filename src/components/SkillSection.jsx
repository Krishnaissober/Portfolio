import React from 'react'
import { useState } from 'react'
import { cn } from '../utils/utils'
const Skills =[
    //frontend
    {name:'HTML/CSS', level: 89, category: 'Frontend'},
    {name:'JavaScript', level: 60, category: 'Frontend'},
    {name:'Tailwind', level: 70, category: 'Frontend'},
    {name:'React', level: 30, category: 'Frontend'},
    //Backend
    {name:'React', level: 30, category: 'backend'},
    {name:'React', level: 30, category: 'backend'},
    {name:'React', level: 30, category: 'backend'},
    {name:'React', level: 30, category: 'backend'},
    //Tools
    {name:'Git/GitHub', level: 50, category: 'Tools'},
    {name:'VS Code', level: 90, category: 'Tools'},
    {name:'Adobe PhotoShop', level: 60, category: 'Tools'},
    {name:'AOS', level: 80, category: 'Tools'},
]
const categories =['all', 'Frontend', 'backend', 'Tools']
const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const filteredSkills = Skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory);
  return (
    <section id='Skills' className='py-24 px-4 relative bg-secodary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'> Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key) =>(
                   <button
                   key={key} 
                   onClick={()=> setActiveCategory(category)}
                    className= {cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                    activeCategory === category ?"bg-primary text-primary-foreground":'bg=secondary/70 text-foreground hover:bg-secondary'
                    )}>{category}</button>
                ))}

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {filteredSkills.map((skill, key) => (
                <div key={key} className='bg-card p-6 rounded-lg shandow-xs card-hover '>
                    <div className='text-left mb-4'>
                        <h3 className='font-semibold text-lg'>{skill.name}</h3>
                    </div>
                    <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                    style={{width: skill.level + '%'}}
                    />
                    </div>
                    <div className='text-right mt-1'>
                        <span className='text-sm text-muted-foreground'>
                            {skill.level}%

                        </span>
                    </div>
                </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default SkillSection
