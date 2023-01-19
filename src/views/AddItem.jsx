import { useState } from 'react';
import Form from '../components/form';
import { addItem } from '../api';

export function AddItem({ listToken }) {
	const [form, setForm] = useState({
		itemName: '',
		daysUntilNextPurchase: 7,
		isSubmited: false,
		isFailed: false,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (form.itemName.length === 0) {
			return;
		}
		setForm({ itemName: '', daysUntilNextPurchase: 7, isSubmited: true });
		addItem(listToken, form);
	};

	const onChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	return <Form form={form} handleSubmit={handleSubmit} onChange={onChange} />;
}
