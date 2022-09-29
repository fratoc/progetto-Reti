# progetto-Reti
progetto di reti di calcolatori.


# REQUISITI 
1) API OAUTH: 
   * GOOGLE OAUTH: per effettuare login (con google);
2) API commerciali/terze parti:
   * STORIES API: per ottenere le prime 40 news mondiali;
   * GOOGLE CALENDAR: per vedere gli eventi sul calendario e/o settarli;
3) docker:
   * Docker: utilizzato per la creazione della Web App su più container e per l'automazione del processo di lancio;
4) Git ed Read.me:
   * README.md: utilizzato per illustrare i punti fondamentali del progetto (scopo del progetto, tecnologie utilizzate ecc.);
   * GitHub: utilizzato per condividere i file e permettere al gruppo di lavorare allo stesso progetto contemporaneamente;
5) CI/CD:
    * effettuato tramite GitHub actions (in particolare usando github desktop);
6) SICUREZZA:
   * Self-signed Certificate: utilizzati per ottenere una connessione sicura basata su https;

# EXPLANATION OF THE WEBSITE
the website rapresent a full interactive blog, in which people can post their stories and can see other's stories too.

# ARCHITECTURE
we use docker to compose our components of application.
We have two containers: node (representing the nodejs server) and nginx (which duty is to make the communication between client and server).

## docker-compose
to make docker running up, you have to write this in ur terminal:

```bash
docker compose up
```
after this u will have ur server running up, but you have not set up secure connection (https), so before checking if it's running you have to create the appropriate ssh tunel.
## https
We ensured that by making an autocertification using ssh.
U have to open an other terminal and run this command:

```bash
    ssh -R 80:localhost:3000 localhost.run
```
if it doesn't work it means u have not the key, so u have to create/generate it. In order to make this you have to run this command:
```bash
        ssh-keygen -t rsa
```
After that (notice: leave all the request empty (like password...)) u can run the previous command, so now run:
```bash
    ssh -R 80:localhost:3000 localhost.run
```
this will create a link that guarantee the access to our website. it will show you something similar:

```bash
** your connection id is 584a5548-88ae-46e7-a6f7-d4c63f0c39b7, please mention it
if you send me a message about an issue. **

72ebd946d87960.lhrtunnel.link tunneled with tls termination,
https://72ebd946d87960.lhrtunnel.link
```
The website will be accessible in the link generated at the end. 

## TEST
To ensure that app is working we create some test.
They are accessible on the folder test, and to test them u have to move on that folder, so:
```bash
cd test
```
and to run the tester u have to write:
```bash
npm run test
```
