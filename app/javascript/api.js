const getGreeting = async () => {
	const response = await fetch("/random_greeting");
	const data = await response.json();
	return data.greeting;
};

export default getGreeting;
