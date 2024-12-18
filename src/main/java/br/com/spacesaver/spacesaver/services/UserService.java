package br.com.spacesaver.spacesaver.services;

import br.com.spacesaver.spacesaver.domain.user.User;
import br.com.spacesaver.spacesaver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findUser(String userId) {
        if (null != userId) {
            return userRepository.findAllById(userId);
        } else {
            return userRepository.findAll();
        }
    }
}
