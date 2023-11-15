import React from "react";
import { motion } from "framer-motion";
import linkedinurl from "/linkedin.png"

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { newteammembers,oldteammembers } from "../constants";

const TeamMemberCard = ({
  index,
  name,
  designation,
  image,
  linkedin,
  instagram,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='rounded-full object-cover'
        style={{width: "100%", height: "100%", maxHeight: "240px", maxWidth: "240px"}}
      />

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>

        <div className='inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(linkedin, "_blank")}
              className='blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedinurl}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
        </div>
      </div>
    </div>
  </motion.div>
);


const Team = () => {
  const [currentTeam, setCurrentTeam] = React.useState(newteammembers);
  const [teamTitle, setTeamTitle] = React.useState('Year 23-24');

  const handleSelect = (event) => {
    switch (event.target.value) {
      case '22':
        setCurrentTeam(oldteammembers);
        setTeamTitle('Year 22-23');
        break;
      case '23':
        setCurrentTeam(newteammembers);
        setTeamTitle('Year 23-24');
        break;
      /*case '24':
        setCurrentTeam(team24);
        setTeamTitle('Year 24-25');
        break;
      default:
        setCurrentTeam(team22);
        setTeamTitle('Year 22-23');
        */
    }
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className={styles.sectionSubText}>Our Team</p>
          <br />
          <p className={styles.sectionSubText}>{teamTitle}</p>
          <br />
          <select onChange={handleSelect}>
            <option value="23">Year 23-24</option>
            <option value="22">Year 22-23</option>
            
          </select>
        </motion.div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
          {currentTeam.map((member, index) => (
            <TeamMemberCard key={member.name} index={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;