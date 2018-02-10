import { StyleSheet } from 'react-native'

const cardDepthOffset = {
	width: 0,
	height: 2,
}

export default StyleSheet.create({
	card: {
		position: 'relative',
		flexDirection: 'column',
	    minWidth: 0,
		backgroundColor: '#fff',
	    borderWidth: 0,
	    borderStyle: 'solid',
	    borderColor: 'rgba(0,0,0, .125)',
	    borderRadius: 10,
	},
	cardBody: {
	    	padding: 20,
	},
	depth1: {
		shadowOffset:cardDepthOffset,
		shadowRadius: 20,
		shadowColor: '#000',
		shadowOpacity: .05,
	},
	depth2: {
		shadowOffset:cardDepthOffset,
		shadowRadius: 15,
		shadowColor: '#000',
		shadowOpacity: .10,
	},
	depth3: {
		shadowOffset:cardDepthOffset,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOpacity: .18,
	},
})
