import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import gatheringImage from './assets/gathering.jpg'
import heroImage from './assets/hero.jpg'
import suppliesImage from './assets/supplies.jpg'
import suppliesDetailImage from './assets/supplies3.jpg'
import tableImage from './assets/table.jpg'
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiMenu,
  FiX,
} from 'react-icons/fi'

const planningMessage = encodeURIComponent(
  "Hello STAXX Hyperkid, I'd like to enquire about planning a children's party.",
)
const suppliesMessage = encodeURIComponent(
  "Hello STAXX Hyperkid, I'd like to enquire about your event supplies.",
)
const planningWhatsApp = `https://wa.me/254780979777?text=${planningMessage}`
const suppliesWhatsApp = `https://wa.me/254780979777?text=${suppliesMessage}`

const photos = {
  hero: heroImage,
  planning: heroImage,
  supplies: suppliesImage,
  gathering: gatheringImage,
  table: tableImage,
}

const navItems = [
  { label: 'Party Planning', href: '#planning' },
  { label: 'Event Supplies', href: '#supplies' },
  { label: 'Celebrations', href: '#celebrations' },
  { label: 'About', href: '#about' },
]

const galleryItems = [
  {
    image: photos.hero,
    filename: 'hero-main.jpg',
    alt: 'Outdoor children’s party with a white inflatable play area and themed balloons',
    caption: 'A little colour goes a long way',
    shape: 'aspect-[4/5]',
  },
  {
    image: photos.gathering,
    filename: 'gathering.jpg',
    alt: 'Outdoor evening celebration with lanterns, string lights, and dining tables',
    caption: 'Gather around something lovely',
    shape: 'aspect-[5/4] lg:mt-28',
  },
  {
    image: photos.supplies,
    filename: 'supplies.jpg',
    alt: 'Event venue setup with presentation equipment and a decorated hall',
    caption: 'The details behind the day',
    shape: 'aspect-[4/5] lg:-mt-14',
  },
  {
    image: photos.table,
    filename: 'table.jpg',
    alt: 'Long celebration table set outdoors beneath warm string lights',
    caption: 'Gather close, celebrate well',
    shape: 'aspect-[5/4] lg:mt-16',
  },
]

const steps = [
  'Tell us what you’re celebrating.',
  'Share your theme and requirements.',
  'Contact us to discuss the details.',
  'Get ready for the celebration.',
]

function Reveal({ children, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Photo({
  src,
  alt,
  filename,
  className = '',
  imageClassName = '',
  priority = false,
}) {
  return (
    src ? (
      <div className={`overflow-hidden ${className}`}>
        <img
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          loading={priority ? 'eager' : 'lazy'}
          src={src}
        />
      </div>
    ) : (
      <div
        aria-label={alt}
        className={`flex items-center justify-center bg-lavender/35 p-4 text-center text-xs text-plum/70 ${className}`}
        role="img"
      >
        Add <code className="mx-1 font-semibold">{filename}</code> to
        <code className="ml-1 font-semibold">src/assets/</code>
      </div>
    )
  )
}

function ArrowLink({ href, children, light = false, external = false }) {
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-between gap-8 border-b pb-3 text-[0.68rem] font-semibold uppercase tracking-editorial transition-colors ${
        light
          ? 'border-cream/50 text-cream hover:border-sunshine hover:text-sunshine'
          : 'border-plum/40 text-plum hover:border-coral hover:text-coral'
      }`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <FiArrowUpRight
        aria-hidden="true"
        className="text-base transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-30 border-b border-plum/15 bg-cream lg:fixed lg:inset-x-0 lg:top-0">
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          className="flex flex-col leading-none"
          href="#top"
          aria-label="STAXX Hyperkid home"
          onClick={closeMenu}
        >
          <span className="font-serif text-[1.35rem] font-bold tracking-[-0.07em]">
            STAXX
          </span>
          <span className="mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.3em]">
            Hyperkid
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              className="text-[0.62rem] font-medium uppercase tracking-[0.13em] transition-colors hover:text-coral"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
          <a
            className="text-[0.62rem] font-medium uppercase tracking-[0.13em] transition-colors hover:text-coral"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <a
          className="hidden items-center gap-3 border border-plum px-4 py-2.5 text-[0.61rem] font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-plum hover:text-cream sm:flex"
          href={planningWhatsApp}
          rel="noreferrer"
          target="_blank"
        >
          Plan a party <FiArrowUpRight aria-hidden="true" />
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center border border-plum/30 text-xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-plum/15 bg-cream px-5 py-5 shadow-sm lg:hidden"
        >
          <div className="mx-auto flex max-w-site flex-col">
            {[...navItems, { label: 'Contact', href: '#contact' }].map((item) => (
              <a
                className="border-b border-plum/10 py-4 text-xs font-semibold uppercase tracking-[0.15em]"
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-5 inline-flex w-fit items-center gap-3 bg-plum px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-editorial text-cream"
              href={planningWhatsApp}
              onClick={closeMenu}
              rel="noreferrer"
              target="_blank"
            >
              Plan a party <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="overflow-hidden bg-cream" id="top">
      <div className="mx-auto max-w-site px-4 pb-5 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <Reveal className="relative">
          <div className="flex items-end justify-between px-1 pb-4 text-[0.57rem] font-medium uppercase tracking-editorial sm:pb-6">
            <span>Thoughtful parties, joyfully made</span>
            <span className="hidden text-right sm:block">Celebrations<br />Made for little people</span>
          </div>
          <div aria-label="STAXX" className="masthead-word select-none font-sans font-bold text-plum">
            STAXX
          </div>
          <div className="flex items-start justify-between px-1 pt-3 sm:pt-5">
            <span className="font-serif text-lg italic sm:text-2xl">Hyperkid</span>
              <span className="max-w-36 text-right text-[0.55rem] leading-relaxed tracking-[0.12em] sm:hidden">
                CELEBRATIONS<br />THOUGHTFULLY MADE
            </span>
            <span className="hidden text-[0.58rem] uppercase tracking-editorial sm:block">
              Celebrations, thoughtfully made
            </span>
          </div>
        </Reveal>

        <Reveal className="relative mt-8 sm:mt-10" delay={0.1}>
          <div className="relative min-h-[430px] sm:min-h-[540px] lg:min-h-[650px]">
            <Photo
              alt="Outdoor children's party with an inflatable play area and themed balloons"
              className="absolute inset-0"
              filename="hero-main.jpg"
              imageClassName="object-[center_52%]"
              priority
              src={photos.hero}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-plum/5" />
            <div className="absolute bottom-6 left-5 right-5 flex flex-col justify-between gap-7 text-cream sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-14 lg:left-14 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.22em] sm:mb-4">
                  Party planning & celebration essentials
                </p>
                <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.4rem]">
                  Little moments.<br />
                  <span className="italic">Big celebrations.</span>
                </h1>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-5 lg:items-end">
                <p className="max-w-xs text-sm leading-relaxed text-cream/90 lg:text-right">
                  Thoughtfully planned celebrations and party essentials, made to
                  feel like them.
                </p>
                <a
                  className="group inline-flex items-center gap-4 bg-cream px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-editorial text-plum transition-colors hover:bg-sunshine"
                  href={planningWhatsApp}
                  rel="noreferrer"
                  target="_blank"
                >
                  Plan a party <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <span className="absolute right-4 top-4 hidden border border-cream/70 px-3 py-2 text-[0.52rem] uppercase tracking-editorial text-cream sm:block">
              A little wonder, right this way
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-7 text-[0.6rem] uppercase tracking-editorial text-plum/70 sm:px-8 lg:px-12">
        <span>Good things are worth celebrating</span>
        <a className="inline-flex items-center gap-2 hover:text-coral" href="#planning">
          Discover our world <FiArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function PlanningSection() {
  return (
    <section className="bg-paper py-20 sm:py-28 lg:py-36" id="planning">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <Reveal className="lg:col-span-5 lg:col-start-2 lg:pt-10">
          <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-editorial text-coral">
            01 / Party planning
          </p>
          <h2 className="max-w-lg font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[5.1rem]">
            A little magic <span className="italic">goes a long way.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-plum/75 sm:text-base">
            From imaginative themes to beautifully styled party spaces, we help
            bring children’s celebrations to life with thoughtful details and
            creative flair.
          </p>
          <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-5 gap-y-4 border-t border-plum/15 pt-5 text-xs leading-relaxed text-plum/80 sm:text-sm">
            <li>Children’s birthdays</li>
            <li>Themed party styling</li>
            <li>Balloon installations</li>
            <li>Dessert table styling</li>
            <li className="col-span-2">Event setup & coordination</li>
          </ul>
          <div className="mt-9 max-w-xs">
            <ArrowLink href={planningWhatsApp} external>
              Let’s plan your celebration
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal className="relative lg:col-span-5 lg:col-start-8" delay={0.12}>
          <Photo
            alt="Outdoor children's party with an inflatable play area and themed balloons"
            className="aspect-[4/5]"
            filename="hero.jpg"
            src={photos.planning}
          />
          <div className="absolute -bottom-5 left-0 bg-coral px-5 py-4 text-paper sm:-left-7 sm:px-7">
            <p className="font-serif text-xl italic">Little details, big delight.</p>
            <p className="mt-1 text-[0.52rem] uppercase tracking-editorial">Made for their kind of magic</p>
          </div>
          <span className="absolute -right-3 top-5 hidden font-serif text-7xl italic text-coral/80 sm:block">
            01
          </span>
        </Reveal>
      </div>
    </section>
  )
}

function SuppliesSection() {
  return (
    <section className="overflow-hidden bg-plum py-20 text-cream sm:py-28 lg:py-36" id="supplies">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6 lg:col-start-2">
            <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-editorial text-sunshine">
              02 / Event supplies
            </p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-[5.4rem]">
              The details make <span className="italic text-lavender">the celebration.</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="max-w-sm text-sm leading-7 text-cream/75 sm:text-base">
              Find the finishing touches and party essentials to help bring your
              celebration’s theme to life.
            </p>
            <div className="mt-7 max-w-xs">
              <ArrowLink href={suppliesWhatsApp} external light>
                Enquire about supplies
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mt-14 lg:mt-20" delay={0.12}>
          <div className="grid items-center gap-5 sm:grid-cols-12 sm:gap-8">
            <div className="sm:col-span-5">
              <Photo
                alt="Event venue setup with presentation equipment and a decorated hall"
                className="aspect-[5/6]"
                filename="supplies.jpg"
                src={photos.supplies}
              />
            </div>
            <div className="relative sm:col-span-6 sm:col-start-7">
              <div className="relative">
                <Photo
                  alt="Party supplies and decorative details for a celebration"
                  className="aspect-[4/3]"
                  filename="supplies3.jpg"
                  src={suppliesDetailImage}
                />
                <div className="absolute -bottom-5 -left-4 bg-sunshine px-5 py-4 text-plum sm:-left-8 sm:px-7">
                  <span className="font-serif text-2xl italic">Find the finishing touch.</span>
                </div>
              </div>
              <p className="mb-4 mt-10 max-w-sm text-xs leading-6 text-cream/60 sm:ml-8">
                Balloons, themed accessories, tableware and thoughtful extras.
                Tell us what you’re looking for and we’ll talk through the details.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CelebrationsSection() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-36" id="celebrations">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-5 sm:mb-16 sm:grid-cols-12 sm:items-end">
          <Reveal className="sm:col-span-7 sm:col-start-2">
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-editorial text-coral">
              A glimpse of the possibilities
            </p>
            <h2 className="font-serif text-5xl leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[5.3rem]">
              Celebrations <span className="italic">in full colour.</span>
            </h2>
          </Reveal>
          <Reveal className="sm:col-span-3 sm:col-start-10" delay={0.1}>
            <p className="text-sm leading-6 text-plum/70">
              A few ideas to get imaginations going. Each celebration is its own
              story.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-7">
          {galleryItems.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.07}>
              <figure className="group">
                <Photo
                  alt={item.alt}
                  className={`${item.shape} transition-transform duration-700 group-hover:scale-[0.985]`}
                  filename={item.filename}
                  src={item.image}
                />
                <figcaption className="mt-4 flex items-center justify-between gap-3 border-b border-plum/20 pb-3">
                  <span className="font-serif text-lg italic">{item.caption}</span>
                  <span className="text-[0.55rem] uppercase tracking-editorial text-plum/50">
                    0{index + 1}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-[0.58rem] uppercase tracking-[0.15em] text-plum/50">
          Inspiration imagery — examples of ideas, not a record of completed STAXX Hyperkid events.
        </p>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="border-y border-plum/15 bg-lavender/35 py-20 sm:py-28 lg:py-32" id="about">
      <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <Reveal className="lg:col-span-3 lg:col-start-2">
          <span className="font-serif text-7xl italic text-coral/80">Staxx</span>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:col-start-5" delay={0.1}>
          <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-editorial text-coral">
            A little about us
          </p>
          <h2 className="font-serif text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-[5.2rem]">
            Made for their <span className="italic">kind of magic.</span>
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-10">
            <p className="text-sm leading-7 text-plum/75">
              Every celebration has its own personality. We bring together
              creative party ideas, thoughtful styling and celebration
              essentials to help make those moments special.
            </p>
            <p className="text-sm leading-7 text-plum/75">
              From the first idea to the final little detail, we make it easy to
              start a conversation about the day you have in mind.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EnquirySection() {
  return (
    <section className="bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <Reveal className="lg:col-span-4 lg:col-start-2">
          <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-editorial text-coral">
            Your next little adventure
          </p>
          <h2 className="font-serif text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl">
            How to get <span className="italic">started.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-plum/70">
            No forms or fuss. Just tell us what you’re imagining and we’ll take
            it from there.
          </p>
          <div className="mt-8 max-w-xs">
            <ArrowLink href={planningWhatsApp} external>
              Start planning
            </ArrowLink>
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-7">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <div className="flex items-start gap-5 border-t border-plum/20 py-5 sm:gap-8 sm:py-6">
                <span className="pt-1 font-serif text-xl italic text-coral">
                  0{index + 1}
                </span>
                <p className="max-w-sm font-serif text-2xl leading-snug sm:text-3xl">
                  {step}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="bg-coral text-paper" id="contact">
      <div className="mx-auto grid max-w-site lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <Reveal>
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-editorial text-paper/75">
              Shall we make a little magic?
            </p>
            <h2 className="max-w-2xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[5rem]">
              Let’s make their next celebration <span className="italic">special.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-paper/85 sm:text-base">
              Tell us what you have in mind, and let’s start planning something
              memorable.
            </p>
            <div className="mt-8 max-w-sm">
              <a
                className="group inline-flex min-h-14 w-full items-center justify-between bg-plum px-5 text-[0.62rem] font-semibold uppercase tracking-editorial text-cream transition-colors hover:bg-cream hover:text-plum sm:w-auto sm:gap-10"
                href={planningWhatsApp}
                rel="noreferrer"
                target="_blank"
              >
                Chat with us on WhatsApp
                <FiArrowUpRight
                  aria-hidden="true"
                  className="text-base transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-paper/35 pt-5">
              <a
                className="text-sm hover:text-sunshine"
                href="https://wa.me/254780979777"
                rel="noreferrer"
                target="_blank"
              >
                +254 780 979777
              </a>
              <a
                className="text-sm hover:text-sunshine"
                href="https://wa.me/254722548012"
                rel="noreferrer"
                target="_blank"
              >
                +254 722 548012
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[0.58rem] font-semibold uppercase tracking-[0.13em]">
              <a className="hover:text-sunshine" href={planningWhatsApp} rel="noreferrer" target="_blank">
                Ask about party planning
              </a>
              <a className="hover:text-sunshine" href={suppliesWhatsApp} rel="noreferrer" target="_blank">
                Ask about supplies
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="relative min-h-[360px] lg:min-h-full" delay={0.1}>
          <Photo
            alt="A joyful, colourful party scene"
            className="absolute inset-0"
            filename="hero.jpg"
            src={photos.planning}
          />
          <div className="absolute inset-0 bg-plum/15" />
          <span className="absolute bottom-6 left-6 border border-paper/60 px-4 py-3 font-serif text-lg italic text-paper sm:bottom-10 sm:left-10">
            The best days start with an idea.
          </span>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="mx-auto max-w-site px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="grid gap-10 border-b border-cream/20 pb-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a className="inline-flex flex-col leading-none" href="#top">
              <span className="font-serif text-3xl font-bold tracking-[-0.07em]">STAXX</span>
              <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em]">Hyperkid</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-cream/65">
              Thoughtfully planned children’s celebrations and party essentials,
              made for their kind of magic.
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="mb-4 text-[0.56rem] font-semibold uppercase tracking-editorial text-sunshine">Explore</p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm text-cream/75">
              <a className="hover:text-sunshine" href="#planning">Party planning</a>
              <a className="hover:text-sunshine" href="#supplies">Event supplies</a>
              <a className="hover:text-sunshine" href="#celebrations">Celebrations</a>
              <a className="hover:text-sunshine" href="#about">About</a>
            </nav>
          </div>
          <div className="lg:col-span-3 lg:col-start-9">
            <p className="mb-4 text-[0.56rem] font-semibold uppercase tracking-editorial text-sunshine">Say hello</p>
            <div className="flex flex-col gap-3 text-sm text-cream/75">
              <a className="hover:text-sunshine" href="https://wa.me/254780979777" rel="noreferrer" target="_blank">+254 780 979777</a>
              <a className="hover:text-sunshine" href="https://wa.me/254722548012" rel="noreferrer" target="_blank">+254 722 548012</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-[0.55rem] uppercase tracking-[0.13em] text-cream/50 sm:flex-row">
          <span>STAXX Hyperkid · Celebrations, thoughtfully made</span>
          <a className="inline-flex items-center gap-2 hover:text-cream" href="#top">
            Back to top <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main className="lg:pt-[69px]">
        <Hero />
        <PlanningSection />
        <SuppliesSection />
        <CelebrationsSection />
        <AboutSection />
        <EnquirySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
