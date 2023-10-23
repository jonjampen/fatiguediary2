"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Youtube } from 'lucide-react'
import { motion, stagger, useAnimate, animate } from "framer-motion"


export default async function Home() {

  const AnimatedButton = motion(Button)

  return (
    <main className="mx-24 min-h-screen">
      {/* Hero */}
      <section className="flex w-full h-[80vh] justify-between items-center">
        <div className="max-w-2xl">
          <motion.h1 className="font-bold text-left text-5xl leading-tight"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}>
            Track and Manage Fatigue with&nbsp;
            <span className="text-accent">
              Fatigue Diary
            </span>
          </motion.h1>
          <motion.h4 className="text-2xl"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            Effortlessly monitor, analyze, and improve your energy levels and daily activities with Fatigue Diary.
          </motion.h4>
          <br />
          <AnimatedButton
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}>
            Start now
          </AnimatedButton>
        </div>
        {/* <img src="/preview/app.svg" alt="Screenshot of the Fatigue Diary App" /> */}
        <h2>image</h2>
      </section>

      {/* Features */}
      <section>
        <div className="flex justify-between h-[80vh] items-center"
        >
          {/* <img src="/preview/feature/track.svg" alt="Screenshot of how to track activities and energy levels in Fatigue Diary." /> */}
          <p>image</p>
          <motion.div className="max-w-md"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="font-semibold">Energy and Activity Tracking</h2>
            <p>Log energy level and activities after every activity which can help you a lot with pacing.</p>
          </motion.div>
        </div>
        <div className="flex justify-between h-[80vh] items-center">
          {/* <img src="/preview/feature/analyze.svg" alt="Screenshot of how to analyze tracked data in Fatigue Diary." /> */}
          <p>image</p>
          <motion.div className="max-w-md"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="font-semibold">Gain Deeper Insights into Your Energy Levels</h2>
            <p>Visualize your energy trends through interactive charts to enhance your understanding of fatigue. Identify optimal times of the day and recognize potential patterns.</p>
          </motion.div>
        </div>
        <div className="flex justify-between h-[80vh] items-center">
          {/* <img src="/preview/feature/auto-analysis.svg" alt="Screenshot of how Fatigue Diary automatically analyzes inputted data." /> */}
          <p>image</p>
          <motion.div className="max-w-md"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="font-semibold">Automatic Activity Analysis</h2>
            <p>Benefit from automated analysis to identify activities that promote relaxation and recovery, as well as uncover potential sources of energy depletion you may not be aware of.</p>
          </motion.div>
        </div>
      </section>

      {/* Developer */}
      <section className="mb-28">
        <motion.div className="max-w-md"
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h2 className="font-semibold">Developed by a fatigue patient</h2>
          <p>Hello, I'm Jon. Like you, I am facing chronic fatigue, and I've created this web app to share the strategies that have helped me on my journey. This project was initially my matura (high school graduation) project.</p>
          <p>Feel free to contact me if you have any questions!</p>
        </motion.div>
        {/* <img src="" alt="" /> */}
      </section>

      {/* CTA */}
      <section className="border rounded min-h-[80vh] mb-28 flex items-center justify-between px-10 py-10">
        <motion.div className="max-w-md flex flex-col gap-8"
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          animate={{ delay: stagger(0.3) }}
        >
          <motion.h2 className="font-bold text-3xl"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}>Use Fatigue Diary for FREE now!</motion.h2>
          <motion.p className="text-xl"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}>Effortlessly monitor, analyze, and improve your energy levels and daily activities with Fatigue Diary.</motion.p>
          <div className="flex gap-4">
            <Button>Start now</Button>
            <Button variant="accent">Instructions</Button>
          </div>
        </motion.div>
        {/* <img src="" alt="" /> */}
      </section>

      {/* Footer */}
      <section className="flex items-start justify-between align-center">
        <div className="max-w-sm">
          <h3 className="font-bold text-2xl">Fatigue Diary</h3>
          <h4>Effortlessly monitor, analyze, and improve your energy levels and daily activities with Fatigue Diary.</h4>
          <div className="flex gap-4 items-center mt-3">
            <a href="https://instagram.com/fatiguediary.ch" target="_blank"><Instagram /></a>
            {/* <a href="https://youtube.com/" target="_blank"><Youtube /></a> */}
            <a href="mailto:info@fatiguediary.ch" target="_blank"><Mail /></a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="">
            <h3 className="font-bold text-2xl">HELP</h3>
            <ul>
              <li><a href="/instructions">Instructions</a></li>
              <li><a href="/videos">Video Guides</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/feedback">Feedback Form</a></li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl">APP</h3>
            <ul>
              <li><a href="/login">Log In</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/">Share this app</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full mt-8 pb-3">
        <p className="text-center">&copy;2023 All rights reserved. Designed and developed by <a href="https://jonjampen.ch" target="_blank" className="text-accent">Jon Jampen</a>.</p>
      </section>
    </main>
  )
}
