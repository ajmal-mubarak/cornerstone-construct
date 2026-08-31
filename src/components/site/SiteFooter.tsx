export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold uppercase tracking-wide">
            Terrestrial Contracting W.L.L.
          </p>
          <p className="mt-3 max-w-sm text-sm text-surface-foreground/70">
            A Qatar-based electromechanical and civil contracting firm delivering integrated
            construction, trading and project support solutions since 2014.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/75">
            <li>Civil Contracting</li>
            <li>MEP &amp; Electrical Systems</li>
            <li>Interior Fit-Out (Turnkey)</li>
            <li>Manpower Supply</li>
            <li>Facility Management</li>
            <li>General Trading &amp; Supply</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-surface-foreground/75">
            <li>P.O. Box 35371, Doha, Qatar</li>
            <li>
              Tel:{" "}
              <a className="hover:text-accent" href="tel:+97441464546">
                4146 4546
              </a>{" "}
              · Mob:{" "}
              <a className="hover:text-accent" href="tel:+97430245384">
                3024 5384
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="mailto:info@terrestrialqatar.com">
                info@terrestrialqatar.com
              </a>
            </li>
            <li>C.R. No. 65663</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-surface-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Terrestrial Contracting W.L.L. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
