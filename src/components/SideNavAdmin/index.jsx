import { SignOutIcon } from '@phosphor-icons/react';

import { useResolvedPath } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { UseUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function SideNavAdmin() {
	const { logout } = UseUser();
	const { pathname } = useResolvedPath();

	const navigate = useNavigate();

	return (
		<Container>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<img
				onClick={() => navigate('/')}
				src={Logo}
				alt="Hamburguer logo DevBurger"
			/>
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
