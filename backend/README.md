# :world_map: COOL PLACE - backend

## :checkered_flag: Installation

```bash
$ pip install -r requirements.txt
```

```bash
# 로컬 서버 실행
$ python manage.py runserver --settings=cool_place.local
```



## :closed_lock_with_key:MySQL Settings

1. New Connection 생성

   <img width="516" alt="mysql" src="https://user-images.githubusercontent.com/52685261/88482646-9b449680-cf9d-11ea-981e-41d97900741b.PNG">

   **Hostname은 127.0.0.1(기본 값)으로 해도 돼!**

   **Default Schema는 빈 값으로 둬도 돼!**

   (나는 해당 포트에서 예전에 쓰던 db가 남아있어서 구분해 둔거야)

2. New Schema 생성

   <img width="658" alt="mysql2" src="https://user-images.githubusercontent.com/52685261/88482643-9a136980-cf9d-11ea-9b5a-c37eadabcaef.PNG">

   테이블은 나중에 모델링 하고 생성할 예정!