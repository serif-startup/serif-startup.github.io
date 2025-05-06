
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:py-36 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-serif-teal/10 text-serif-teal dark:bg-serif-teal/20 dark:text-serif-teal animate-fade-in">
              <span className="mr-1">✨</span> Transforming Italian public data
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-serif-blue dark:text-white leading-tight animate-fade-in">
              Political knowledge at <span className="text-serif-teal">chat time</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 md:text-xl animate-fade-in">
              Your needs matter! Share your opinion and help us revolutionise access to political information by building a tailor-made platform for professionals and citizens. Fill in the survey below, it only takes a couple of minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Button asChild size="lg" className="bg-serif-blue hover:bg-serif-blue/90 text-white">
                <a href="#about">Learn More</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-serif-teal text-serif-teal hover:bg-serif-teal/10 dark:border-serif-teal dark:text-serif-teal dark:hover:bg-serif-teal/20 dark:bg-gray-700/50">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe87e569hyTGlgu5EsJzcgSbebtvBSSo3EmoAQm12WIaojcuA/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Take our Survey
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative animate-float">
            <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 rounded-full bg-serif-blue/5 dark:bg-serif-blue/10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-serif-blue/10 dark:bg-serif-blue/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search size={120} className="text-serif-blue/80 dark:text-serif-blue/90" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-float">
                <div className="text-sm font-bold dark:text-white">Real-time Analytics</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-float" style={{
                animationDelay: '1s'
              }}>
                <div className="text-sm font-bold dark:text-white">AI Chatbots</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-float" style={{
                animationDelay: '2s'
              }}>
                <div className="text-sm font-bold dark:text-white">Policy Simulations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-serif-teal/10 dark:bg-serif-teal/20 rounded-full -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-serif-orange/10 dark:bg-serif-orange/20 rounded-full -z-10"></div>
    </section>
  );
};

export default HeroSection;
