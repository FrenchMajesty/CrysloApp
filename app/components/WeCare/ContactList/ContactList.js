import React from 'react';
import { FlatList, View } from 'react-native';
import ContactRow from '../ContactRow/';
import style from './style';

const ContactList = ({data}) => {

	const separator = () => <View style={[style.separator]} />;

	return (
		<FlatList
			ItemSeparatorComponent={separator}
			keyExtractor={(item) => item.id}
			data={data}
			renderItem={ContactRow}
		/>
	);
};

export default ContactList;