import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Virtual Internship",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Virtual internship program covering AWS cloud services, architecture, and best practices",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"],
      link: "https://drive.google.com/file/d/1WfxNSxpY-xI1wit5LworPoPFpuE0JGqb/view?usp=drivesdk",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
      title: "AWS Data Engineering Virtual Internship",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Comprehensive data engineering program covering AWS data services and pipeline development",
      skills: ["AWS", "Data Engineering", "ETL", "Lambda"],
      link: "https://drive.google.com/file/d/15SfzwKAkPqY7vT70npHXR46dEIGN4cJH/view?usp=drivesdk",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    },
    {
      title: "Google AI-ML Virtual Internship",
      issuer: "Google",
      date: "2024",
      description: "Machine learning and artificial intelligence internship program with Google technologies",
      skills: ["Machine Learning", "AI", "TensorFlow", "Google Cloud"],
      link: "https://drive.google.com/file/d/1Rw_rKu8OyxG6RLErHA2lhYzthv9hL87D/view?usp=drivesdk",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Google Android Developer",
      issuer: "Google",
      date: "2024",
      description: "Android development certification covering mobile app development with Google technologies",
      skills: ["Android", "Kotlin", "Java", "Mobile Development"],
      link: "https://drive.google.com/file/d/121ZKLKwmk2bwUtL7waibGzxkvDV9rCI7/view?usp=drivesdk",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            Continuous learning through professional certifications and specialized courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  <CardTitle className="font-poppins text-sm">{cert.title}</CardTitle>
                </div>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="font-poppins text-xs">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                
                <a href={cert.link} className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm">
                  View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;