import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    avatar:{
        width: 60,
        height:60,
        marginRight: 10,
        borderRadius:100
    },

    username:{
        fontWeight: 'bold',
        fontSize:15
    },

    lastMessage:{
        fontSize: 16,
        color: 'gray'
    },
    time:{
        fontSize: 16,
        color: 'gray',
        paddingRight: 150
    },

    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent:'space-between',
        padding: 10

    },

    leftContainer:{
        flexDirection: 'row',
    },

    midContainer:{
        justifyContent: 'space-around',
    }
})

export default styles;