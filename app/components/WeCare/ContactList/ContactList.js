import React from 'react';
import { FlatList, View } from 'react-native';
import ContactRow from '../ContactRow/';
import style from './style';

const ContactList = ({data, onItemPress}) => {

	const separator = () => <View style={[style.separator]} />;

	const row = ({item}) => <ContactRow item={item} onPress={onItemPress} />;
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