import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "STS Beauty Mastery Workshop",
    date: "25 July 2026",
    time: "2:00 PM",
    location: "Islamabad Center",
    tag: "Beauty",
  },
  {
    title: "Wealth Creation Seminar",
    date: "10 August 2026",
    time: "3:00 PM",
    location: "Rawalpindi Hall",
    tag: "Wealth",
  },
];

export default function Seminars() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fcfaf5]" />

      {/* Luxury Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#e6b13a]/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#800000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center rounded-full bg-[#800000]/10 px-4 py-2 text-xs font-medium text-[#800000]">
            Events & Seminars
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Upcoming <span className="text-primary">Seminars</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground">
            Join our exclusive training sessions, business workshops and
            leadership events designed to accelerate your personal and
            professional growth.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="group min-w-0 rounded-3xl border border-border bg-white/70 backdrop-blur p-5 md:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
            >
              {/* TOP */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="rounded-full bg-[#fadd67]/70 px-3 py-1 text-xs font-medium text-[#9a6c18]">
                  {event.tag}
                </span>

                <span className="rounded-full bg-[#800000]/10 px-3 py-1 text-xs font-medium text-[#800000]">
                  Upcoming Event
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold leading-snug mb-5 transition-colors group-hover:text-primary">
                {event.title}
              </h3>

              {/* DETAILS */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 min-w-0">
                  <CalendarDays className="h-4 w-4 text-[#800000] shrink-0 mt-0.5" />
                  <span className="text-muted-foreground break-words">
                    {event.date}
                  </span>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground break-words">
                    {event.time}
                  </span>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <MapPin className="h-4 w-4 text-[#800000] shrink-0 mt-0.5" />
                  <span className="text-muted-foreground break-words">
                    {event.location}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full mt-6 bg-gradient-primary text-white hover:opacity-90">
                Register Now
              </Button>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="flex justify-center mt-12 lg:mt-14">
          <Button
            variant="outline"
            className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
