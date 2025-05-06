
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "tTgQA6D5gMLCdBaDC",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    if (formRef.current) {
      emailjs.sendForm('service_nxdvcml', 'contact_form', formRef.current)
        .then(() => {
          toast({
            title: "Message Sent!",
            description: "We've received your message and will respond shortly.",
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error('FAILED...', error);
          toast({
            title: "Error Sending Message",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive"
          });
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-serif-blue dark:text-white mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have questions or interested in learning more about our services? 
            Get in touch with us and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex space-x-4 items-start">
                <div className="bg-serif-teal/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-serif-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-serif-blue dark:text-white mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">For general inquiries:</p>
                  <a href="mailto:info@serifai.eu" className="text-serif-teal hover:underline">info@serifai.eu</a>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex space-x-4 items-start">
                <div className="bg-serif-teal/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-serif-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-serif-blue dark:text-white mb-1">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Based in Milan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form 
              ref={formRef}
              id="contact-form"
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-serif-blue dark:text-white">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-serif-blue hover:bg-serif-blue/90 dark:bg-serif-teal dark:hover:bg-serif-teal/90"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
