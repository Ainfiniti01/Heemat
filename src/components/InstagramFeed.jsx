import { Instagram, Heart, MessageCircle } from "lucide-react";

export default function InstagramFeed() {

  return (
    <section
      className="py-16 md:py-24 px-6 bg-[#FAFAFA] bg-gradient-to-r from-red-400 to-red-200 dark:bg-gray-900"
      style={{
        fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Instagram size={16} />
            @Heemat'sWigs
          </div>
          <h2
            className="text-black dark:text-white font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Wig Style Inspiration
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6 ">
            Follow us on Instagram for daily wig style inspiration, behind-the-scenes content, and exclusive previews.
          </p>
          {/* <a
            href="https://instagram.com/Heemat'sWigs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            <Instagram size={20} />
            Follow Us
          </a> */}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#E9EBF0] dark:border-[#333333] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Instagram size={32} className="text-white" />
              </div>
              <h3
                className="text-black dark:text-white font-bold text-2xl mb-2"
                style={{
                  fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                Join Our Community
              </h3>
              <p className="text-[#7B7B7B] dark:text-[#A0A0A0] mb-6">
                Get exclusive access to new arrivals, styling tips, and behind-the-scenes content. 
                Tag us in your photos for a chance to be featured!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://instagram.com/Heemat'sWigs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Instagram size={20} />
                Follow @Heemat'sWigs
              </a>
              <button className="inline-flex items-center gap-2 bg-transparent border-2 border-[#ff00b3] text-[#ff00b3] hover:bg-[#ff00b3] hover:text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <span className="text-xl">#</span>
                #HeematWigsStyle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
