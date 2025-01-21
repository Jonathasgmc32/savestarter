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
    
    public String getEmail() {
    	return this.email;
    }
    
    public String getName() {
    	return this.name;
    }
    
    public String getCpf() {
    	return this.cpf;
    }
    
    public String getPassword() {
    	return this.password;
    }
    
    public void setEmail(String email) {
    	this.email = email;
    }
    public void setName(String name) {
    	this.name = name;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Set<Event> getEvents() {
		return events;
	}

	public void setEvents(Set<Event> events) {
		this.events = events;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
