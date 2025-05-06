import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, FileText, CheckCircle, Layers } from "lucide-react";
const AboutSection = () => {
  const features = [{
    icon: <MessageCircle className="h-6 w-6 text-serif-teal" />,
    title: "AI Chatbot",
    description: "Intelligent chatbot that understands natural language and quickly searches for up-to-date information from official public sources (e.g. Official Gazette, circulars, accounting documents, speeches in Parliament)."
  }, {
    icon: <FileText className="h-6 w-6 text-serif-teal" />,
    title: "Custom Reports",
    description: "Generation of customised reports and documents, with choice of format, font, attachments, priority, and proactive suggestions to enrich content with verified information."
  }, {
    icon: <CheckCircle className="h-6 w-6 text-serif-teal" />,
    title: "Fact Checking",
    description: "Automatic verification of the reliability and correctness of information, with fact-checking on institutional or highly reliable sources."
  }, {
    icon: <Layers className="h-6 w-6 text-serif-teal" />,
    title: "Policy Simulations",
    description: "Analyses and forecasts on political, economic and legal developments, with identification of trends and hypothetical scenarios (what-if evolutionary simulations)."
  }];
  return <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-serif-blue dark:text-white mb-4">Serif's Goals</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">The next step forward is one we'll take with you thanks to our features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="flex flex-col items-start" data-aos="fade-up" data-aos-delay={100 * index}>
              <Card className="w-full h-full card-effect group dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-serif-teal/10 p-3 inline-flex mb-4 group-hover:bg-serif-teal/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-serif-blue dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </div>)}
        </div>

        
      </div>
    </section>;
};
export default AboutSection;