import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

import { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../services/api';

import { Container, ProductImage, EditButton } from './styles';
import { CheckIcon, PencilIcon, XCircleIcon } from '@phosphor-icons/react';

export function Products() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			console.log(data);

			setProducts(data);
		}

		loadProducts();
	}, []);

	function isOffer(offer) {
		if (offer) {
			return <CheckIcon color="#61a120" size="28" />;
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			return <XCircleIcon color="#ff3205" size="28" />;
		}
	}

	function editProduct(product) {
		navigate('/admin/editar-produto', {
			state: {
				product,
			},
		});
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Nome</StyledTableCell>
							<StyledTableCell align="center">Preço</StyledTableCell>
							<StyledTableCell align="center">
								Produto em oferta
							</StyledTableCell>
							<StyledTableCell align="center">
								Imagem do produto
							</StyledTableCell>
							<StyledTableCell align="center">Editar produto</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.map((product) => (
							<TableRow
								key={product.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="product">
									{product.name}
								</TableCell>
								<TableCell align="center">
									{formatPrice(product.price)}
								</TableCell>
								<TableCell align="center">{isOffer(product.offer)}</TableCell>
								<TableCell align="center">
									<ProductImage src={product.url} />
								</TableCell>
								<TableCell align="center">
									<EditButton onClick={() => editProduct(product)}>
										<PencilIcon />
									</EditButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
