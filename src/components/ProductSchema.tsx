export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "CasedUp Custom Phone Case",
    image: "https://www.casedup.store/og.png",
    description:
      "Premium quality custom phone cases with your personal photos. Durable, stylish protection for iPhone and Samsung models.",
    brand: {
      "@type": "Brand",
      name: "CasedUp",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.casedup.store/configure/upload",
      priceCurrency: "USD",
      price: "29.99",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
