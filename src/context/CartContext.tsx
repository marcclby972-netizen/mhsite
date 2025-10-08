'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  category: 'service' | 'offer' | 'student';
  isQuote?: boolean;
  description?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  showCheckoutForm: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CHECKOUT' }
  | { type: 'OPEN_CHECKOUT_FORM' }
  | { type: 'CLOSE_CHECKOUT_FORM' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (item: CartItem) => void;
  checkout: () => void;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // Ne pas ajouter de doublons
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };
    case 'CHECKOUT':
      return {
        ...state,
        isOpen: false,
        showCheckoutForm: true,
      };
    case 'OPEN_CHECKOUT_FORM':
      return {
        ...state,
        showCheckoutForm: true,
      };
    case 'CLOSE_CHECKOUT_FORM':
      return {
        ...state,
        showCheckoutForm: false,
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    showCheckoutForm: false,
  });

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const checkout = () => {
    dispatch({ type: 'CHECKOUT' });
  };

  // Sauvegarder le panier dans localStorage
  useEffect(() => {
    // Vérifier si nous sommes côté client
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('mh-advisory-cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        parsedCart.items.forEach((item: CartItem) => {
          dispatch({ type: 'ADD_ITEM', payload: item });
        });
      }
    }
  }, [dispatch]);

  useEffect(() => {
    // Vérifier si nous sommes côté client
    if (typeof window !== 'undefined') {
      localStorage.setItem('mh-advisory-cart', JSON.stringify(state));
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

