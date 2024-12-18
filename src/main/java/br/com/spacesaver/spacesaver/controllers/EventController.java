package br.com.spacesaver.spacesaver.controllers;

import br.com.spacesaver.spacesaver.dto.EventAddMemberDTO;
import br.com.spacesaver.spacesaver.dto.EventResponseDTO;
import br.com.spacesaver.spacesaver.services.EventService;
import br.com.spacesaver.spacesaver.domain.events.Event;
import br.com.spacesaver.spacesaver.dto.EventRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<Event> create(@RequestBody EventRequestDTO body){
        Event newEvent = this.eventService.createEvent(body);
        return ResponseEntity.ok(newEvent);
    }

    @GetMapping
    public ResponseEntity<List<EventResponseDTO>> getEvents(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "8") int size){
        List<EventResponseDTO> allEvents = this.eventService.getEvents(page, size);
        return ResponseEntity.ok(allEvents);
    }

    @PutMapping
    public ResponseEntity<Event> addMember(@RequestBody EventAddMemberDTO body){
        Event membersEvent = this.eventService.addMember(body);
        return ResponseEntity.ok(membersEvent);
    }
}
