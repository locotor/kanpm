package com.locotor.kanpm.services;

import java.util.List;

import com.locotor.kanpm.KanpmApplication;
import com.locotor.kanpm.model.entities.User;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = KanpmApplication.class)
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userService.list(null);
        Assertions.assertEquals(2, userList.size());
        userList.forEach(System.out::println);
    }
}
