import React from 'react';
import { View} from 'react-native';
import styles from './styles';

const Line = ({style}:any) => {
    return(
        <View style={[styles.container,style]}/>
    )
}

export default Line;