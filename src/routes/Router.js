import React from "react";
import { Router, Scene } from "react-native-router-flux";
import TicketList from "../screens/Tickets/TicketList";
import MyAccount from "../screens/MyAccount/MyAccount";
import Color from "../config/colors.json";
import { UtilStyles } from "../style/styles";
import { View } from "native-base";
import { Image, Platform } from "react-native";
import TicketDetails from "../screens/Tickets/TicketDetails";
import AddOns from "../screens/Tickets/AddOns";
import Payment from "../screens/Payment/Payment";
import Home from "../screens/Home/Home";
import TicketSeatSelection from "../screens/Tickets/TicketSeatSelection";
import TicketSectionSelection from "../screens/Tickets/TicketSectionSelection";
import Cart from "../screens/Cart/Cart";
import ParkingSelection from "../screens/Parking/ParkingSelection";
import MerchandiseList from "../screens/Merchandise/MerchandiseList";
import FoodBeverageList from "../screens/FoodBeverage/FoodBeverageList";
import Checkout from "../screens/Checkout/Checkout";
import RestaurantList from "../screens/FoodBeverage/RestaurantList";
import ArenaFacilitiesList from "../screens/ArenaFacilities/ArenaFacilitiesList";
import ArenaFacilitiesDetails from "../screens/ArenaFacilities/ArenaFacilitiesDetails";
import ArenaFacilitiesBooking from "../screens/ArenaFacilities/ArenaFacilitiesBooking";
import ParkingDetails from "../screens/Parking/ParkingDetails";
import ParkingBooking from "../screens/Parking/ParkingBooking";
import QRCodeDetails from "../screens/MyPurchases/QRCodeDetails";
import MyPurchases from "../screens/MyPurchases/MyPurchases";
import MyMerchDetails from "../screens/MyPurchases/MyMerchDetails";
import MyFNBDetails from "../screens/MyPurchases/MyFNBDetails";
import MerchandiseDetails from "../screens/Merchandise/MerchandiseDetails";
import FoodBeverageDetails from "../screens/FoodBeverage/FoodBeverageDetails";
import SeasonParkingCard from "../screens/Parking/SeasonParkingCard";
import CartMerchFNB from "../screens/Cart/CartMerchFNB";
import OrderSuccess from "../screens/OrderSuccess";
import CheckoutMerchFNB from "../screens/Checkout/CheckoutMerchFNB";
import Address from "../screens/Address";
import EditProfile from "../screens/MyAccount/EditProfile";
import BookFacilitiesDetails from "../screens/MyPurchases/BookFacilitiesDetails";
import BookParkingDetails from "../screens/MyPurchases/BookParkingDetails";
import Play from "../screens/Play";
import ParkingBookingMonthly from "../screens/Parking/ParkingBookingMonthly";
import MyPurchase from "../screens/MyPurchases/MyPurchase";
import VerifyPhoneNo from "../screens/Login/VerifyPhoneNo";
import InputPhoneNo from "../screens/Login/InputPhoneNo";
import NotificationList from "../screens/Notification/NotificationList";
import ChatList from "../screens/Chat/ChatList";
import InboxList from "../screens/Inbox/InboxList";
import CancelBookAlert from "../screens/Tickets/CancelBookAlert";
{
  /*GENERATING ICONS*/
}

const myIconHome = (
  <View>
    <Image
      source={require("../images/home_blue_icon.png")}
      style={{ height: 20, width: 20 }}
    />
  </View>
);
const myIconTicket = (
  <View>
    <Image
      source={require("../images/ticket_blue_icon.png")}
      style={{ height: 20, width: 20 }}
    />
  </View>
);

console.disableYellowBox = true;

const TabIconHome = ({ focused }) => {
  return (
    <View>
      <Image
        source={
          focused
            ? require("../images/home_blue_icon.png")
            : require("../images/home_grey_icon.png")
        }
        style={{ height: 25, width: 25 }}
      />
    </View>
  );
};

const TabIconGroup = () => {
  return myIconGroup;
};

const TabIconTicket = ({ focused }) => {
  return (
    <View>
      <Image
        source={
          focused
            ? require("../images/ticket_blue_icon.png")
            : require("../images/ticket_grey_icon.png")
        }
        style={{ height: 25, width: 25 }}
      />
    </View>
  );
};

{
  /*END GENRATING ICONS*/
}

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: Color.yellow_psm }}>
      <Scene key="root">
        <Scene
          key="main"
          gesturesEnabled={false}
          panHandlers={null}
          hideNavBar
          navigationBarStyle={{ backgroundColor: Color.yellow_psm }}
        >
          {/* <Scene
            key="OrderSuccess"
            component={OrderSuccess}
            title="Order Success"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          /> */}

          <Scene
            key="InputPhoneNo"
            component={InputPhoneNo}
            title="Input Phone No"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />
          <Scene
            key="VerifyPhoneNo"
            component={VerifyPhoneNo}
            title="Verify Phone No"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          {/* <Scene
            key="Play"
            component={Play}
            title="KUALA LUMPUR SPORTS CITY"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          /> */}

          <Scene
            key="Home"
            component={Home}
            title="KUALA LUMPUR SPORTS CITY"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MyAccount"
            component={MyAccount}
            title="My Account"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="EditProfile"
            component={EditProfile}
            title="Edit Profile"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="TicketList"
            component={TicketList}
            title="Event"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="TicketDetails"
            component={TicketDetails}
            title="Ticket Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="TicketSectionSelection"
            component={TicketSectionSelection}
            title="Ticket Section Selection"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="TicketSeatSelection"
            component={TicketSeatSelection}
            title="Ticket Seat Selection"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="Cart"
            component={Cart}
            title="Cart"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="AddOns"
            component={AddOns}
            title="Add-Ons"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="Checkout"
            component={Checkout}
            title="Checkout"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="Payment"
            component={Payment}
            title="Payment"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ParkingSelection"
            component={ParkingSelection}
            title="Parking Selection"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MerchandiseList"
            component={MerchandiseList}
            title="Merchandise List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MerchandiseDetails"
            component={MerchandiseDetails}
            title="Merchandise Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="RestaurantList"
            component={RestaurantList}
            title="Restaurant List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="FoodBeverageList"
            component={FoodBeverageList}
            title="Food &amp; Beverage List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="FoodBeverageDetails"
            component={FoodBeverageDetails}
            title="Food &amp; Beverage Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ArenaFacilitiesList"
            component={ArenaFacilitiesList}
            title="Arena &amp; Facilities List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ArenaFacilitiesDetails"
            component={ArenaFacilitiesDetails}
            title="Arena &amp; Facilities Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ArenaFacilitiesBooking"
            component={ArenaFacilitiesBooking}
            title="Arena &amp; Facilities Booking"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ParkingDetails"
            component={ParkingDetails}
            title="Parking Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ParkingBooking"
            component={ParkingBooking}
            title="Parking Booking"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ParkingBookingMonthly"
            component={ParkingBookingMonthly}
            title="Parking Booking Monthly"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="SeasonParkingCard"
            component={SeasonParkingCard}
            title="Season Parking Card"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MyPurchase"
            component={MyPurchase}
            title="My Purchase"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="QRCodeDetails"
            component={QRCodeDetails}
            title="QR Code Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MyMerchDetails"
            component={MyMerchDetails}
            title="My Merch Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="MyFNBDetails"
            component={MyFNBDetails}
            title="My FNB Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="BookFacilitiesDetails"
            component={BookFacilitiesDetails}
            title="Book Facilities Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="BookParkingDetails"
            component={BookParkingDetails}
            title="Book Parking Details"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="CartMerchFNB"
            component={CartMerchFNB}
            title="Cart Merch &amp; FNB"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="CheckoutMerchFNB"
            component={CheckoutMerchFNB}
            title="Checkout Merch &amp; FNB"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="OrderSuccess"
            component={OrderSuccess}
            title="Order Success"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="Address"
            component={Address}
            title="Address"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="ChatList"
            component={ChatList}
            title="Chat List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />
          <Scene
            key="NotificationList"
            component={NotificationList}
            title="Notification List"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="InboxList"
            component={InboxList}
            title="Inbox"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />

          <Scene
            key="CancelBookAlert"
            component={CancelBookAlert}
            title="Cancel Book Alert"
            titleStyle={UtilStyles.navigationBarTitle2}
            tintColor={"black"}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
