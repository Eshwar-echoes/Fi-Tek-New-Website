"use client";

import { Container } from "../layout/Container";

// Define or import the type from a shared types file if available
export interface ContactPageContent {
  heading: string;
  description?: string;
  address: string;
  email: string;
  phone: string;
  backgroundImage?: string;
  form: {
    nameLabel: string;
    namePlaceholder?: string;
    emailLabel: string;
    emailPlaceholder?: string;
    messageLabel: string;
    messagePlaceholder?: string;
    submitLabel: string;
  };
}
import { SectionReveal } from "@/components/motion/SectionReveal";

interface ContactSectionProps {
  data: ContactPageContent;
}

export function ContactSection({
  data,
}: Readonly<ContactSectionProps>) {
  return (
    <SectionReveal>
      <section className="py-24 bg-(--surface-base)">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-96">
            {/* Left Panel: Image or Neutral Background */}
            <div
              className="hidden lg:block aspect-square lg:aspect-auto bg-(--surface-muted)"
              style={
                data.backgroundImage
                  ? {
                      backgroundImage: `url(${data.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            />

            {/* Right Panel: Contact Details + Form */}
            <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-16 bg-(--surface-base) lg:border-l lg:border-(--border-subtle)">
              <div className="max-w-md space-y-12">
                {/* Section Header */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
                    {data.heading}
                  </h2>
                  {data.description && (
                    <p className="text-lg text-(--text-secondary) leading-relaxed">
                      {data.description}
                    </p>
                  )}
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wide mb-2">
                      Address
                    </p>
                    <p className="text-base text-(--text-black)">{data.address}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wide mb-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-base text-(--text-black) hover:text-(--text-primary) transition-colors duration-200"
                    >
                      {data.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-(--text-secondary) uppercase tracking-wide mb-2">
                      Phone
                    </p>
                    <a
                      href={`tel:${data.phone}`}
                      className="text-base text-(--text-black) hover:text-(--text-primary) transition-colors duration-200"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 pt-8 border-t border-(--border-strong)">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-(--text-primary)"
                    >
                      {data.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={data.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-(--border-strong) rounded text-(--text-black) placeholder-(--text-secondary) focus:outline-none focus:border-(--text-primary) focus:ring-1 focus:ring-(--text-primary) transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-(--text-primary)"
                    >
                      {data.form.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={data.form.emailPlaceholder}
                      className="w-full px-4 py-3 border border-(--border-subtle) rounded text-(--text-black) placeholder-(--text-secondary) focus:outline-none focus:border-(--text-primary) focus:ring-1 focus:ring-(--text-primary) transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-(--text-primary)"
                    >
                      {data.form.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder={data.form.messagePlaceholder}
                      rows={4}
                      className="w-full px-4 py-3 border border-(--border-strong) rounded text-(--text-black) placeholder-(--text-secondary) focus:outline-none focus:border-(--text-primary) focus:ring-1 focus:ring-(--text-primary) transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-2 bg-(--surface-black) text-(--text-inverse) font-medium text-base rounded hover:bg-(--surface-alt) transition-colors duration-200"
                  >
                    {data.form.submitLabel}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Mobile Image (stacks above on mobile) */}
          <div
            className="lg:hidden aspect-video rounded-lg overflow-hidden bg-(--surface-muted) mb-8"
            style={
              data.backgroundImage
                ? {
                    backgroundImage: `url(${data.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          />
        </Container>
      </section>
    </SectionReveal>
  );
}
