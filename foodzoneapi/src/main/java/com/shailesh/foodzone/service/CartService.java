package com.shailesh.foodzone.service;

import com.shailesh.foodzone.io.CartRequest;
import com.shailesh.foodzone.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
