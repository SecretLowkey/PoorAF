import React from 'react';
import { Quote, Star, MessageCircle, Twitter } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Being part of the $PoorAF community from day one has been incredible! We've built something real from the ashes of abandonment. This is true community power in action.",
      author: "@PoorAFHolder",
      platform: "twitter",
      role: "Community Member"
    },
    {
      text: "1 billion tokens in community hands shows real decentralization. As someone who's been rugged before, $PoorAF gives me hope that we can build something better.",
      author: "@CommunityBuilder",
      platform: "telegram", 
      role: "Early Adopter"
    },
    {
      text: "From pocket lint to potential millions. The $PoorAF story resonates with everyone who's ever been left behind. We're not just buying a token, we're joining a movement.",
      author: "@ChadRevenge",
      platform: "twitter",
      role: "Believer"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold cartoon-font text-dark-brown mb-8">
            What The <span className="text-warm-gold">Community</span> Says
          </h2>
          <p className="text-xl text-slate-blue body-font max-w-3xl mx-auto">
            Real voices from real people who refuse to stay poor AF. Join thousands who are building the future together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-dark-brown" />
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-warm-gold fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-dark-brown/90 body-font leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-warm-gold/20">
                <div>
                  <div className="font-semibold text-dark-brown body-font">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-blue body-font">
                    {testimonial.role}
                  </div>
                </div>
                <div className="w-8 h-8 bg-slate-blue/20 rounded-full flex items-center justify-center">
                  {testimonial.platform === 'twitter' ? (
                    <Twitter className="w-4 h-4 text-slate-blue" />
                  ) : (
                    <MessageCircle className="w-4 h-4 text-slate-blue" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="card text-center bg-gradient-to-br from-warm-gold/10 to-warm-gold/5">
            <div className="text-4xl font-bold cartoon-font text-warm-gold mb-2">
              1B+
            </div>
            <div className="text-dark-brown/70 body-font">Community Owned</div>
          </div>
          <div className="card text-center bg-gradient-to-br from-slate-blue/10 to-slate-blue/5">
            <div className="text-4xl font-bold cartoon-font text-slate-blue mb-2">
              0%
            </div>
            <div className="text-dark-brown/70 body-font">Taxes</div>
          </div>
          <div className="card text-center bg-gradient-to-br from-green-500/10 to-green-500/5">
            <div className="text-4xl font-bold cartoon-font text-green-600 mb-2">
              100%
            </div>
            <div className="text-dark-brown/70 body-font">Community</div>
          </div>
          <div className="card text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
            <div className="text-4xl font-bold cartoon-font text-purple-600 mb-2">
              ∞
            </div>
            <div className="text-dark-brown/70 body-font">Potential</div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-blue/5 to-slate-blue/10">
          <h3 className="text-3xl font-bold cartoon-font text-dark-brown mb-6">
            Join Our Growing Community
          </h3>
          <p className="text-xl text-dark-brown/80 body-font mb-8">
            Be part of the comeback story of the year. Connect with thousands of community members who refuse to stay poor AF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/pooraf_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Twitter size={20} />
              Follow on X
            </a>
            <a
              href="https://t.me/poorafsol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={20} />
              Join Telegram
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 80px 0; background-color: var(--light-beige); }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .grid { display: grid; gap: 32px; }
        .card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px var(--shadow-light);
          border: 1px solid rgba(242, 201, 76, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .text-dark-brown { color: var(--dark-brown); }
        .text-slate-blue { color: var(--slate-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .bg-warm-gold { background-color: var(--warm-gold); }
        .border-warm-gold { border-color: var(--warm-gold); }
        .cartoon-font { font-family: 'Comic Neue', cursive; font-weight: 700; }
        .body-font { font-family: 'Inter', sans-serif; }
        .btn-primary {
          background: linear-gradient(135deg, var(--slate-blue), #4a7c8a);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 15px var(--shadow-light);
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--shadow-medium);
        }
        .btn-secondary {
          background: transparent;
          color: var(--slate-blue);
          border: 2px solid var(--slate-blue);
          padding: 12px 30px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background-color: var(--slate-blue);
          color: var(--white);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .grid { gap: 24px; }
          .card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;