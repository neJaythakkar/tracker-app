export const createSetter = (name, props) =>
	props.map(prop => {
		const type = `${name}/${prop}`;
		const setter = payload => {
			return {
				type,
				payload: { [prop]: payload || {} }
			};
		};
		setter.toString = () => type;
		return setter;
	});

export const createReducer = (defaultState, handlers) => (
	state = defaultState,
	action
) => {
	if (handlers[action.type])
		return handlers[action.type](state, action.payload);
	return state;
};

export const createSelectors = (name, props) =>
	props.map(prop => state => state[name][prop]);

export const createHandlers = ({ typeKeyMap, Name, initialState }) =>
	typeKeyMap.reduce((accumlator, nextValue) => {
		accumlator[`${Name}/${nextValue.type}`] = (
			state = initialState,
			payload
		) => {
			const { [nextValue.type]: value } = payload;
			return {
				...state,
				[nextValue.stateKey]: value
			};
		};
		return accumlator;
	}, {});
