import { SignOutIcon } from '@phosphor-icons/react';

import Logo from '../../assets/logo.svg';
import { UseUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, NavLinkContainer, NavLink, Footer } from './styles';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
	const { logout } = UseUser();
	const { pathname } = useResolvedPath();

	return (
		<Container>
			<img src={Logo} alt="Hamburguer logo DevBurger" />
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={link.path}
						$isActive={pathname === link.path}
					>
						{link.icon}
						<span>{link.label}</span>
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink onClick={logout} to="/login">
					<SignOutIcon />
					<p>Sair</p>
				</NavLink>
			</Footer>
		</Container>
	);
}
