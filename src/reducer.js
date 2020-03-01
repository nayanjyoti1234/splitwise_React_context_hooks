export function reducer(state,action){

	const value = {...state};
	console.log(value.groups[action.key]);

	switch(action.type){
		case 'ADD_FRIEND':
			return {
				...value,
				friends:[
					...value.friends,
					action.payload
				]
			}
		case 'ADD_GROUP':
				return {
					...value,
					groups:[
						...value.groups,
						action.payload
					]
				}
		case 'ADD_GROUP1':
				return {
					...value,
					group:[
						...value.group,
						action.payload
					]
				}
		case 'REMOVE_DATA':
			return {
					group:[],
					amount:[],
					groups:[],
					friends:[]
			};

		case 'REMOVE_GROUP':
			return {
				...value,
				amount:value.amount.filter(items=> items.grouping !== action.key),
				group:value.group.filter(items=> items !== action.key)
			}
		case 'ADD_AMOUNT':
			return {
				...value,
				amount:[
					...value.amount,
					action.payload
				]
			}
		case 'REMOVE_AMOUNT':
			return {
				...value,
				amount:value.amount.filter(items=> items.id !== action.key)
			}
		default:
				return state;
	}
}
