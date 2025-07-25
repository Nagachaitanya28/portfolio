
const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'React.js', level: 70 },
    { name: 'Node.js', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 80 },
    { name: 'Machine Learning', level: 85 }
  ];

  const softSkills = [
    'Problem-solving',
    'Effective communication',
    'Teamwork & collaboration',
    'Quick learning & adaptability',
    'Creative thinking',
    'Time management'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-in-left">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-poppins font-medium text-gray-700">{skill.name}</span>
                    <span className="font-poppins text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-8">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                    <span className="font-poppins font-medium text-gray-700">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-poppins font-semibold text-lg text-primary mb-3">
                AI & ML Specialization
              </h4>
              <ul className="space-y-2">
                <li className="font-poppins text-gray-600">• Machine Learning</li>
                <li className="font-poppins text-gray-600">• Deep Learning</li>
                <li className="font-poppins text-gray-600">• Prompt Engineering</li>
                <li className="font-poppins text-gray-600">• Generative AI</li>
                <li className="font-poppins text-gray-600">• OpenAI APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
