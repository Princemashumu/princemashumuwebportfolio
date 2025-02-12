import React, { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  useColorModeValue,
  Button,
  Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Font Awesome icons
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaTrello,
  FaBrain,
  FaLightbulb,
  FaTasks,
  FaCuttlefish,
  FaCode
} from 'react-icons/fa';

// Simple Icons
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiTailwindcss,
  SiMui,
  SiExpo,
  SiTypescript,
  SiAffinitydesigner,
  SiJson
} from 'react-icons/si';

import categorizedSkills from './data/skills.json';

const iconMap = {
  FaFigma: <FaFigma color="purple" />,
  FaHtml5: <FaHtml5 color="red" />,
  FaCss3Alt: <FaCss3Alt color="blue" />,
  FaJs: <FaJs color="yellow" />,
  FaReact: <FaReact color="cyan" />,
  FaNodeJs: <FaNodeJs color="green" />,
  SiExpress: <SiExpress color="gray" />,
  SiMongodb: <SiMongodb color="green" />,
  SiMysql: <SiMysql color="blue" />,
  SiFirebase: <SiFirebase color="orange" />,
  SiSqlite: <SiSqlite color="blue" />,
  SiTailwindcss: <SiTailwindcss color="teal" />,
  SiMui: <SiMui color="blue" />,
  SiExpo: <SiExpo color="black" />,
  SiTypescript: <SiTypescript color="blue" />,
  FaCode: <FaCode color="purple" />,
  SiAffinitydesigner: <SiAffinitydesigner color="darkblue" />,
  SiJson: <SiJson color="brown" />,
  FaGit: <FaGit color="orange" />,
  FaGithub: <FaGithub color="black" />,
  FaTrello: <FaTrello color="blue" />,
  FaBrain: <FaBrain color="purple" />,
  FaLightbulb: <FaLightbulb color="yellow" />,
  FaTasks: <FaTasks color="green" />,
  FaCuttlefish: <FaCuttlefish color="blue" />
};

const MotionBox = motion(Box);

const SkillsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <MotionBox 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.3 }} 
      p={5} 
      minH="40vh"
    >
      <Box textAlign="center" mb={6}>
        <Heading
          as="h2"
          fontSize="2xl"
          mb={2}
          bgGradient="linear(to-r, purple.400, pink.400)"
          bgClip="text"
          fontWeight="extrabold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Skills Matrix
        </Heading>
        <Text fontSize="sm" color="black" mb={6} letterSpacing="1px">
          Embark on a journey through my technical and creative expertise, where innovation meets passion.
        </Text>
      </Box>
      
      <Flex wrap="wrap" justify="center" align="center" gap={4}>
        {Object.keys(categorizedSkills).map((category) => (
          <MotionBox
            key={category}
            minW="120px"
            textAlign="center"
            cursor="pointer"
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            fontWeight="bold"
            fontSize="sm"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px solid"
            borderColor="gray.300"
            borderRadius="50px"
            transition="all 0.2s ease-in-out"
            _hover={{ borderColor: "#800080" }}
          >
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </MotionBox>
        ))}
      </Flex>
      
      {selectedCategory && (
       <>
       <Divider my={2} borderColor="purple.500" />
       <SimpleGrid columns={[2, 3, 4]} spacing={1}> {/* Reduced spacing */}
         {categorizedSkills[selectedCategory].map((skill) => (
           <MotionBox 
             key={skill.skill} 
             p={2}  // Reduced padding
             textAlign="center" 
             display="flex" 
             flexDirection="column" 
             alignItems="center" 
             justifyContent="center"
           >
             {React.cloneElement(iconMap[skill.icon] || <Box>🔧</Box>, { size: 40 })} {/* Reduced icon size */}
             <Button
               mt={3}  // Slightly reduced margin-top
               fontWeight="bold"
               bgGradient="linear(to-r, purple.500, pink.500)"
               color="white"
               borderRadius="full"
               px={3} // Reduced padding
               py={1} // Reduced padding
               fontSize="sm" // Smaller font size
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               boxShadow="0px 2px 6px rgb(236,242,255)" // Reduced shadow effect
               backgroundColor="#800080"
               fontFamily="Anta, sans-serif"
             >
               {skill.skill}
             </Button>
           </MotionBox>
         ))}
       </SimpleGrid>
     </>
     
      )}
    </MotionBox>
  );
};

export default SkillsComponent;