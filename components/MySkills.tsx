import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

type Props = {};

const MySkills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-0 xl:mb-8">
        Hover over a skill to see the current proficiency
      </h3>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-7">
        {/* <Skills />
        <Skills />
        <Skills />
        <Skills /> */}
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
    </motion.div>
  );
};

export default MySkills;
