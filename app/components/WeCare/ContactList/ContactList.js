import React from 'react';
import { FlatList, View } from 'react-native';
import PhoneNumber from 'awesome-phonenumber';
import ListItem from 'app/components/common/ListItem/';
import style from './style';

const ContactList = ({data, onItemPress}) => {

	const separator = () => <View style={[style.separator]} />;

	const row = ({item}) => {
		return (<ListItem 
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

export default ContactList;