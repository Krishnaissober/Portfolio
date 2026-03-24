import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send } from 'lucide-react'
import { cn } from '../utils/utils'
import { showSuccessToast } from './ui/toast'

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    showSuccessToast('Message sent! Thank you for your message.')
    e.currentTarget.reset()
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id='Contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h1>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discuss new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    className='text-muted-foreground hover:text-primary transition-colors'
                    href='mailto:itskrishan11@gmail.com'
                  >
                    itskrishan11@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    className='text-muted-foreground hover:text-primary transition-colors'
                    href='tel:+919554656914'
                  >
                    +91 9554656914, 9464729929
                  </a>
                </div>
              </div>

              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4>Address</h4>
                  <p className='text-muted-foreground'>Krishna Enclave, Dera-Bassi</p>
                </div>
              </div>
            </div>

            <div>
              <h4>Connect With Me</h4>
              <div className='flex items-center justify-center space-x-4'>
                <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                  <Linkedin />
                </a>
                <a href='https://x.com' target='_blank' rel='noreferrer'>
                  <Twitter />
                </a>
                <a href='https://www.instagram.com/kriishnatiiwarii/' target='_blank' rel='noreferrer'>
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium mb-2' htmlFor='name'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='Krishna...'
                />
              </div>

              <div>
                <label className='block text-sm font-medium mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='john@gmail.com'
                />
              </div>

              <div>
                <label className='block text-sm font-medium mb-2' htmlFor='message'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary'
                  placeholder='Type your message here...'
                  rows={4}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}
              >
               {isSubmitting ?"sending..." :'Send Message'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
