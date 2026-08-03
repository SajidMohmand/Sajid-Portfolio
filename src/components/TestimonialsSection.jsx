import { Star } from "lucide-react";

const stats = [
  {
    value: "5+",
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
    name: "John",
    country: "USA 🇺🇸",
    rating: 5,
    review:
      "Outstanding Flutter developer. Delivered exactly what I wanted and communication was excellent throughout the project.",
  },
  {
    name: "Ahmed",
    country: "Saudi Arabia 🇸🇦",
    rating: 5,
    review:
      "Very professional and highly skilled. Solved difficult issues quickly and delivered before the deadline.",
  },
  {
    name: "Kevin",
    country: "Malaysia 🇲🇾",
    rating: 5,
    review:
      "Excellent experience. Clean code, fast delivery, and great attention to detail. Highly recommended.",
  },
  {
    name: "Rahul",
    country: "India 🇮🇳",
    rating: 5,
    review:
      "Fantastic developer. Understood the requirements perfectly and exceeded expectations.",
  },
  {
    name: "Arif",
    country: "Bangladesh 🇧🇩",
    rating: 5,
    review:
      "Professional communication and high-quality Flutter development. Will definitely hire again.",
  },
  {
    name: "Leo",
    country: "China 🇨🇳",
    rating: 5,
    review:
      "Very knowledgeable developer. Delivered a polished application with excellent performance.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Client <span className="text-primary">Success</span>
        </h2>

        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          I've worked with international clients to build high-quality mobile
          and backend solutions, delivering reliable applications and long-term
          business value.
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

              <p className="text-muted-foreground mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Infinite Slider */}

        <div className="relative">

          <div className="flex gap-6 animate-marquee w-max">

            {[...testimonials, ...testimonials].map((item, index) => (

              <div
                key={index}
                className="w-[360px] shrink-0 bg-card border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
              >

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#facc15"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-7">
                  "{item.review}"
                </p>

                <div className="mt-6">

                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.country}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
