package br.com.spacesaver.spacesaver.domain.user;

import br.com.spacesaver.spacesaver.domain.events.Event;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;
    private String email;
    private String cpf;
    private String password;

    @JsonIgnore
    @ManyToMany(mappedBy = "event_users", fetch = FetchType.EAGER)
    private Set<Event> events = new HashSet<>();

}
