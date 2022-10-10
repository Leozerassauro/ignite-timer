// Externals
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

// Styles
import { HeaderContainer } from './styles'

// Assets
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historic">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
