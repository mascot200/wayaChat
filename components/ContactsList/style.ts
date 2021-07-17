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

    status:{
        fontSize: 16,
        color: 'gray'
    },



    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent:'space-between',
        paddingLeft: 10

    },

    leftContainer:{
        flexDirection: 'row',
    },

    midContainer:{
        justifyContent: 'space-around',
    }
})

export default styles;