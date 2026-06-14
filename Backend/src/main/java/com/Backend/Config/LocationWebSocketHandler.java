package com.Backend.Config;

import com.Backend.Entity.Location;
import com.Backend.Services.LocationServices;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

@Component
public class LocationWebSocketHandler extends TextWebSocketHandler {
    public final List<WebSocketSession> sessions = new ArrayList<>();
    private final ObjectMapper mapper = new ObjectMapper();
    private final LocationServices locationServices;

    public LocationWebSocketHandler(LocationServices locationServices) {
        this.locationServices = locationServices;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        Location location = mapper.readValue(message.getPayload(), Location.class);
        locationServices.save(location);
        System.out.println(location);

        for (WebSocketSession s : sessions) {
            if (s.isOpen()) {
                s.sendMessage(message); // broadcast to all, including sender
            }
        }
    }

}

