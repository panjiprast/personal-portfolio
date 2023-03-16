import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { sectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index, 
  name, 
  description, 
  tags, 
  image, 
  source_code_link} ) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450
        
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[565px]"
>
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
            <div 
              onClick={() => window.open (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.map} className={`text-[14px]  ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>My Work</p>
        <h2 className={ styles.sectionHeadText }>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Berikut adalah beberapa contoh Project yang sudah saya buat
          menggunakan beberapa teknologi yang cukup populer saat ini
          seperti javascript, React js, Tailwind, Vite, frammerMotion dan juga mongoDb.
          Skill dan kemampuan saya cukup bagus untuk mengembangkan sebuah
          website dinamis efektif dan tentu saja memiliki performa yang baik.
        </motion.p>
       
      </div>
      <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] max-w-2xl leading-[30px]"
          >
          *Silahkan klik logo Github di bawah untuk melihat hasil project tersebut
        </motion.p>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default sectionWrapper (Works, "");