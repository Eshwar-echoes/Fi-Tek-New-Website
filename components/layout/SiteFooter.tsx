import { Container } from "./Container";
import { brand, footer } from "@/content/global/brand";
 
export function SiteFooter() {
  return (
    <footer className="bg-(--surface-footer) text-(--text-inverse)">
      <Container>
        <div className="py-20 flex flex-col md:flex-row justify-between gap-12">
 
          {/* LEFT: Logo + Description */}
          <div className="max-w-xl space-y-4">
            <img
              src={brand.logo.src}
              alt={brand.logo.alt}
              className="h-12 w-auto"
            />
 
            <p className="text-sm text-(--text-muted) leading-relaxed">
              {footer.description}
            </p>
          </div>
 
          {/* RIGHT: Contact Info */}
          <div className="text-sm text-(--text-muted) space-y-2">
            <h2 className="font-semibold text-(--text-inverse) m-0 p-0">Contact us</h2>
            <p>{footer.contact.company}</p>
            <p>{footer.contact.address}</p>
            <p>Tel: {footer.contact.phone}</p>
            <p>Fax: {footer.contact.fax}</p>
          </div>
 
        </div>
 
        {/* Bottom line */}
        <div className="pb-12 text-xs text-(--text-muted)">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
}