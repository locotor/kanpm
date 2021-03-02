package com.locotor.kanpm.mappers;

import java.util.List;

import com.locotor.kanpm.KanpmApplication;
import com.locotor.kanpm.model.entities.User;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = KanpmApplication.class)
public class UserMapperTest {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userMapper.selectList(null);
        Assertions.assertEquals(2, userList.size());
        userList.forEach(System.out::println);
    }
}
