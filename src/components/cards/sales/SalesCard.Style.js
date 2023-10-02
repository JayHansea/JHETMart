import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    width: SIZES.width / 2.5,
    marginHorizontal: SIZES.xSmall,
    marginVertical: SIZES.medium,
  },
  image: {
    width: SIZES.width / 2.5,
    height: 200,
  },
  title: {
    width: SIZES.width / 2.5,
    marginTop: SIZES.medium,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.small,
    flexWrap: "wrap",
  },
  discountPrice: {
    color: COLORS.green,
    fontSize: SIZES.large,
  },
  priceSeperator: {
    fontSize: SIZES.large,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: SIZES.medium,
    color: COLORS.red,
  },
});

export default styles;
