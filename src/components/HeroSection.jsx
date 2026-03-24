import { ArrowDown } from "lucide-react"
const HeroSection = () => {
  return (
    <section id='hero' 
    className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight '>
                    <span className=' text-glow opacity-0 animate-fade-in'> Hi, I'm</span>
                    <span className='text-glow text-primary opacity-1 animate-fade-in-delay-1'>{' '}Krishna</span>
                    <span className='text-glow text-gradient ml-2 opacity-1 animate-fade-in-delay-2'>Tiwari</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Frontend Developer specializing in React-based interfaces with a focus on performance and clean UI. I build practical projects that solve real problems and am actively expanding into backend development to become a full-stack engineer.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-center animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll
        </span>
        <ArrowDown className='h-5 w-5 text-primary'/> 
        </div>
    </section>
  );
};

export default HeroSection
