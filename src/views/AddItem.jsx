import { useState } from 'react';
import Form from '../components/form';
import { addItem } from '../api';

export function AddItem({ listToken }) {
	const defaultFormValues = {
		itemName: '',
		daysUntilNextPurchase: 7,
		isSubmited: false,
	};

	const [form, setForm] = useState(defaultFormValues);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (form.itemName.length === 0) {
			return;
		}
		setForm({ ...defaultFormValues, isSubmited: true });
		addItem(listToken, form);
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

	return <Form form={form} handleSubmit={handleSubmit} onChange={onChange} />;
}
