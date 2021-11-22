
// Data
import skills from './data';

//styles
import styles from '../../../styles/SkillsStyles'

//Components
import {Icon, Text, Box} from '@chakra-ui/react';

function Skills() {
    return (
      <Box sx={styles.container}>
{skills.map((skill) => (
 <Box key={skill.id} sx={styles.skillsIconContainer}>
<Icon as={skill.Icon} sx={styles.icon} data-aos='fade-down' data-aos-duration='2000' data-aos-delay='50'/>
<Text as='p' sx={styles.iconName} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='50'>{skill.name}</Text>
 </Box>
))}
          
      </Box>
    )
}

export default Skills
