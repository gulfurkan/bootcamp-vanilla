import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NoteButton = styled(Link)`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
  &:hover {
    background: blue;
    
  }
  
`;