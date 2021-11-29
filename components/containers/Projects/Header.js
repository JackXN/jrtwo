// Components
import { Box, Text,UnorderedList, ListItem } from "@chakra-ui/react";
import Nav from './Nav';
import ShowCaseHeader from "./ShowCaseHeader";
// Styles
import styles from "../../../styles/ProjectHeader";

// Icons
import {DiReact as React} from 'react-icons/di';


function Header() {
  return (
<>
<Nav/> 
<ShowCaseHeader/>
</>
  );
}

export default Header;
