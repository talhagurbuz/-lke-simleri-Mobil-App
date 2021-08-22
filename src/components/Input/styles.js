import { StyleSheet, Platform } from "react-native";
import { colors } from "../../config/colors";

export const searchInputStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',

        width:300,
        borderWidth:1,
        borderColor: colors.gray,
        borderRadius: Platform.OS ==='ios' ? 8 : 4, // ios ise 8 kenar yumuşaklığı...
        overflow:'hidden',
    },
    input :{
        flex:1,
        paddingHorizontal : 12, // sağdan ve soldan.
        paddingVertical:5, // alttan ve üstten.
    },
    button:{
      flex:1,
      width:40,
      backgroundColor : colors.accent,
      alignItems:'center', // sağdan soldan ortaladı.
      justifyContent:'center', // aşağıdan yukarıdan ortaladı.
      
    },
});