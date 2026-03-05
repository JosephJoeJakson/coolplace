# My Favorite Places app

This is a demo app to work arround Docker and CI, you should clone this repo, remove the `.git` folder and push it to your own public repo!

The client folder is empty, you may create an interface to communicate with the server! This is kind of a bonus
Depuis la racine du projet [compose.yml](/home/adrien/Documents/devops/esgi-2603-my-favorite-places/compose.yml) :

1. Lancer l’appli
```bash
cd /home/adrien/Documents/devops/esgi-2603-my-favorite-places
docker compose -f compose.yml up --build
```

2. Tester le front  
Ouvre `http://localhost:8080`

3. Tester l’API rapidement (exemple création user)
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret123"}'
```

4. Tester avec Bruno (collection déjà ajoutée dans [bruno/create-user.bru](/home/adrien/Documents/devops/esgi-2603-my-favorite-places/bruno/create-user.bru))
```bash
docker run --rm --network host \
  -v /home/adrien/Documents/devops/esgi-2603-my-favorite-places:/work \
  -w /work/bruno node:20-alpine \
  sh -lc "npx -y @usebruno/cli run create-user.bru"
```

5. Arrêter
```bash
docker compose -f compose.yml down
```

Reset complet de la BDD si besoin :
```bash
docker compose -f compose.yml down -v
```# coolplace
# coolplace
