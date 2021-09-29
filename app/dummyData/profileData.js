const profileData = [
	{
        id: 0,
		graphLabel: "Weight Loss",
		graphData: {
			labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
				{
					data: [
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
					],
					strokeWidth: 2,
				},
			],
		},
        currentData: '85.7Kg',
	},
	{
        id: 1,
		graphLabel: "BMI",
		graphData: {
			labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
				{
					data: [
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
					],
					strokeWidth: 2,
				},
			],
		},
        currentData: '120.6',
	},
	{
        id: 2,
		graphLabel: "Calories",
		graphData: {
			labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
				{
					data: [
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
						Math.random() * 100,
					],
					strokeWidth: 2,
				},
			],
		},
        currentData: '1206KCal',
	},
];

export default profileData;
