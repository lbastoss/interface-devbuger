import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components/SideNavAdmin';
import { Container, Main } from './styles';

export function AdminLayout() {
	const { admin: isAdmin } = JSON.parse(
		localStorage.getItem('devburger:userData'),
	);

	return isAdmin ? (
		<Container>
			<SideNavAdmin />
			<Main>
				<section>
					<Outlet />
				</section>
			</Main>
		</Container>
	) : (
		<Navigate to="/login" />
	);
}
