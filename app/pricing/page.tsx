
export default function PricingPage() {
  const plans = [
    {
      name: "Mobility Plan",
      price: "₹2300",
      duration: "10 Days",
      features: [
        "Targeted therapy plan",
        "10 Physiotherapy sessions",
        "45 minutes each",
        "Home exercise guidance",
      ],
    },
    {
      name: "Rehabilitation Plan",
      price: "₹6000",
      duration: "30 Days",
      features: [
        "Consultation free",
        "Pateint history mapping",
        "Targeted therapy plan",
        "Phone & email support",
      ],
      highlighted: true, // 👈 middle plan highlighted
    },
    {
      name: "Physio At Home",
      price: "₹500",
      duration: "per session",
      features: [
        "Consultation free",
        "Customised therapy plan",
        "45 minutes session",
        "Phone Assistance for chronic patients",
      ],
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#f8f7f5] py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-libertinus text-gray-900 mb-4">
          Pricing Plans
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your needs and start your journey to better
          health with Advika Physiotherapy Clinic.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-md p-8 text-center transition transform hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted ? "border-4 border-[#6d7a5d]" : ""
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-bold text-[#6d7a5d] mb-2">
                {plan.price}
              </p>
              <p className="text-gray-500 mb-6">{plan.duration}</p>

              {/* Features */}
              <ul className="space-y-3 text-gray-700 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-600 font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/booking"
                className={`block px-6 py-3 rounded-full font-medium transition ${
                  plan.highlighted
                    ? "bg-[#6d7a5d] text-white hover:bg-[#5a6953]"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                Get Started
              </a>

              {/* Popular Badge */}
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6d7a5d] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
