
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecommerceBwImage from '@/assets/ecommerce-bw.jpg';
import audioEncryptionBwImage from '@/assets/audio-encryption-bw.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce platform featuring authentication, product handling, and a secure UI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      github: 'https://github.com/Nagachaitanya28/e-commerce-website',
      image: ecommerceBwImage
    },
    {
      title: 'Audio Data Hiding for Military Use',
      description: 'Steganographic system to securely embed data in audio signals for military communications.',
      technologies: ['MATLAB', 'Signal Processing', 'Cryptography'],
      github: 'https://github.com/Nagachaitanya28/Data-hiding-in-audio-',
      image: audioEncryptionBwImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            The projects highlighted below represent a glimpse of my work. You can explore the full collection on my GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="font-poppins text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-primary text-sm font-poppins rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                  >
                    <Github size={16} />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
