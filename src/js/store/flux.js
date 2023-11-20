const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getData: async () => {
				const url = 'https://www.swapi.tech/api/';
				const options = {
					method: 'GET',
					hearders: { 'Content-Type': 'application/json'},
					body: JSON.stringify([])
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					console.log(data);
					setStore(data);
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			}
		}
	};
};

export default getState;
