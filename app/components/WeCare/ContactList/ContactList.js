import React from 'react';
import { FlatList, View } from 'react-native';
import { arrayOf, string, shape, func, number } from 'prop-types';
import PhoneNumber from 'awesome-phonenumber';
import ListItem from 'app/components/common/ListItem/';
import style from './style';

const ContactList = ({data, onItemPress}) => {

	const separator = () => <View style={[style.separator]} />;

	const row = ({item}) => {
		return (
			<ListItem 
				primaryText={item.name} 
				secondaryText={new PhoneNumber(item.number, 'US').getNumber('national')}
				separator={false}
				onPress={() => onItemPress(item.id)} 
			/>);
	};

	return (
		<FlatList
			ItemSeparatorComponent={separator}
			keyExtractor={(item) => item.id}
			data={data}
			renderItem={row}
		/>
	);
};

ContactList.propTypes = {
	data: arrayOf(shape({
		id: number.isRequired,
		name: string.isRequired,
		number: string.isRequired,
	})).isRequired,
	onItemPress: func.isRequired,
};

export default ContactList;