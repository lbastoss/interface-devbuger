import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Table } from '../index';
import {
	ButtonGroup,
	EmptyCart,
	ProductImage,
	TotalPrice,
	TrashImage,
} from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
	const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } =
		useCart();

	console.log(cartProducts);
	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<Table.Th></Table.Th>
					<Table.Th>Itens</Table.Th>
					<Table.Th>Preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					<Table.Th />
				</Table.Tr>
			</Table.Header>

			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImage alt="imagem-pedido" src={product.url} />
							</Table.Td>
							<Table.Td>{product.name}</Table.Td>
							<Table.Td>{product.currencyValue}</Table.Td>
							<Table.Td>
								<ButtonGroup>
									<button
										type="button"
										onClick={() => decreaseProduct(product.id)}
									>
										-
									</button>
									{product.quantity}
									<button
										type="button"
										onClick={() => increaseProduct(product.id)}
									>
										+
									</button>
								</ButtonGroup>
							</Table.Td>
							<Table.Td>
								<TotalPrice>
									{formatPrice(product.quantity * product.price)}
								</TotalPrice>
							</Table.Td>
							<Table.Td>
								<TrashImage
									src={TrashIcon}
									alt="Remover item"
									onClick={() => deleteProduct(product.id)}
								/>
							</Table.Td>
						</Table.Tr>
					))
				) : (
					<EmptyCart> Carrinho vazio </EmptyCart>
				)}
			</Table.Body>
		</Table.Root>
	);
}
