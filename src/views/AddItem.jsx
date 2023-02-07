import { useState, useEffect } from 'react';
import Form from '../components/form';
import { addItem, doesDataExist } from '../api';

export function AddItem({ listToken, data }) {
	const defaultFormValues = {
		itemName: '',
		daysUntilNextPurchase: 7,
		isSubmitted: false,
		isLoading: false,
		isSuccess: false,
	};

	const itemNames = new Set(data.map((item) => item.name.replace(/\s+/g, '')));

	const [form, setForm] = useState(defaultFormValues);

	const handleSubmit = async (event) => {
		event.preventDefault();
		doesDataExist(listToken, form.itemName);
		if (itemNames.has(form.itemName.toLowerCase().replace(/\s+/g, ''))) {
			alert('Item already exists.');
		}

		setForm({ ...defaultFormValues, isSubmitted: true, isLoading: true });
		const { success, error } = await addItem(listToken, form);
		success
			? setForm({
					...defaultFormValues,
					isSubmitted: true,
					isSuccess: true,
					isLoading: false,
			  })
			: setForm({
					...defaultFormValues,
					isSubmitted: true,
					isSuccess: false,
					isLoading: false,
					error,
			  });
	};

	const onChange = (event) => {
		const newValue =
			event.target.name === 'daysUntilNextPurchase'
				? Number(event.target.value)
				: event.target.value;
		setForm({
			...form,
			[event.target.name]: newValue,
		});
	};

	useEffect(() => {
		if (form.isSubmitted) {
			const timeoutId = setTimeout(() => {
				setForm({ ...form, isSubmitted: false });
			}, 4000);
			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [form]);

	return <Form form={form} handleSubmit={handleSubmit} onChange={onChange} />;
}
