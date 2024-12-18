package br.com.spacesaver.spacesaver.dto;

import br.com.spacesaver.spacesaver.domain.user.User;

import java.util.Date;
import java.util.Set;

public record EventResponseDTO(String id, String title, String description, String location, String type, Date date, String imgUrl, Set<User> event_users) {
}
