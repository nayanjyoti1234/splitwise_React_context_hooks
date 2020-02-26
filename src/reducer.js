export function reducer(state,action){

	const value = {...state};

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
		case 'ADD_GROUP_FRIEND':
			return {
				...value,
				groupfriend:{
					...value.groupfriend,
					groups:[
						...value.groupfriend.groups,
						{[action.key]:action.payload}
					]
				}
			}
		case 'REMOVE_FRIEND':
			return {
				...value,
				friends:[],
				amount:[]
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
