import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./Cart.Style";
import CartItem from "../../components/cart/cartItem/CartItem";
import CartFooter from "../../components/cart/cartFooter/CartFooter";
import { useSelector } from "react-redux";
import ToastMessage from "../../components/toast/ToastMessage";

const Cart = () => {
  let total = 0;
  const cartItems = useSelector((state) => state.cart.itemsList);

  cartItems.forEach((item) => {
    total += parseFloat(item.totalPrice);
  });

  console.log(total);

  const quantity = useSelector((state) => state.cart.totalQuantity);
  console.log(quantity);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCartText}>
              <Text>Your cart is empty</Text>
              <Text>Visit Shop to add product(s) to your cart</Text>
            </View>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product_id}
                id={item.product_id}
                image={item.product_photo}
                name={item.product_title}
                price={`$${item.totalPrice}`}
                quantity={item.quantity}
              />
            ))
          )}
        </ScrollView>
        <View style={styles.summaryContainer}>
          <CartFooter quantity={quantity} total={total} />
        </View>
      </View>
      <ToastMessage />
    </SafeAreaView>
  );
};

export default Cart;
