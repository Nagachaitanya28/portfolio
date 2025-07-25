
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-inter font-bold text-3xl sm:text-4xl text-gray-900 mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="font-roboto text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a final-year B.Tech student in Electronics and Communication Engineering from JNTU Kakinada (RISE Krishna Sai Prakasam Group of Institutions), with a strong interest in AI, cloud technologies, and full-stack development.
            </p>
            <p className="font-roboto text-gray-600 text-lg mb-6 leading-relaxed">
              I've developed hands-on projects like a real-time audio steganography system for military applications and a news website using HTML, CSS, and JavaScript. I've also earned certifications in AWS Cloud, Data Engineering, Cybersecurity, and Android Development, which have helped me build a strong technical foundation.
            </p>
            <p className="font-roboto text-gray-600 text-lg mb-8 leading-relaxed">
              Known for being a fast learner and a proactive team player, I bring problem-solving skills, adaptability, and a passion for innovation to everything I do. I'm now seeking an opportunity to apply my technical skills in a challenging environment, where I can contribute meaningfully and grow into a solution-oriented tech professional.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="font-roboto text-gray-700">Problem-solving mindset</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="font-roboto text-gray-700">Effective communication</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="font-roboto text-gray-700">Quick learning & adaptability</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="font-inter font-semibold text-2xl text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-inter font-semibold text-lg text-primary mb-2">
                  B.Tech in Electronics & Communication Engineering
                </h4>
                <p className="font-roboto text-gray-700 mb-1">
                  RISE Krishna Sai Prakasam Group of Institutions
                </p>
                <p className="font-roboto text-gray-500 text-sm">2025</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-inter font-semibold text-lg text-primary mb-2">
                  Intermediate
                </h4>
                <p className="font-roboto text-gray-700 mb-1">
                  Royal Junior College, Addanki
                </p>
                <p className="font-roboto text-gray-500 text-sm">2021 - 87%</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-inter font-semibold text-lg text-primary mb-2">
                  SSC
                </h4>
                <p className="font-roboto text-gray-700 mb-1">
                  Sri Prakasam Govt Boys High School
                </p>
                <p className="font-roboto text-gray-500 text-sm">2018 - 9.5 CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
