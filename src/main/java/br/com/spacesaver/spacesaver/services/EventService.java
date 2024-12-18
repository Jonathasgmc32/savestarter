package br.com.spacesaver.spacesaver.services;

import br.com.spacesaver.spacesaver.domain.events.Event;
import br.com.spacesaver.spacesaver.domain.user.User;
import br.com.spacesaver.spacesaver.dto.EventAddMemberDTO;
import br.com.spacesaver.spacesaver.dto.EventRequestDTO;
import br.com.spacesaver.spacesaver.dto.EventResponseDTO;
import br.com.spacesaver.spacesaver.repositories.EventRepository;
import br.com.spacesaver.spacesaver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    public Event createEvent(EventRequestDTO data) {
        Event newEvent = new Event();
        newEvent.setTitle(data.title());
        newEvent.setDescription(data.description());
        newEvent.setLocation(data.location());
        newEvent.setType(data.type());
        newEvent.setDate(new Date(data.date()));
        newEvent.setImgUrl(data.imgUrl());

        eventRepository.save(newEvent);
        return newEvent;
    }

    public List<EventResponseDTO> getEvents(int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        Page<Event> eventsPage = this.eventRepository.findAll(pageable);
        return eventsPage.map(event -> new EventResponseDTO(event.getId(), event.getTitle(), event.getDescription(), event.getLocation(), event.getType(), event.getDate(), event.getImgUrl(), event.getEvent_users()))
                .stream().toList();
    }

    public Event addMember(EventAddMemberDTO data){
        Set<User> userSet = null;
        Event event = this.eventRepository.findById(data.eventId()).orElse(null);
        User user = this.userRepository.findById(data.userId()).orElse(null);
        userSet = event.getEvent_users();
        userSet.add(user);
        event.setEvent_users(userSet);
        eventRepository.save(event);
        return event;
    }
}
