
import { Search } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" className="section-padding bg-slate-50 dark:bg-gray-800 pt-0">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="mission-title" className="text-3xl md:text-4xl font-bold text-serif-blue dark:text-white mb-4 py-[30px]">Serif's Mission</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Driving better decisions with the best data enhancing Transparency Through Technology. 
              Our mission is to make government data not just accessible, but truly useful through AI-powered analysis.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We believe that accurate, accessible government information is essential for a functioning 
              democracy and informed citizenry.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-64 rounded-full overflow-hidden bg-gradient-to-br from-serif-blue to-serif-teal p-10 flex items-center justify-center">
              <Search size={80} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
