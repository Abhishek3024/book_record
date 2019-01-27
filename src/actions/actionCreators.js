// constants
export const INCREMENT_LIKES = 'INCREMENT_LIKES';

//incremen
export const increment = (id) => {
	return{
		type:'INCREMENT_LIKES',
		id
	}
}