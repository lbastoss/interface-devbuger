import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImageIcon } from '@phosphor-icons/react';
import { api } from '../../../services/api';

import {
	Container,
	Form,
	InputGroup,
	Label,
	Input,
	LabelUpload,
	Select,
	SubmitButton,
	ErrorMessage,
} from './styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const schema = yup.object({
	name: yup.string().required('Digite o nome do produto'),
	price: yup
		.number()
		.positive()
		.required('Digite o preço do produto')
		.typeError('Digite um número válido'),
	category: yup.object().required('Selecione uma categoria'),
	file: yup
		.mixed()
		.test('required', 'Escolha um arquivo para continuar', (value) => {
			return value && value.length > 0;
		})
		.test('fileSize', 'Carregue arquivos até 3mb', (value) => {
			return value && value.length > 0 && value[0].size <= 3 * 1024 * 1024;
		})
		.test('type', 'Apenas arquivos PNG e JPEG são permitidos', (value) => {
			return (
				value &&
				value.length > 0 &&
				(value[0].type === 'image/png' || value[0].type === 'image/jpeg')
			);
		}),
});

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategories(data);
		}

		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const productFormData = new FormData();

		productFormData.append('name', data.name);
		productFormData.append('price', Math.round(Number(data.price) * 100));
		productFormData.append('category_id', data.category.id);
		productFormData.append('file', data.file[0]);

		await toast.promise(api.post('/products', productFormData), {
			pending: 'Adicionando produto...',
			success: 'Produto adicionado com sucesso!',
			error: 'Erro ao adicionar produto, tente novamente',
		});
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label>Nome</Label>
					<Input type="text" {...register('name')} />
					<ErrorMessage>{errors?.name?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label>Preço</Label>
					<Input type="number" {...register('price')} />
					<ErrorMessage>{errors?.price?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<LabelUpload>
						<ImageIcon />
						<input
							type="file"
							{...register('file')}
							accept="image/png, image/jpeg"
							onChange={(value) => {
								setFileName(value.target.files[0]?.name);
								register('file').onChange(value);
							}}
						/>

						{fileName || 'Upload do produto'}
					</LabelUpload>

					<ErrorMessage>{errors?.file?.message}</ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label>Categoria</Label>
					<Controller
						name="category"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								options={categories}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								placeholder="Selecione uma categoria"
								menuPortalTarget={document.body}
							/>
						)}
					/>

					<ErrorMessage>{errors?.category?.message}</ErrorMessage>
				</InputGroup>

				<SubmitButton>Adicionar produto</SubmitButton>
			</Form>
		</Container>
	);
}
