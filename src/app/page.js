'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Event date - set to (adjust as needed)
    const eventDate = new Date('2025-09-15T09:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "What makes GoonHacks different from other hackathons?",
      answer: "We embrace the unconventional! While traditional hackathons focus on typical tech solutions, we encourage projects that tackle taboo subjects, explore controversial topics responsibly, and think outside the box."
    },
    {
      question: "What are some example prize categories?",
      answer: "Beyond traditional categories, we have prizes for 'Most Social Media Growth During Event', 'Most Controversial Yet Constructive', 'Best Meme Integration', and 'Most Likely to Get You Cancelled (But Shouldn't)'."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for unconventional thinking! Whether you're a developer, designer, marketer, or just someone with wild ideas, you're welcome."
    },
    {
      question: "What should I build?",
      answer: "Anything that challenges norms! Apps addressing social taboos, platforms for difficult conversations, tools for underrepresented communities, or anything that makes people think differently."
    },
    {
      question: "Is this event appropriate/safe?",
      answer: "Absolutely! While we encourage unconventional thinking, we maintain strict guidelines against harmful content. Think provocative but constructive, edgy but respectful."
    }
  ];

  const sponsors = [
    { name: "Discord", tier: "Platinum" },
    { name: "Replit", tier: "Gold" },
    { name: "GitHub", tier: "Gold" },
    { name: "Vercel", tier: "Silver" },
    { name: "MongoDB", tier: "Silver" },
    { name: "Auth0", tier: "Bronze" }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--main)]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[var(--highlight)] rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-[var(--highlight)] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--highlight)] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-[var(--main)] via-[var(--highlight)] to-[var(--main)] bg-clip-text text-transparent">
            GOON<br />HACKS
          </h1>
          <p className="text-xl md:text-2xl text-[var(--secondary-light)] mb-8 leading-relaxed">
            The hackathon for the <span className="text-[var(--highlight)] font-bold">unconventional</span>.<br />
            Where taboo meets tech, and controversy sparks innovation.
          </p>
          <p className="text-lg text-[var(--secondary-light)] mb-12 max-w-2xl mx-auto">
            Break the rules. Challenge the norms. Build something that makes people think twice. 
            This isn&apos;t your typical hackathon – we&apos;re here to tackle the topics others won&apos;t touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[var(--highlight)] text-[var(--background)] font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-[var(--highlight)] text-[var(--highlight)] font-bold text-lg rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--background)] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 bg-[var(--secondary-dark)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--highlight)]">
            Event Countdown
          </h2>
          <p className="text-xl text-[var(--secondary-light)] mb-12">
            November 15-17, 2025 • Location TBA
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-[var(--background)] p-6 rounded-xl border border-[var(--secondary-dark)]">
                <div className="text-4xl md:text-5xl font-black text-[var(--highlight)] mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-[var(--secondary-light)] uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--highlight)]">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-[var(--secondary-light)] mb-16">
            Companies brave enough to support unconventional innovation
          </p>
          
          <div className="space-y-12">
            {/* Platinum Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[var(--main)]">Platinum</h3>
              <div className="flex justify-center">
                <div className="bg-[var(--secondary-dark)] p-8 rounded-xl border-2 border-[var(--highlight)]">
                  <div className="text-3xl font-bold text-[var(--highlight)]">Discord</div>
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[var(--main)]">Gold</h3>
              <div className="flex justify-center gap-8 flex-wrap">
                {sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                  <div key={index} className="bg-[var(--secondary-dark)] p-6 rounded-xl border border-[var(--highlight)]">
                    <div className="text-2xl font-bold text-[var(--highlight)]">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver & Bronze */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-[var(--main)]">Silver & Bronze</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                {sponsors.filter(s => s.tier === 'Silver' || s.tier === 'Bronze').map((sponsor, index) => (
                  <div key={index} className="bg-[var(--secondary-dark)] p-4 rounded-lg">
                    <div className="text-lg font-semibold text-[var(--secondary-light)]">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <button className="px-8 py-4 border-2 border-[var(--highlight)] text-[var(--highlight)] font-bold rounded-lg hover:bg-[var(--highlight)] hover:text-[var(--background)] transition-all duration-300">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[var(--secondary-dark)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[var(--highlight)]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--secondary-light)] mb-16 text-center">
            Everything you need to know about this unconventional event
          </p>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[var(--background)] rounded-xl p-6 border border-[var(--secondary-dark)]">
                <h3 className="text-xl font-bold mb-4 text-[var(--highlight)]">
                  {faq.question}
                </h3>
                <p className="text-[var(--secondary-light)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-[var(--secondary-light)] mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <button className="px-8 py-4 bg-[var(--highlight)] text-[var(--background)] font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[var(--secondary-dark)]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-[var(--highlight)]">GOON HACKS</h3>
          <p className="text-[var(--secondary-light)] mb-6">
            Breaking boundaries, one unconventional hack at a time.
          </p>
          <div className="flex justify-center gap-8 text-[var(--secondary-light)]">
            <a href="#" className="hover:text-[var(--highlight)] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[var(--highlight)] transition-colors">Discord</a>
            <a href="#" className="hover:text-[var(--highlight)] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[var(--highlight)] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
