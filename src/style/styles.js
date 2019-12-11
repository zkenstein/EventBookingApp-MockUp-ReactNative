import { StyleSheet, Dimensions } from "react-native";
import Color from "../config/colors.json";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const UtilStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  containerJustifyCenter: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  containerJustifyCenterYellow: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Color.yellow_psm
  },
  headerStandard: {
    backgroundColor: Color.yellow_psm,
    height: 180,
    color: "black",
    flexDirection: "column"
  },
  headerSmall: {
    backgroundColor: Color.yellow_psm,
    height: 100,
    color: "black",
    flexDirection: "column"
  },
  headerTransparent: {
    backgroundColor: "white",
    height: 70,
    // top: 100,
    color: "black",
    elevation: 0,
    flexDirection: "column"
  },
  headerTitleOnly: {
    backgroundColor: Color.yellow_psm,
    height: 70,
    color: "black",
    flexDirection: "column"
  },
  navigationBarTitle: {
    fontFamily: "Lato-Bold",
    textAlign: "center",
    flex: 1,
    color: "black",
    fontSize: 16
  },
  navigationBarTitle2: {
    fontFamily: "Lato-Bold",
    textAlign: "center",
    flex: 1,
    color: "black",
    fontSize: 16,
    marginLeft: -30
  },
  buttonFillWidthYellow: {
    backgroundColor: Color.yellow_psm,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center"
  },
  buttonFillWidthWhite: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%",
    justifyContent: "center"
  },
  buttonFillWidthBlack: {
    backgroundColor: "black",
    borderRadius: 30,
    width: "100%",
    justifyContent: "center"
  },
  btnWhite: {
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    height: 30,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 }
  },
  btnYellow: {
    backgroundColor: Color.yellow_psm,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    height: 30
  },
  btnTransparent: {
    backgroundColor: "transparent",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    height: 30
  },
  btnTextBlack: {
    color: "black",
    fontFamily: "Lato-Regular",
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "100"
  },
  btnTextGrey: {
    color: "grey",
    fontFamily: "Lato-Regular",
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "100"
  },
  buttonTextBlack: {
    color: "black",
    fontFamily: "Lato-Bold",
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "bold"
  },
  buttonTextWhite: {
    color: "white",
    fontFamily: "Lato-Bold",
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "bold"
  },
  buttonTextYellow: {
    color: Color.yellow_psm,
    fontFamily: "Lato-Bold",
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "bold"
  },
  buttonPay: {
    backgroundColor: Color.yellow_psm,
    width: 80,
    height: 35,
    justifyContent: "center"
  },
  smallText: {
    color: "black",
    fontFamily: "Lato-Regular",
    fontSize: 9
  },
  standardText: {
    color: "black",
    fontFamily: "Lato-Regular",
    fontSize: 12
  },
  titleText: {
    color: "black",
    fontFamily: "Lato-Bold",
    fontSize: 15,
    fontWeight: "bold"
  },
  buttonWhite: {
    backgroundColor: "white",
    width: 130,
    height: 35,
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 10
  },
  standardIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    color: "black"
  },
  standardTextWithIcon: {
    color: "black",
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginLeft: 5
  },
  standardTextWithIconYellow: {
    color: Color.yellow_psm,
    fontFamily: "Lato-Bold",
    fontSize: 12,
    marginLeft: 5
  },
  standardTextButtonHome: {
    color: "black",
    fontFamily: "Lato-Bold",
    fontSize: 12,
    textAlign: "center"
  },
  hr: {
    backgroundColor: "grey",
    width: "90%",
    height: 0.5,
    marginTop: 10
  },
  viewOuterList: {
    marginHorizontal: 20,
    width: "89%",
    alignSelf: "flex-start",
    elevation: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    borderWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  viewOuterListEditProfile: {
    width: "100%",
    alignSelf: "flex-start",
    elevation: 1,
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    borderWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  viewEachButtonList: {
    width: "100%",
    flexDirection: "row",
    padding: 5,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputIcon: {
    fontSize: 15,
    color: Color.dark_green,
    marginLeft: 4,
    marginRight: 4,
    fontWeight: "bold"
  },
  circleBlackOnButton: {
    backgroundColor: "black",
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  circleWhiteOnButton: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  circleYellowOnButton: {
    backgroundColor: Color.yellow_psm,
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  circleGreyOnButton: {
    backgroundColor: Color.material_grey_300,
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  circleGreyOnButton2: {
    backgroundColor: Color.grey_psm,
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  smallCircleGreyOnButton: {
    backgroundColor: Color.material_grey_300,
    borderRadius: 20,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSelected: {
    opacity: 1,
    color: "black"
  },
  formInputStandard: {
    margin: 10,
    alignItems: "center",
    fontSize: 12,
    paddingLeft: 20,
    height: 40,
    fontFamily: "Lato-Regular",
    borderRadius: 10,
    elevation: 1,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  formPicker: {
    margin: 10,
    alignItems: "center",
    fontSize: 12,
    fontFamily: "Lato-Regular",
    borderRadius: 10,
    elevation: 1,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  buttonOnMyAccount: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 1,
    backgroundColor: "black",
    padding: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  cardMyPurchaseDetails: {
    width: 260,
    margin: 10,
    marginTop: 0,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 }
  },
  cardParking: {
    width: 290,
    margin: 10,
    marginTop: 0,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 }
  },
  buttonMyPurchase: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    elevation: 1,
    backgroundColor: "white",
    padding: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderWidth: 0.5,
    borderColor: "grey"
  },
  circleBigBlackOnButton: {
    backgroundColor: "black",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  formInputLine: {
    margin: 10,
    alignItems: "center",
    fontSize: 12,
    paddingLeft: 20,
    height: 40,
    fontFamily: "Lato-Regular",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  formInputNum: {
    marginRight: 10,
    alignItems: "center",
    fontSize: 30,
    fontFamily: "Lato-Regular",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "solid",
    textAlign: "center"
  }
});
