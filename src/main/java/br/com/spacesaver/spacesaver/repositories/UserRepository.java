package br.com.spacesaver.spacesaver.repositories;

import br.com.spacesaver.spacesaver.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
    List<User> findAllById(String id);
}
