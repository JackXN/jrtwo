// Components
import { Box, Text,UnorderedList, ListItem } from "@chakra-ui/react";
import Nav from './Nav';
import ShowCaseHeader from "./ShowCaseHeader";
// Styles
import styles from "../../../styles/ProjectHeader";

// Icons
import {DiReact as React} from 'react-icons/di';
import {DiJavascript1 as Javascript} from 'react-icons/di';


function Header({project}) {
  return (
<>
<Nav project={project}/>
<ShowCaseHeader project={project}/>
</>
  );
}

export default Header;
