export function handleYearInputChange(e: React.ChangeEvent<HTMLInputElement>) {
	const onlyNumbers = e.target.value.replace(/\D/g, '').slice(0, 4);
	e.target.value = onlyNumbers;

	e.target.dispatchEvent(new Event('input', { bubbles: true }));
}
