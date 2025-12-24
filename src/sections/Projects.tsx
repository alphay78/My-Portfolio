"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import altaImage from "../../public/images/AltaProject.png";
import amazonImage from "../../public/images/amazonClone.png";
import netflixImage from "../../public/images/netflixImage.png";
import HouseRentalImage from "../../public/images/HouseRentalImage.png"
import movieRecommendation from "../../public/images/movieRecommendation.png";

const projects = [
  {
    name: "Alta Counseling",
    description: "Tigat.net is a platform for learning and teaching.",
    image: altaImage,
    link: "https://www.altacounselingethiopia.com/",
    stack: "FullStack - React | Node.js",
  },
  {
    name: "Netflix",
    description: "Servicenow is a platform for learning and teaching.",
    image: netflixImage,
    link: "https://netflix-clone-vert-alpha-86.vercel.app/",
    stack: "Frontend - React",
  },
  {
    name: "House Rental",
    description: "Whalers is a platform for learning and teaching.",
    image: HouseRentalImage,
    link: "https://github.com/Ephraimdebel/House_Rental_and_Sell_Management_System",
    stack: "FullStack - React|Node.js",
  },
  {
    name: "AmazonClone",
    description:
      "Nileode Technologies is a platform for learning and teaching.",
    image: amazonImage,
    link: "https://amazon-frontend-caib.vercel.app/",
    stack: "FullStack - React| Firebase| Stripe",
  },
  {
    name: "Movie Recommendation",
    description: "Mojo is a platform for learning and teaching.",
    image: movieRecommendation,
    link: "https://github.com/alphay78/movie-recommendation-backend",
    stack: "Backend - Django",
  },
  {
    name: "House Rental Mobile App",
    description: "Lalibela is a platform for learning and teaching.",
    image: HouseRentalImage,
    link: "https://github.com/Ephraimdebel/House_Sell_and_Rental_Flutter_Project__2025",
    stack: "Flutter",
  },
];

export function ProjectsSection() {
  return (
    <div className="h-full my-40">
      <div className="max-w-6xl mx-auto mb-12">
        {/* Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>

        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>

        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 font-poppins w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-4 ${index % 2 !== 0 ? "mt-8" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Image */}
              <motion.div
                className="flex flex-row gap-4 p-2 bg-gradient-to-br from-emerald-300 to-sky-500 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg"
                />
              </motion.div>

              {/* Title */}
              <motion.div
                className="flex flex-row gap-2 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-2xl font-cursive">{project.name}</h3>
                <span className="text-white/60"> {project.stack}</span>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link href={project.link} target="_blank">
                  <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-white/80 transition-all duration-300">
                    <span>Check it out</span>
                    <ArrowRightIcon className="size-4" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
