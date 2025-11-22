package com.shailesh.foodzone.service;

import com.shailesh.foodzone.io.UserRequest;
import com.shailesh.foodzone.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
