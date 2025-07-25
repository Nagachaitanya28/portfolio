import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Coding Banner */}
        <div className="mb-12 flex justify-center">
          <img 
            src="/lovable-uploads/bad91a19-1cad-48bf-99c3-7d01657c95be.png" 
            alt="Chandavolu Naga Chaitanya - Python Developer Banner" 
            className="max-w-full h-auto rounded-lg shadow-lg bg-white p-4"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary text-6xl">Chandavolu</span>
              <br />
              <span className="text-primary text-6xl text-left mx-0 py-0 px-0 my-0 font-extrabold">Naga Chaitanya</span>
            </h1>
            <p className="font-inter text-xl sm:text-2xl text-gray-600 mb-4">Full-stack Developer | AI Explorer</p>
            <p className="font-roboto text-lg text-gray-600 mb-8 max-w-lg">
              Turning ideas into solutions with code, AI, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToAbout} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300 transform hover:scale-105">
                Explore My Work
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-inter font-medium transition-all duration-300" asChild>
                <a href="https://drive.google.com/file/d/1UuheWlCprlyVMFr5QAaORv6f33bg0f9J/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-2 animate-float">
                <img alt="Chandavolu Naga Chaitanya" src="/lovable-uploads/761acb44-239f-46b0-9271-85334caeccb8.png" className="w-full h-full rounded-full object-fill" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <Button onClick={scrollToAbout} variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;