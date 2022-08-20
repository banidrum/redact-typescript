# Redacted

A really silly example on how to redact sensitive content from a JSON file.

It could be a little more dynamic but it is good for a starting point.

The idea is to replace the sensitive content with 😎.

## Input example:

```json
{
  "user": {
    "username": "teste",
    "cpf": "12345678912",
    "password": "123"
  },
  "lat": "-23.000",
  "long": "-46.000",
  "ip": "123.123.123.123"
}
```

## Output example:
