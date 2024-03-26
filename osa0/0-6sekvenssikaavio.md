
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST req.body.note into https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status Code 201 Created, {message: "note created"}
    deactivate server

```
