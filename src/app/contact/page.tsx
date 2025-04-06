export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <h1 className="text-4xl font-serif text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        This page is under construction. Check back soon for a form to get in touch and request a consultation.
      </p>
      <div className="mt-6">
        <p className="text-lg font-medium">For now, you can reach us at:</p>
        <p className="mt-2">Email: <a href="mailto:suzy@brambleandbay.co.uk" className="text-primary hover:text-secondary">suzy@brambleandbay.co.uk</a></p>
        <p className="mt-1">Phone: <a href="tel:07490934251" className="text-primary hover:text-secondary">07490 934251</a></p>
      </div>
    </div>
  );
} 