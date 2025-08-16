import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Row } from './row';
import { Filter, FilterOption } from './styles';

export function Orders() {
	const [orders, setOrders] = useState([]); // vai ficar como backup
	const [filteredOrders, setFilteredOrders] = useState([]); // valores que estao na tela
	const [activeStatus, setActiveStatus] = useState(0);

	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('/orders');

			setOrders(data);
			setFilteredOrders(data); // Inicialmente, todos os pedidos são exibidos

			console.log(data);
		}

		loadOrders();
	}, []);

	function createData(order) {
		return {
			name: order.user.name,
			orderId: order._id,
			date: order.createdAt,
			status: order.status,
			products: order.products,
		};
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const newRows = filteredOrders.map((order) => createData(order));

		setRows(newRows);
	}, [filteredOrders]);

	function handleStatus(status) {
		if (status.id === 0) {
			setFilteredOrders(orders);
		} else {
			const newOrders = orders.filter((order) => order.status === status.value);

			setFilteredOrders(newOrders);
		}

		setActiveStatus(status.id);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (activeStatus === 0) {
			setFilteredOrders(orders);
		} else {
			const statusIndex = orderStatusOptions.findIndex(
				(item) => item.id === activeStatus,
			);

			const newFilteredOrders = orders.filter(
				(order) => order.status === orderStatusOptions[statusIndex].value,
			);

			setFilteredOrders(newFilteredOrders);
		}
	}, [orders]); // Atualiza a lista filtrada sempre que os pedidos forem atualizados

	return (
		<>
			<Filter>
				{orderStatusOptions.map((status) => (
					<FilterOption
						key={status.id}
						onClick={() => handleStatus(status)}
						$isActiveStatus={activeStatus === status.id}
					>
						{status.label}
					</FilterOption>
				))}
			</Filter>

			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>PEDIDO</TableCell>
							<TableCell>CLIENTE</TableCell>
							<TableCell>DATA DO PEDIDO</TableCell>
							<TableCell>STATUS</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row
								key={row.orderId}
								row={row}
								orders={orders}
								setOrders={setOrders}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
