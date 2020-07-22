package com.locotor.kanpm.payloads;

import lombok.Data;

@Data
public class ApiResponse {
    private Boolean success;
    private String message;
    private Object Data;

    public ApiResponse(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}