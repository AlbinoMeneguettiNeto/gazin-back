# Migrations:
Para rodar, precisará rodar as migrations antes, para rodar use o comando:

`npx ts-node ./node_modules/.bin/typeorm migration:run`

# Rotas:
__GET__ `/api/developers`

__QueryString__
```
limit: Número, limita quantos dados serão mostrados.
page: Número, qual página você quer buscar.
keyword: string, para buscar alguém pelo campo nome, que seja parecido.
```

__Response__
```
Status: 200
[
  {
    "id": 1,
    "name": "Tester",
    "gender": "M",
    "age": 27,
    "hobby": "Testar",
    "birthday": "1993-06-28T03:00:00.000Z",
    "created_at": "2021-02-09T02:54:35.429Z",
    "updated_at": "2021-02-09T03:25:01.709Z"
  }
]
```

__QueryString Response__

```
Status: 200
{
  "data": [
    {
      "id": 1,
      "name": "Tester",
      "gender": "M",
      "age": 27,
      "hobby": "Testar",
      "birthday": "1993-06-28T03:00:00.000Z",
      "created_at": "2021-02-09T02:54:35.429Z",
      "updated_at": "2021-02-09T03:25:01.709Z"
    }
  ],
  "count": 1
}
```

__GET__ `/api/developers/:id`
```
Status: 200
[
  {
    "id": 1,
    "name": "Tester",
    "gender": "M",
    "age": 27,
    "hobby": "Testar",
    "birthday": "1993-06-28T03:00:00.000Z",
    "created_at": "2021-02-09T02:54:35.429Z",
    "updated_at": "2021-02-09T03:25:01.709Z"
  }
]
```

__POST__ `/api/developers`

__Request__
```
{
	"name": "Tester",
	"gender": "M",
	"age": 27,
	"hobby": "Testar",
	"birthday": "06/28/1993"
}
```
__Response__
```
Status: 201
{
    "id": 1,
    "name": "Tester",
    "gender": "M",
    "age": 27,
    "hobby": "Testar",
    "birthday": "1993-06-28T03:00:00.000Z",
    "created_at": "2021-02-09T02:54:35.429Z",
    "updated_at": "2021-02-09T03:25:01.709Z"
  }
```

__PUT__ `/api/developers/:id`

__Request__
```
{
	"name": "Tester",
	"gender": "M",
	"age": 28,
	"hobby": "Testar",
	"birthday": "06/28/1993"
}
```
__Response__
```
Status: 200
{
    "id": 1,
    "name": "Tester",
    "gender": "M",
    "age": 28,
    "hobby": "Testar",
    "birthday": "1993-06-28T03:00:00.000Z",
    "created_at": "2021-02-09T02:54:35.429Z",
    "updated_at": "2021-02-09T03:25:01.709Z"
  }
```
__DELETE__ `/api/developers/:id`
```
Status: 204
```