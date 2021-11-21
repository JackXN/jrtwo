
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
<Icon as={skill.Icon} sx={styles.icon}/>
<Text as='p' sx={styles.iconName}>{skill.name}</Text>
 </Box>
))}
          
      </Box>
    )
}

export default Skills
