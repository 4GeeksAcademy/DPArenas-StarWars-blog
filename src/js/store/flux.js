

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			baseUrl: 'https://www.swapi.tech/api/',
			urlPeople: '',
			characters: [],
			currentCharacter: {},
			planets: [],
			currentPlanet: {},
			starships: [],
			currentStarship: {},
			favorites: [],
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
			removeFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: getStore().favorites.filter(item => item != name)})
				// let aux = getStore().favorites.filter(el => el != char)
				// setStore({ favorites: aux })
			},
			addRemoveFav: (item) => {
				if (getStore().favorites.length > 0) {
					getStore().favorites.includes(item) ? getActions().removeFavorite(item)
						: setStore({ favorites: [...getStore().favorites, item] })
				} else {
					setStore({ favorites: [item] })
				}
			},
			// addFavorites: (item, id) => {
			// 	const store = getStore();
			// 	setStore({ favorites: [...store.favorites, item] })
			// 	const favorites = store.favorites;
			// 	const isItemInFavorites = favorites.map((item) => item.name === id).includes(true);
			// 	const updatedFavorites = isItemInFavorites
			// 		?
			// 		favorites.filter((item) => !(item.name === id))
			// 		: 
			// 		[...favorites, { id }];
			// 	setStore([...favorites, (item, id)])
			// },
			// getData: async () => {
			// 	const store = getStore();
			// 	const url = store.baseUrl;
			// 	const options = {
			// 		method: 'GET',
			// 		hearders: { 'Content-Type': 'application/json'},
			// 		body: JSON.stringify()
			// 	};
			// 	const response = await fetch(url, options);
			// 	if (response.ok) {
			// 		const data = await response.json()
			// 		console.log(data);
			// 		// setStore({ data: data })
			// 	} else {
			// 		console.log('Error: ', response.status, response.statusText)
			// 	}
			// },
			getCharacters: async () => {
				const store = getStore();
				const url = store.baseUrl + 'people';
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					// console.log({ 'characters': data.results });
					setStore({ characters: data.results });
					// localStorage.setItem("characters", JSON.stringify(data.results));
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getCharactersDetails: async (id) => {
				const store = getStore();
				const url = store.baseUrl + 'people/' + id;
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					setStore({ currentCharacter: data.result })
					// localStorage.setItem({'characters': JSON.stringify(data.results)})
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getPlanets: async () => {
				const store = getStore();
				const url = store.baseUrl + 'planets';
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log({ 'planets': data.results });
					setStore({ planets: data.results });
					// localStorage.setItem("planets", JSON.stringify(data.results));
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getPlanetsDetails: async (id) => {
				const store = getStore();
				const url = store.baseUrl + 'planets/' + id;
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					console.log({ 'planets': data.result.properties });
					setStore({ currentPlanet: data.result.properties })
					// localStorage.setItem({'characters': JSON.stringify(data.results)})
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getStarships: async () => {
				const store = getStore();
				const url = store.baseUrl + 'starships';
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log({ 'starships': data.results });
					setStore({ starships: data.results });
					// localStorage.setItem("starships", JSON.stringify(data.results));
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getStarshipsDetails: async (id) => {
				const store = getStore();
				const url = store.baseUrl + 'starships/' + id;
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json()
					console.log({ 'starships': data.result.properties });
					setStore({ currentStarship: data.result.properties })
					// localStorage.setItem({'characters': JSON.stringify(data.results)})
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
		}
	};
};

export default getState;
