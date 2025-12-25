"use client";

import { useEffect, useMemo, useRef } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  const heroWrapRef = useRef<HTMLDivElement | null>(null);

  // IMPORTANT:
  // We make header/footer "transparent" only on this page by toggling a body class.
  // We also drive header opacity via CSS variables updated on scroll.
  useEffect(() => {
    document.body.classList.add("cs-chrome-transparent");

    // Defaults (top of page: header bg invisible)
    document.documentElement.style.setProperty("--cs-header-bg-opacity", "0");
    document.documentElement.style.setProperty("--cs-header-blur", "0px");

    const heroEl = heroWrapRef.current;
    if (!heroEl) return;

    // We fade the header in only AFTER the hero is mostly scrolled away.
    // These are the only 2 knobs you usually need:
    const START_OFFSET_PX = 40; // delay before fade begins after hero bottom passes
    const FADE_RANGE_PX = 220;  // how long the fade takes

    let rafId: number | null = null;

    const update = () => {
      const rect = heroEl.getBoundingClientRect();
      // rect.bottom is distance from viewport top to hero bottom.
      // When rect.bottom is high (hero visible), opacity should be 0.
      // As rect.bottom passes above the header area, opacity ramps up.
      const trigger = rect.bottom - START_OFFSET_PX;
      const t = 1 - trigger / FADE_RANGE_PX; // normalize
      const clamped = Math.max(0, Math.min(1, t));

      document.documentElement.style.setProperty("--cs-header-bg-opacity", clamped.toFixed(3));
      document.documentElement.style.setProperty("--cs-header-blur", `${Math.round(clamped * 10)}px`);

      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(update);
    };

    // IntersectionObserver just reduces work: only listen to scroll while hero is near viewport.
    const io = new IntersectionObserver(
      (entries) => {
        const isNear = entries.some((e) => e.isIntersecting);
        if (isNear) {
          window.addEventListener("scroll", onScroll, { passive: true });
          window.addEventListener("resize", onScroll);
          onScroll();
        } else {
          // Still update once so it settles at 1 when hero is far away
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
          onScroll();
        }
      },
      { root: null, threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );

    io.observe(heroEl);
    // Initial paint
    onScroll();

    return () => {
      document.body.classList.remove("cs-chrome-transparent");
      document.documentElement.style.removeProperty("--cs-header-bg-opacity");
      document.documentElement.style.removeProperty("--cs-header-blur");

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, []);

  // ---- How we engage copy controls (edit these to change the blocks) ----
  const engageCopy = useMemo(
    () => ({
      "Speaking Engagements":
        "Put a big topic on the table, make it memorable, and leave leaders with concrete next moves.",
      "CEO and Executive Advisory":
        "Tight thought-partner loops for decisions that matter: what to prioritize, what to stop, and how to win.",
      "Workshop Sessions":
        "High-energy working sessions that turn fuzzy problems into aligned choices and an executable plan.",
      "Full-Time Teams, leveraging proven independent consultants":
        "Embedded horsepower—senior talent that ships outcomes fast without the overhead of a big firm model.",
    }),
    []
  );

  const engageTags = useMemo(
    () => ({
      "Speaking Engagements": ["Inspire & align", "Exec-ready", "Clear takeaways"],
      "CEO and Executive Advisory": ["Decision support", "Priority clarity", "Weekly momentum"],
      "Workshop Sessions": ["Hands-on", "Fast alignment", "Action plan"],
      "Full-Time Teams, leveraging proven independent consultants": ["Embedded talent", "Ship outcomes", "Low overhead"],
    }),
    []
  );

  const leader = siteContent.about.leadership.members[0];

  return (
    <main className="cs-page cs-page--lightToDark cs-about-page">
      <div className="cs-page-canvas cs-about-canvas">
        {/* HERO WRAP for scroll/observer */}
        <div ref={heroWrapRef}>
          <Hero title={siteContent.about.hero.title} image="/images/hero-about.jpg" />
        </div>

        {/* Top seam (matches header as it fades in) */}
        <div className="cs-chrome-seam cs-chrome-seam--top" aria-hidden="true" />

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="cs-section-head">
                <h2 className="cs-section-title text-white">{siteContent.about.leadership.title}</h2>
                <p className="cs-section-subtitle text-white/75">
                  Operator-grade perspective, board-ready clarity, and a bias toward action.
                </p>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
                {/* Photo */}
                <div className="relative mx-auto md:mx-0 w-full max-w-md">
                  <div className="cs-float-shape cs-float-shape--a" aria-hidden="true" />
                  <div className="cs-float-shape cs-float-shape--b" aria-hidden="true" />

                  <div className="cs-about-photo group">
                    <div className="cs-about-photoGlow" aria-hidden="true" />
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[22px]">
                      <Image
                        src="/images/fullshot.png"
                        alt={leader.name}
                        fill
                        className="object-cover cs-about-photoImg"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className="cs-card cs-card--soft">
                  <div className="cs-card-inner">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-3xl lg:text-4xl font-semibold text-white">{leader.name}</h3>
                      <p className="text-lg text-white/75">{leader.title}</p>
                      <p className="text-base font-semibold text-white/90">{leader.company}</p>
                    </div>

                    <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                      <p className="text-base font-medium text-white">{leader.bio}</p>
                      {leader.extended.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-7">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-link-inline"
                      >
                        <span>View LinkedIn Profile</span>
                        <ExternalLink size={18} className="cs-link-inlineIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Engage */}
              <div className="mt-20">
                <div className="cs-section-head">
                  <h2 className="cs-section-title text-white">{siteContent.about.engagement.title}</h2>
                  <p className="cs-section-subtitle text-white/75">
                    Less “big reveal,” more momentum. Here’s how we keep work crisp, collaborative, and high-impact.
                  </p>
                </div>

                <div className="mt-10 cs-engage">
                  <div className="cs-engage-line" aria-hidden="true" />

                  <div className="grid md:grid-cols-2 gap-6">
                    {siteContent.about.engagement.methods.map((method, index) => {
                      const blurb =
                        (engageCopy as Record<string, string>)[method] ??
                        "Clear steps, tight feedback loops, and steady progress—no drama, just results.";
                      const tags =
                        (engageTags as Record<string, string[]>)[method] ??
                        ["Fast alignment", "Clear owners", "Measurable progress"];

                      return (
                        <div key={method} className="cs-engage-card cs-card cs-card--hover">
                          <div className="cs-card-inner">
                            <div className="flex items-start gap-4">
                              <div className="cs-step">
                                <div className="cs-step-badge">{index + 1}</div>
                              </div>

                              <div className="min-w-0">
                                <h3 className="text-xl font-semibold text-white">{method}</h3>
                                <p className="mt-2 text-sm text-white/70">{blurb}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {tags.map((tag) => (
                                    <span key={tag} className="cs-pill">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cs-cardGlow" aria-hidden="true" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pre-footer CTA intentionally removed */}
                <div className="mt-12 text-sm text-white/60">
                  Want to keep exploring?{" "}
                  <a
                    href="/insights"
                    className="text-white/80 hover:text-white underline underline-offset-4 transition"
                  >
                    Browse Insights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom seam (matches footer gradient) */}
        <div className="cs-chrome-seam cs-chrome-seam--bottom" aria-hidden="true" />
      </div>
    </main>
  );
}
