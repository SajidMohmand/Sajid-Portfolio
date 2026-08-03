import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

const stats = [
  {
    value: "1+",
    label: "Years Experience",
  },
  {
    value: "12+",
    label: "Projects Delivered",
  },
  {
    value: "6",
    label: "Countries Served",
  },
  {
    value: "246+",
    label: "LeetCode Problems",
  },
];

const testimonials = [
  {
    name: "draya123",
    country: "USA 🇺🇸",
    rating: 5,
    review: "Well done, working on another project with him.",
  },
  {
    name: "ennnga",
    country: "Saudi Arabia 🇸🇦",
    rating: 5,
    review:
      "He is professional in his work and very helpful, I definitely work with him again and again... I recommend him",
  },
  {
    name: "jannet_00",
    country: "Malaysia 🇲🇾",
    rating: 5,
    review:
      "It was an exceptional experience. Extremely patient and polite, with amazing response timing and never disappointing. Always eager to understand the requirements and always doing level best to reach them as well as delivering in amazing speed as well. Will recommend to everyone definitely and would love to work again as well.",
  },
  {
    name: "Gaurav V",
    country: "India 🇮🇳",
    rating: 5,
    review: "Good resource",
  },
  {
    name: "banglatiger",
    country: "Bangladesh 🇧🇩",
    rating: 5,
    review:
      "Great work, very professional and delivered exactly as promised. Highly recommended!",
  },
  {
    name: "Arnaud V.",
    country: "Belgium 🇧🇪",
    rating: 5,
    review: `I have never had such a great collaboration with anyone on Fiverr. He developed in a very short time an app with hard requirements that dove into the external system level of Android.

Sajid exceeded my expectations! From the very beginning he kept me updated on the progress proactively, explained everything clearly, and made sure I was happy at each step. The app works perfectly, required zero revisions and is exactly as I hoped for.

What I appreciated most is how easy it was to communicate with him. He is professional and fast. I also love that he suggested some extra ideas to make the app even better in the future. I'll come back for sure.

These are the sort of people who make Fiverr amazing.`,
  },
  {
    name: "banglatiger",
    country: "Bangladesh 🇧🇩",
    rating: 5,
    review: "Good Job. Looking forward to work with him again!",
  },
  {
    name: "draya123",
    country: "USA 🇺🇸",
    rating: 5,
    review: "Thanks for the apps",
  },
  {
    name: "allaboutaryan",
    country: "India 🇮🇳",
    rating: 5,
    review:
      "great work , he is always there to help me out if there any fixes he did that too and very cooperative guy .",
  },
  {
    name: "banglatiger",
    country: "Bangladesh 🇧🇩",
    rating: 5,
    review: "Great job. recommended for android app.",
  },
  {
    name: "moawes",
    country: "India 🇮🇳",
    rating: 5,
    review: "very good work,he is patient and aware what you wants.",
  },
];

export const TestimonialsSection = () => {
  const [activeReview, setActiveReview] = useState(null);

  // Lock body scroll + support Escape-to-close while the zoom modal is open
  useEffect(() => {
    if (!activeReview) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveReview(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeReview]);

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Client <span className="text-primary">Success</span>
        </h2>

        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          I've worked with international clients to build high-quality mobile
          and backend solutions, delivering reliable applications and
          long-term business value.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 mb-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-card border rounded-xl p-6 text-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-primary">
                {item.value}
              </h3>
              <p className="text-muted-foreground mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Infinite Slider */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((item, index) => {
              // Only show the "read more" affordance when the text is
              // actually long enough to get clamped.
              const isLong = item.review.length > 160;

              return (
                <div
                  key={index}
                  onClick={() => setActiveReview(item)}
                  className="w-[360px] h-[280px] shrink-0 bg-card border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-4 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#facc15"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-7 line-clamp-5 flex-1">
                    "{item.review}"
                  </p>

                  {isLong && (
                    <span className="text-primary text-sm font-medium mt-2 shrink-0">
                      Read more
                    </span>
                  )}

                  <div className="mt-4 shrink-0">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.country}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Zoom modal for full review */}
      {activeReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="relative bg-card w-full max-w-lg max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveReview(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 bg-black/10 hover:bg-black/20 text-foreground rounded-full p-2 transition-colors duration-200"
            >
              <X size={18} />
            </button>

            <div className="p-8 overflow-y-auto text-left">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="#facc15"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-7 whitespace-pre-line">
                "{activeReview.review}"
              </p>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold">{activeReview.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {activeReview.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
