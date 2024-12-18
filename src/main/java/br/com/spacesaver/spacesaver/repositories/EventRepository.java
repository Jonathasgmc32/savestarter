package br.com.spacesaver.spacesaver.repositories;

import br.com.spacesaver.spacesaver.domain.events.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, String> {
}
