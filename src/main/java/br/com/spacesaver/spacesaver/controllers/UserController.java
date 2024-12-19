package br.com.spacesaver.spacesaver.controllers;

import br.com.spacesaver.spacesaver.domain.user.User;
import br.com.spacesaver.spacesaver.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Object> getUser(){
        return ResponseEntity.ok(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
    }
    @GetMapping(value = {"/getUsers", "/{userId}"})
    public ResponseEntity<List<User>> getAllOrUnique(@PathVariable(required = false) String userId){
        return ResponseEntity.ok(userService.findUser(userId));
    }
}
