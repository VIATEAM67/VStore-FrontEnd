import styled from 'styled-components'
import Button from '../../ui/buttons/button/Button.jsx'
import { NavLink } from 'react-router-dom'

const ActionsWrapper = styled.div`
   width: 350px;
   display: flex;
   align-items: center;

   ul {
      display: flex;
      align-items: center;
      gap: 18px;
   }  
`;

export const HeaderActions = ({actionIcons, authClick }) => (
   <ActionsWrapper>
      <ul>
      {actionIcons.map((icon) => (
         <li key={icon.alt}>
            <NavLink to={icon.to}>
               <img src={icon.src} alt={icon.alt}/>
            </NavLink>
         </li>
      ))}       
      </ul>

      <Button title={'Sign in'} onClick={authClick} variant='signIN'/>
      <Button title={'Download'} variant='primary'/>
   </ActionsWrapper>
)