import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  // Custom Twitter/X Icon Component
  const TwitterIcon = ({ size = 24, className = "" }) => (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="currentColor" 
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chandavoluchaitanya@gmail.com',
      href: 'mailto:chandavoluchaitanya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7569248607',
      href: 'tel:+917569248607'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/chandavolunagachaitanya',
      href: 'https://www.linkedin.com/in/chandavolunagachaitanya'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Nagachaitanya28',
      href: 'https://github.com/Nagachaitanya28'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@__.c_n_c.__',
      href: 'https://www.instagram.com/__.c_n_c.__/'
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      value: '@NAGACHA40848971',
      href: 'https://x.com/NAGACHA40848971'
    }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="font-poppins text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group animate-fade-in hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  <item.icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">{item.label}</h3>
                <p className="font-poppins text-gray-600 text-sm">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form & Resume Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-fade-in">
            <div className="mb-8">
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
                Send Me a Message
              </h3>
              <p className="font-poppins text-gray-600">
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Your full name"
                    className="border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm font-poppins">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="your.email@example.com"
                    className="border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm font-poppins">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-poppins font-medium text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  placeholder="What would you like to discuss?"
                  className="border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm font-poppins">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="font-poppins font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell me about your project or how I can help you..."
                  rows={5}
                  className="border-gray-200 focus:border-primary focus:ring-primary/20 transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm font-poppins">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 rounded-lg font-poppins font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Resume & Additional Info */}
          <div className="space-y-8 animate-fade-in">
            {/* Resume Download */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">
                  Ready to Work Together?
                </h3>
                <p className="font-poppins text-gray-600 mb-6">
                  Download my resume to learn more about my experience and skills.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-poppins font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1UuheWlCprlyVMFr5QAaORv6f33bg0f9J/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                Quick Response Guaranteed
              </h4>
              <p className="font-poppins text-gray-600 text-sm leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out directly via phone or LinkedIn.
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                What to Expect
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 font-poppins text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Detailed discussion about your project requirements
                </li>
                <li className="flex items-start gap-3 font-poppins text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Timeline and milestone planning
                </li>
                <li className="flex items-start gap-3 font-poppins text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  Transparent communication throughout the project
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;