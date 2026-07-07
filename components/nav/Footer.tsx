import { Heart, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-paper/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-cream-paper">
              {site.shortName}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-paper/60">
              {site.description}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-moss-light">
              <Heart size={14} className="fill-current" />
              {site.rating} &middot; {site.ratingSource}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-paper/50">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm transition-colors hover:text-cream-paper"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-paper/50">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-cream-paper"
              >
                <Phone size={14} />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-cream-paper"
              >
                <Mail size={14} />
                {site.email}
              </a>
              <a
                href={site.location.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-cream-paper"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  {site.address.line}
                  <br />
                  {site.address.area}, {site.address.region}
                  <br />
                  {site.address.country}
                </span>
                <ArrowUpRight size={12} className="shrink-0" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-moss px-4 py-2 text-sm font-medium text-cream-paper transition-colors hover:bg-moss-dark"
              >
                Message on WhatsApp
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-paper/10 pt-8 text-center text-xs text-cream-paper/40">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved. &middot; Made with care in Munnar.
        </div>
      </div>
    </footer>
  );
}
