import userModel from "../models/userModel.js";

export const addToCart = async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  
    try {
      const { itemId, quantity = 1 } = req.body;
  
      if (!itemId || typeof quantity !== "number" || quantity <= 0) {
        return res.status(400).json({ success: false, message: "Invalid input" });
      }
  
      const cart = req.user.cart || {};
      cart[itemId] = (cart[itemId] || 0) + quantity;
  
      req.user.cart = cart;
      await req.user.save();
  
      res.status(200).json({ success: true, cart });
    } catch (error) {
      console.error("Error in addToCart:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
const removeFromCart = async (req, res) => {
  // Logic for removing from cart
};

const getCart = async (req, res) => {
  // Logic for getting the cart
};

export { removeFromCart, getCart };