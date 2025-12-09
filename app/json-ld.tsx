export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nipun Lakshitha",
    url: "https://nipunlakshitha.com",
    sameAs: [
      "https://github.com/nipunlnick",
      "https://linkedin.com/in/pvnipunlakshitha",
      "https://twitter.com/nipunlnick",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
